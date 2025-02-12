import {
  Code,
  BrainCircuit,
  ShoppingCart,
  LayoutDashboard,
  CalendarCheck,
  FileText,
} from "lucide-react";

export default function Projects() {
  // Define an array of projects with details
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with MERN stack, featuring user authentication, product management, and payment integration.",
      link: "https://example.com", // Replace with your project URL
      icon: <ShoppingCart className="text-6xl text-matrix-green" />,
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "An AI-powered chatbot using TensorFlow and Python, capable of answering user queries and providing recommendations.",
      link: "https://example.com", // Replace with your project URL
      icon: <BrainCircuit className="text-6xl text-matrix-green" />,
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js, Tailwind CSS, and Geist fonts, showcasing my skills and projects.",
      link: "https://example.com", // Replace with your project URL
      icon: <Code className="text-6xl text-matrix-green" />,
    },
    {
      title: "Task Management App",
      description:
        "A task management app built with React and Node.js, allowing users to create, update, and delete tasks.",
      link: "https://example.com", // Replace with your project URL
      icon: <CalendarCheck className="text-6xl text-matrix-green" />,
    },
    {
      title: "Social Media Dashboard",
      description:
        "A dashboard for managing social media posts, built with MongoDB and Express.js.",
      link: "https://example.com", // Replace with your project URL
      icon: <LayoutDashboard className="text-6xl text-matrix-green" />,
    },
    {
      title: "Responsive Blog Template",
      description:
        "A responsive blog template built with Tailwind CSS and Next.js, optimized for SEO.",
      link: "https://example.com", // Replace with your project URL
      icon: <FileText className="text-6xl text-matrix-green" />,
    },
  ];

  return (
    <main className="min-h-screen p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-matrix-gray border border-matrix-green rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-matrix-dark hover:border-matrix-green/80"
          >
            {/* Project Icon */}
            <div className="flex justify-center items-center h-32 bg-matrix-dark rounded-t-lg">
              {project.icon}
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-matrix-green/80">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}