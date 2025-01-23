import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  location: string;
}

const Testimonial = ({ quote, author, position, company, location }: TestimonialProps) => (
  <div className="relative group h-full">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-dark to-gold rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative bg-card/80 backdrop-blur-xl p-6 rounded-lg space-y-4 animate-fade-up h-full flex flex-col">
      <Quote className="text-gold h-8 w-8 mb-4 opacity-80" />
      <p className="text-gray-300 italic flex-grow">{quote}</p>
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
      author: "Jack Akel",
      position: "CEO",
      company: "BridgeLOS",
      location: "Escondido, California"
    },
    {
      quote: "Their cybersecurity implementations have significantly enhanced our data protection. The team's knowledge in AI and web development helped us stay ahead of the curve.",
      author: "Mohammed Memon",
      position: "CEO",
      company: "Hifinite",
      location: "San Diego, California"
    },
    {
      quote: "Working with Softenance on our enterprise software modernization was seamless. Their full-stack development capabilities and attention to detail are outstanding.",
      author: "Raymond Conklin",
      position: "Director of IT",
      company: "RC Custom Solutions",
      location: "Dallas, Texas"
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