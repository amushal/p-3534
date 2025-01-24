import { Crown } from "lucide-react";

const MatrixBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute text-primary-foreground whitespace-nowrap animate-matrix-fall"
          style={{
            left: `${i * 10}%`,
            animationDelay: `${i * 0.5}s`,
            fontSize: "14px",
          }}
        >
          {[...Array(20)].map((_, j) => (
            <div key={j} className="my-2">
              {Math.random() > 0.5 ? "0" : "1"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <MatrixBackground />
      <div className="animate-fade-up space-y-6 max-w-3xl relative z-10">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 p-4 rounded-full bg-primary/20 text-primary-foreground hover:bg-primary/30 transition-colors">
            <Crown size={64} strokeWidth={1.5} className="text-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
            Bridging Innovation and Excellence
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-2">
            Softenance
          </p>
          <p className="text-xl text-primary-foreground font-medium">
            Innovate. Integrate. Inspire
          </p>
        </div>
        <p className="text-lg md:text-xl text-foreground/80">
          Enterprise-grade solutions in Web Development, SaaS, AI, Cybersecurity, and Full-Stack Development.
          Delivering scalable, secure, and innovative software solutions for businesses.
        </p>
      </div>
    </section>
  );
};