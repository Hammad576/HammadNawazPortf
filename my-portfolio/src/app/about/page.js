import {
  Code,
  BrainCircuit,
  Users,
  Lightbulb,
  BookOpen,
  MessageCircle,
} from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      {/* Introduction */}
      <div className="text-center md:text-left">
        <p className="text-xl mb-4">
          Hi, I'm <span className="font-bold text-matrix-green">Hammad Nawaz</span>, a Full Stack Developer specializing in the MERN stack and Next.js.
        </p>
        <p className="text-xl mb-8">
          Currently, I'm studying at COMSATS University Islamabad, focusing on deep learning and AI. I'm passionate about building scalable web applications and exploring the frontiers of artificial intelligence.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills & Attributes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Full Stack Developer */}
          <div className="flex flex-col items-center p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-matrix-gray hover:border-matrix-green/80">
            <Code className="text-6xl text-matrix-green mb-4" />
            <h3 className="text-lg font-bold">Full Stack Developer</h3>
            <p className="text-matrix-green/80">Expertise in both frontend and backend development.</p>
          </div>

          {/* Communication Skills */}
          <div className="flex flex-col items-center p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-matrix-gray hover:border-matrix-green/80">
            <MessageCircle className="text-6xl text-matrix-green mb-4" />
            <h3 className="text-lg font-bold">Communication Skills</h3>
            <p className="text-matrix-green/80">Effective communication and teamwork abilities.</p>
          </div>

          {/* Leadership Skills */}
          <div className="flex flex-col items-center p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-matrix-gray hover:border-matrix-green/80">
            <Users className="text-6xl text-matrix-green mb-4" />
            <h3 className="text-lg font-bold">Leadership Skills</h3>
            <p className="text-matrix-green/80">Proven leadership in team projects and initiatives.</p>
          </div>

          {/* Researcher */}
          <div className="flex flex-col items-center p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-matrix-gray hover:border-matrix-green/80">
            <BookOpen className="text-6xl text-matrix-green mb-4" />
            <h3 className="text-lg font-bold">Researcher</h3>
            <p className="text-matrix-green/80">Focused on deep learning, AI, and cutting-edge technologies.</p>
          </div>

          {/* Problem Solver */}
          <div className="flex flex-col items-center p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-matrix-gray hover:border-matrix-green/80">
            <Lightbulb className="text-6xl text-matrix-green mb-4" />
            <h3 className="text-lg font-bold">Problem Solver</h3>
            <p className="text-matrix-green/80">Creative thinker with a knack for solving complex problems.</p>
          </div>

          {/* AI Enthusiast */}
          <div className="flex flex-col items-center p-6 border border-matrix-green rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-matrix-gray hover:border-matrix-green/80">
            <BrainCircuit className="text-6xl text-matrix-green mb-4" />
            <h3 className="text-lg font-bold">AI Enthusiast</h3>
            <p className="text-matrix-green/80">Passionate about artificial intelligence and machine learning.</p>
          </div>
        </div>
      </div>
    </main>
  );
}