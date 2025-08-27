
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-cyan-500/5 rounded-bl-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <AnimateOnScroll type="slide-left" className="text-left">
          <h2 className="text-2xl font-bold text-white/80">Hello, I'm</h2>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4 text-white animate-text-glow">
            Mehak
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-cyan-400 mb-6">
            And I'm a <span className=" decoration-cyan-400/70">Aspiring Software Developer</span>
          </h3>
          <p className="text-lg text-white/70 mb-8 max-w-lg">
            "As an aspiring software Engineer, I am committed to continuous growth, innovation, and delivering quality through every project I create."
          </p>

          <div className="flex space-x-4 mb-8">
            <a href="#" className="social-icon">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mehak-dhami74/" className="social-icon">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/mehak-89" className="social-icon">
              <Github size={18} />
            </a>
          </div>

          <a href="#about" className="button-glow inline-block">More About Me</a>
        </AnimateOnScroll>

     
      </div>
    </section>
  );
};

export default Hero;
