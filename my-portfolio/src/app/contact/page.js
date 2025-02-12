import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

      {/* LinkedIn Section */}
      <div className="text-center mb-12">
        <p className="text-2xl mb-4">Connect with me on LinkedIn:</p>
        <a
          href="https://www.linkedin.com/in/hammad-nawaz-25b998253"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-matrix-green hover:text-matrix-green/80 transition-colors"
        >
          <FaLinkedin className="mr-2 text-4xl" />
          <span className="text-lg">My LinkedIn Profile</span>
        </a>
      </div>

      {/* Contact Form */}
      <form className="max-w-md mx-auto p-8 bg-matrix-gray border border-matrix-green rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 bg-matrix-dark text-matrix-green border border-matrix-green rounded-lg focus:outline-none focus:border-matrix-green/80"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 bg-matrix-dark text-matrix-green border border-matrix-green rounded-lg focus:outline-none focus:border-matrix-green/80"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 bg-matrix-dark text-matrix-green border border-matrix-green rounded-lg focus:outline-none focus:border-matrix-green/80"
            rows="6"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-matrix-green text-matrix-dark py-3 rounded-lg hover:bg-matrix-green/80 transition-colors"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}