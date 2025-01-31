import { Crown, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Crown className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">Softenance</span>
            </div>
            <p className="text-gold mt-2">Where Technology Meets Reliability</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Ala Mushal</h3>
            <p className="text-gray-400">Founder and CTO</p>
            <a href="mailto:ala@softenance.com" className="text-gray-400 hover:text-white transition-colors">
              ala@softenance.com
            </a>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://linkedin.com/in/ala-mushal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/AMushal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="mailto:ala@softenance.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};