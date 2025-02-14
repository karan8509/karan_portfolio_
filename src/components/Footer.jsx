import axios from "axios";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [subscribe, setSubscribe] = useState("");
  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/userSubscribe", { subscribe });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Karan Kashyap</h3>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
                value={subscribe}
                onChange={(e) => setSubscribe(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg hover:opacity-90 transition duration-300"
                onClick={handleSubmit}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center text-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Karan Kashyap. All rights
            reserved.
          </p>

          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.linkedin.com/in/karan-kashyap-a1b4a1329"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/karan8509"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaGithub />
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
