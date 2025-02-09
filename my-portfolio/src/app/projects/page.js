import { FaWarehouse, FaRobot, FaCode } from "react-icons/fa"; // Import icons for projects
import { SiNextdotjs } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Warehouse Management Project",
      description:
        "I have created a warehouse management project where we completely digitalized the process. The management can now manage and track the inventory efficiently.",
      link: "#",
      icon: <FaWarehouse className="text-4xl text-matrix-green mb-2" />, // Icon for Warehouse
    },
    {
      title: "ChatBot Using Next.js",
      description: "A real-time chat application using Next.js and WebSockets.",
      link: "#",
      icon: <SiNextdotjs className="text-4xl text-matrix-green mb-2" />, // Icon for Next.js
    },
    {
      title: "My Portfolio Website",
      description: "A portfolio website with a Matrix-inspired theme.",
      link: "#",
      icon: <FaCode className="text-4xl text-matrix-green mb-2" />, // Icon for Code/Portfolio
    },
  ];

  return (
    <main className="min-h-screen p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">My Projects</h1>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-matrix-green p-6 rounded-lg hover:bg-matrix-gray transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Icon */}
            <div className="flex justify-center">{project.icon}</div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center mt-4">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-center mt-2">{project.description}</p>

            {/* View Project Button */}
            <a
              href={project.link}
              className="block text-center mt-4 text-matrix-green hover:underline hover:text-matrix-green/80 transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}