import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon

export default function Contact() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Contact Me</h1>
       {/* LinkedIn Section */}
       <div className="mt-8 text-center">
        <p className="text-4xl mb-2">Connect with me on LinkedIn:</p>
        <a
          href="https://www.linkedin.com/in/hammad-nawaz-25b998253"  // Replace with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-matrix-green hover:text-matrix-green/80 transition-colors"
        >
          <FaLinkedin className="mr-2 text-2xl" /> {/* LinkedIn Icon */}
          <span className="text-lg">My LinkedIn Profile</span>
        </a>
      </div>
      
      {/* Contact Form */}
      <form className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 bg-matrix-gray border border-matrix-green rounded-lg"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 bg-matrix-gray border border-matrix-green rounded-lg"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 bg-matrix-gray border border-matrix-green rounded-lg"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-matrix-green text-matrix-dark px-6 py-2 rounded-lg hover:bg-matrix-green/80"
        >
          Send Message
        </button>
      </form>

     
    </main>
  );
}