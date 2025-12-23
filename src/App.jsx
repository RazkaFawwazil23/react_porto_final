import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, experiences } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img
                src="/assets/razka1.png"
                className="w-10 rounded-md"
                alt="Razka"
                loading="eager"
              />
              <q>Building the future, one line at a time</q>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <ShinyText
                text="Hi, I'm Razka Fawwazil Hakim"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>

            <h2 className="text-2xl font-semibold text-red-500 mb-4">
              Software Engineer
            </h2>

            <BlurText
              text="Transforming ideas into scalable, high-performance systems. Focused on Backend Development, Data Engineering, and Full-Stack solutions that deliver real business impact."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-lg mb-4 text-gray-300"
            />

            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="/assets/RazkaCV.pdf"
                download="Razka_Fawwazil_Hakim_CV.pdf"
                className="font-semibold bg-gradient-to-r from-red-600 to-blue-600 p-4 px-6 rounded-full hover:from-red-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-red-500/50"
              >
                <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-red-500 hover:bg-[#222] hover:border-red-400 transition-all"
              >
                <ShinyText
                  text="View Projects"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Razka Fawwazil H"
              title="Software Engineer"
              handle="razkafawwazz"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/razka2.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
        {/* tentang */}
        <div
          className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="true"
          >
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-red-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  About Me
                </h2>
                <p className="text-red-500 font-semibold mb-5">
                  Why Choose Me As Your Developer?
                </p>

                <BlurText
                  text="I'm Razka Fawwazil Hakim, a Computer Science student at Bina Nusantara University focused on Backend, Data, and Full-Stack Development, building scalable systems with real-world impact."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-6 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      10<span className="text-red-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3<span className="text-red-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-delay="300"
                    data-aos-once="true"
                  >
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.01<span className="text-red-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* Experience Timeline Section */}
        <div className="experience mt-32">
          <h1
            className="text-4xl font-bold mb-4 text-center"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="true"
          >
            Organizational Experience
          </h1>
          <p
            className="text-base text-center opacity-50 mb-14"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="150"
            data-aos-once="true"
          >
            Leadership, community engagement, and collaborative achievements
          </p>

          <div className="experience-timeline space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={index * 200}
                data-aos-once="true"
                className="relative pl-8 border-l-2 border-red-500 pb-8 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-red-500 rounded-full border-4 border-zinc-900"></div>
                <div className="bg-zinc-800/60 p-6 rounded-xl hover:bg-zinc-800/80 transition-all">
                  <h3 className="text-2xl font-bold text-red-500">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm border border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>
          <p
            className="text-base/loose opacity-50 mb-4"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="150"
            data-aos-once="true"
          >
            My Professional Skills
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-200 group shadow-lg p-5"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={tool.gambar}
                    alt="Tools Image"
                    className="w-14 h-14 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-200"
                  />
                  <div className="flex flex-col flex-1 overflow-hidden">
                    <div className="truncate">
                      <ShinyText
                        text={tool.nama}
                        disabled={false}
                        speed={3}
                        className="text-lg font-semibold block"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div
          className="proyek mt-32 py-10"
          id="project"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-once="true"
        ></div>
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-once="true"
        >
          Featured Projects
        </h1>
        <p
          className="text-base/loose text-center mb-3"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <span className="text-red-500 font-semibold">
            Real-World Solutions
          </span>{" "}
          Built with Modern Technologies
        </p>
        <p
          className="text-base/loose text-center opacity-50 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="150"
          data-aos-once="true"
        >
          Each project represents a unique challenge solved with clean code,
          innovative design, and user-focused functionality. Click any project
          to explore its features and technical implementation.
        </p>
        <div className="proyek-box mt-14">
          <div
            style={{ height: "auto", position: "relative" }}
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}

        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="150"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div
              className="flex-1 bg-zinc-800 p-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/rissoppa21@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="250"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText
                        text="Send"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
