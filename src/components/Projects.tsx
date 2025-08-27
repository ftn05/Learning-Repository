
const Projects = () => {
  const projects = [
   {
  title: "Application Tracking System",
  description: "A fully functional App where you can check your score and review on your Gmail.",
  image: "https://plus.unsplash.com/premium_photo-1721955487745-a2c3aea86d1c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  link: "https://github.com/mehak-89/myportfolio"
},


    {
      title: "Covid19 Data Analysis",
      description: "Countries affected by corona virus",
      image: "https://media.istockphoto.com/id/1319293306/photo/woman-at-home-stock-photo.jpg?s=1024x1024&w=is&k=20&c=KnPJpyyvkDqAjdyFgKtH79Zn9zG0kUZ1072F5h9B1z0=",
      link: "https://github.com/mehak-89/coviddata"
    },
  {
      title: "Huffman Encoding ",
      description: "File compression system using huffman encoding",
      image: "https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.jpg?s=1024x1024&w=is&k=20&c=3Fusq5fboU8IOZqNP8vuLDGZSzrkMATrpzq1F0xz7io=",
      link: "https://github.com/mehak-89/huffmanbyc"
    },

    {
      title: "Students Record API",
      description: "Student Academic Records API Automation Testing",
      image: "https://media.istockphoto.com/id/1427143523/photo/two-developer-computer-programmer-working-together-coding-on-laptop-computer-at-home-office.jpg?s=1024x1024&w=is&k=20&c=Rfjm0m89hFbourYUEwiLylU0NvuMrztPGOtRqARZ_OY=",
      link: "https://github.com/mehak-89/studentRecord"
    },

    {
      title: "India Government News",
      description: "A fully functional App where you can see all types of news.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      link: "https://github.com/mehak-89/IndiaGovNewsAppbyMe"
    },
    {
      title: "Flappy Bird",
      description: "A responsive portfolio template for creative professionals and agencies.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      link: "https://github.com/mehak-89/birdgame"
    },

    {
      title: "Cryptocurrency Dashboard",
      description: "A weather app showing forecast data with beautiful visualizations.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      link: "https://github.com/mehak-89/cryptocurrency"
    },
  ];

  return (
    <section id="projects" className="section relative overflow-hidden bg-gray-900/30">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500/5 rounded-tr-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My <span className="text-cyan-400">Projects</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project presented unique challenges and learning opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-4">
                    <a href={project.link} className="button-glow text-sm">View Project</a>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
