import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaPython,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import LinkedIn and Email icons

export default function Home() {
  // Define links for each technology
  const technologies = [
    { icon: <FaReact className="text-6xl text-matrix-green" />, link: "https://reactjs.org", name: "React.js" },
    { icon: <FaNodeJs className="text-6xl text-matrix-green" />, link: "https://nodejs.org", name: "Node.js" },
    { icon: <SiNextdotjs className="text-6xl text-matrix-green" />, link: "https://nextjs.org", name: "Next.js" },
    { icon: <SiMongodb className="text-6xl text-matrix-green" />, link: "https://www.mongodb.com", name: "MongoDB" },
    { icon: <SiMysql className="text-6xl text-matrix-green" />, link: "https://www.mysql.com", name: "MySQL" },
    { icon: <SiTailwindcss className="text-6xl text-matrix-green" />, link: "https://tailwindcss.com", name: "Tailwind CSS" },
    { icon: <FaServer className="text-6xl text-matrix-green" />, link: "https://en.wikipedia.org/wiki/Virtual_private_server", name: "VPS Deployment" },
    { icon: <FaPython className="text-6xl text-matrix-green" />, link: "https://www.python.org", name: "AI & Deep Learning" },
  ];

  return (
    <main className="min-h-screen p-8">
      <div className="text-center">
        {/* Profile Picture */}
        <img
          src="/images/profile.jpg"
          alt="Hammad Nawaz"
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-matrix-green"
        />
        <h1 className="text-6xl font-bold">Hammad Nawaz</h1>
        <p className="text-xl mt-4">
          Full Stack Developer | MERN Stack | Next.js | AI | Deep Learning
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="bg-matrix-green text-matrix-dark px-6 py-2 rounded-lg hover:bg-matrix-green/80"
          >
            Learn More
          </a>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8">My Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-matrix-gray hover:border-matrix-green/80 hover:text-matrix-green/80"
              >
                {/* Icon */}
                {tech.icon}
                {/* Technology Name */}
                <p className="mt-2">{tech.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing</h2>
          <p className="text-lg mb-8">
            I specialize in building scalable, performant, and user-friendly web applications.
            Whether it's a full-stack project or a deep learning model, I'm here to help.
          </p>

          {/* Get in Touch Card */}
          <div className="max-w-xs mx-auto">
            <a
              href="/contact"
              className="flex flex-col items-center p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-matrix-gray hover:border-matrix-green/80 hover:text-matrix-green/80"
            >
              {/* Icons */}
              <div className="flex space-x-4 mb-4">
                <FaLinkedin className="text-6xl text-matrix-green" />
                <FaEnvelope className="text-6xl text-matrix-green" />
              </div>
              {/* Text */}
              <span className="text-xl font-bold">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}