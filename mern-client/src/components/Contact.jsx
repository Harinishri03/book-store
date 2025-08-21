import React from "react";
import { FaPhone, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import NavBar from "../components/NavBar"; // ✅ import your NavBar

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      {/* ✅ Navbar at the top */}
      <NavBar />

      {/* Main Contact Section */}
      <div className="flex items-center justify-center p-6 pt-32">
        <div className="flex flex-col md:flex-row shadow-xl rounded-xl overflow-hidden w-full max-w-4xl bg-white">
          
          {/* Left Side - Contact Info */}
          <div className="bg-blue-900 text-white p-8 md:w-1/3">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaEnvelope /> ramesharini@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhone /> +91 9080380788
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl">
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/harinishri-sangeetha/" className="hover:text-gray-300"><FaLinkedin /></a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-8 md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-500 mb-6">Feel free to drop us a line below!</p>

            <form 
              className="space-y-4" 
              action="https://formspree.io/f/xnnzeazq"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Type your message here..."
                rows="4"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-md hover:from-blue-500 hover:to-blue-700 transition"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
