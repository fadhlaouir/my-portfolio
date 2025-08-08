import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendEmail, createContactEmailHTML } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification
      const emailSent = await sendEmail({
        to: "raed.fadhlaoui@gmail.com", // Your email address
        from: "noreply@portfolio.raed-fadhlaoui.dev", // Verified sender
        subject: `New Contact Form Message from ${validatedData.name}`,
        text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nMessage: ${validatedData.message}`,
        html: createContactEmailHTML(validatedData.name, validatedData.email, validatedData.message)
      });
      
      if (!emailSent) {
        console.warn("Failed to send email notification for contact form submission");
      }
      
      res.json({ 
        success: true, 
        message: "Message sent successfully",
        id: message.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid request data" 
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
