import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function createContactEmailHTML(name: string, email: string, message: string): string {
  const timestamp = new Date().toLocaleString();
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
      <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">New Contact Form Message</h2>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #374151; margin-bottom: 8px;">From:</h3>
          <p style="color: #6b7280; margin: 0; font-size: 16px;"><strong>${name}</strong> (${email})</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #374151; margin-bottom: 8px;">Message:</h3>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <p style="color: #374151; margin: 0; line-height: 1.6; font-size: 15px;">${message}</p>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            This message was sent through your portfolio contact form at ${timestamp}
          </p>
        </div>
      </div>
    </div>
  `;
}