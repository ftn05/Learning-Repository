
const Contact = () => {
  return (
    <section id="contact" className="section relative overflow-hidden bg-gray-900/30">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-tl-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact <span className="text-cyan-400">Me</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries or collaboration opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-white/70 mb-8">
              I'm currently available for freelance work or full-time positions. If you have a project
              that needs some creative touch, I'd love to hear about it.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-white/70">mehakdhami190@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-white/70">+91 8950904178</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-white/70">Phagwara , Punjab</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Mehak"
                    className="contact-input"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="mehakdhami190@gmail.com"
                    className="contact-input"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="contact-input"
                  required
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="contact-input resize-none"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="button-glow w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
