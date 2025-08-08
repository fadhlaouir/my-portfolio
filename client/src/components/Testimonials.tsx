import { Quote, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Revenu Québec',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    content: 'Raed\'s technical expertise and leadership skills have been invaluable to our team. He consistently delivers high-quality solutions on time and mentors junior developers effectively.',
    rating: 5
  },
  {
    id: 2,
    name: 'Ahmed Ben Ali',
    role: 'Technical Lead',
    company: 'Orange Tunisia',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    content: 'Working with Raed was exceptional. His ability to architect scalable solutions and lead cross-functional teams made our telecommunications project a huge success.',
    rating: 5
  },
  {
    id: 3,
    name: 'Marie Dubois',
    role: 'Senior Developer',
    company: 'EMIKETIC',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    content: 'Raed\'s attention to performance optimization and security best practices elevated our entire development process. A true professional who goes above and beyond.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Bootcamp Graduate',
    company: 'ReBootKamp Tunisia',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    content: 'Raed was an incredible mentor during my bootcamp. His teaching style made complex concepts easy to understand, and his guidance helped me land my first developer job.',
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Chen',
    role: 'Frontend Developer',
    company: 'Tech Startup',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    content: 'Raed\'s open-source contributions, especially create-express-node-starter, saved our team weeks of setup time. His code quality and documentation are outstanding.',
    rating: 5
  },
  {
    id: 6,
    name: 'Mohamed Trabelsi',
    role: 'Project Manager',
    company: 'Freelance Client',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    content: 'Raed delivered our e-commerce platform ahead of schedule with exceptional attention to detail. His communication and project management skills are as impressive as his coding abilities.',
    rating: 5
  }
];

export default function Testimonials() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What People Say
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Testimonials from colleagues, clients, and students who have worked with me throughout my career.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-sky-200" />
                  <p className="text-gray-600 leading-relaxed pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-sky-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}