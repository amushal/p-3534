import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  location: string;
}

const Testimonial = ({ quote, author, position, company, location }: TestimonialProps) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative bg-card/80 backdrop-blur-xl p-6 rounded-lg space-y-4 animate-fade-up">
      <Quote className="text-primary-foreground h-8 w-8 mb-4 opacity-80" />
      <p className="text-gray-300 italic">{quote}</p>
      <div className="pt-4">
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-gray-400">{position}</p>
        <p className="text-sm text-gray-400">{company} • {location}</p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Softenance transformed our legacy systems into a modern, cloud-based solution. Their expertise in enterprise architecture and SaaS development exceeded our expectations.",
      author: "Sarah Martinez",
      position: "CTO",
      company: "TechFlow Solutions",
      location: "San Antonio, Texas"
    },
    {
      quote: "Their cybersecurity implementations have significantly enhanced our data protection. The team's knowledge in AI and web development helped us stay ahead of the curve.",
      author: "Michael Chen",
      position: "Director of IT",
      company: "Pacific Digital Systems",
      location: "San Diego, CA"
    },
    {
      quote: "Working with Softenance on our enterprise software modernization was seamless. Their full-stack development capabilities and attention to detail are outstanding.",
      author: "Jennifer Wilson",
      position: "VP of Engineering",
      company: "Midwest Innovation Labs",
      location: "Ann Arbor, MI"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};