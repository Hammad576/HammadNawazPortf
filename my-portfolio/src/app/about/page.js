export default function About() {
    return (
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="mt-8 space-y-4 text-2xl">
          <p>
            Hi, I'm <span className="font-bold">Hammad Nawaz</span>, a Full Stack Developer specializing in the MERN stack and Next.js. I have hands-on experience in MySQL, MongoDB, and deploying applications on VPS.
          </p>
          <p>
            Currently, I'm studying at COMSATS University Islamabad, focusing on deep learning and AI. I'm passionate about building scalable web applications and exploring the frontiers of artificial intelligence.
          </p>
          <p>
            My expertise includes:
          </p>
          <ul className="list-disc list-inside">
            <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
            <li>Next.js for server-side rendering</li>
            <li>Database management (MySQL, MongoDB)</li>
            <li>VPS deployment and server management</li>
            <li>AI and deep learning (currently learning)</li>
          </ul>
        </div>
      </main>
    );
  }