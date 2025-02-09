import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaPython,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

export default function Home() {
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
            <div className="flex flex-col items-center">
              <FaReact className="text-6xl text-matrix-green" />
              <p className="mt-2">React.js</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-6xl text-matrix-green" />
              <p className="mt-2">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-6xl text-matrix-green" />
              <p className="mt-2">Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-6xl text-matrix-green" />
              <p className="mt-2">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-6xl text-matrix-green" />
              <p className="mt-2">MySQL</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-6xl text-matrix-green" />
              <p className="mt-2">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <FaServer className="text-6xl text-matrix-green" />
              <p className="mt-2">VPS Deployment</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPython className="text-6xl text-matrix-green" />
              <p className="mt-2">AI & Deep Learning</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg mb-8">
            I specialize in building scalable, performant, and user-friendly web
            applications. Whether it's a full-stack project or a deep learning
            model, I'm here to help.
          </p>
          <a
            href="/contact"
            className="bg-matrix-green text-matrix-dark px-6 py-2 rounded-lg hover:bg-matrix-green/80"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
