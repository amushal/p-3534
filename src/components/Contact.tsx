import { useState } from "react";
import { useToast } from "../hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-primary hover:bg-primary/90 rounded-lg font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};