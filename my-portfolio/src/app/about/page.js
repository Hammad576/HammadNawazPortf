"use client"
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      {/* Content Container */}
      <div
        className={`space-y-6 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Introduction */}
        <p className="text-xl text-center md:text-left">
          Hi, I'm{" "}
          <span className="font-bold text-matrix-green">Hammad Nawaz</span>, a
          Full Stack Developer specializing in the MERN stack and Next.js. I
          have hands-on experience in MySQL, MongoDB, and deploying applications
          on VPS.
        </p>

        {/* Education */}
        <p className="text-xl text-center md:text-left">
          Currently, I'm studying at COMSATS University Islamabad, focusing on
          deep learning and AI. I'm passionate about building scalable web
          applications and exploring the frontiers of artificial intelligence.
        </p>

        {/* Expertise Section */}
        <div>
          <p className="text-xl font-semibold text-center md:text-left mb-4">
            My expertise includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Expertise Boxes */}
            <div className="p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:bg-matrix-gray hover:border-matrix-green/80 hover:scale-105">
              <p className="text-lg font-bold">MERN Stack</p>
              <p className="text-sm mt-2">
                MongoDB, Express, React, Node.js
              </p>
            </div>
            <div className="p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:bg-matrix-gray hover:border-matrix-green/80 hover:scale-105">
              <p className="text-lg font-bold">Next.js</p>
              <p className="text-sm mt-2">
                Server-side rendering and static site generation
              </p>
            </div>
            <div className="p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:bg-matrix-gray hover:border-matrix-green/80 hover:scale-105">
              <p className="text-lg font-bold">Database Management</p>
              <p className="text-sm mt-2">MySQL, MongoDB</p>
            </div>
            <div className="p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:bg-matrix-gray hover:border-matrix-green/80 hover:scale-105">
              <p className="text-lg font-bold">VPS Deployment</p>
              <p className="text-sm mt-2">
                Server management and application deployment
              </p>
            </div>
            <div className="p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:bg-matrix-gray hover:border-matrix-green/80 hover:scale-105">
              <p className="text-lg font-bold">AI & Deep Learning</p>
              <p className="text-sm mt-2">
                Exploring machine learning and neural networks
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}