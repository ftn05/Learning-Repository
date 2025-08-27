
import { AnimateOnScroll } from "@/components/ui/animation";

const Certifications = () => {
  const certifications = [
    {
      title: "Tableau",
      issuer: "Meta",
      date: "2023",
      image: "/certificates/cert3.jpeg"
    },
    {
      title: "Supervised Machine Learning",
      issuer: "Coursera",
      date: "2022",
      image: "/certificates/cert4.jpeg"
    },
    {
      title: "Android Development",
      issuer: "coursera",
      date: "2022",
      image: "/certificates/cert5.jpeg"
    },
    {
      title: "Machine Learning",
      issuer: "Coursera",
      date: "2021",
      image: "/certificates/cert2.jpeg"
    },
    {
      title: "Cloud Computing (AWS)",
      issuer: "Gokboru Tech",
      date: "2021",
      image: "/certificates/cert1.jpeg"
    },
  ];

  return (
    <section id="certifications" className="section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-bl-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <AnimateOnScroll type="fade-in" className="text-center mb-16">
          <h2 className="section-title">My <span className="text-cyan-400">Certifications</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            I believe in continuous learning. Here are some of the certifications I've earned.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <AnimateOnScroll
              key={index}
              type="zoom-in"
              delay={index + 2}
              className="h-full"
            >
              <div className="group h-full bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 bg-cyan-500/80 text-white px-3 py-1 text-sm rounded-bl-lg">
                    {cert.date}
                  </div>
                  <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex justify-between items-center">
                      <div className="bg-cyan-500/20 border border-cyan-400/30 px-2 py-1 rounded text-xs text-cyan-400">
                        {cert.issuer}
                      </div>
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-500/20 border border-cyan-400/30 px-2 py-1 rounded text-xs text-cyan-400 hover:bg-cyan-400/30 transition"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-white/70">
                    A professional certification validating expertise and knowledge in {cert.title.toLowerCase()}.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;