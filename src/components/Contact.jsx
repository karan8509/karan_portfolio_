import axios from "axios";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleSubmit = async () => {
    try {
      if (!name || !email || !textarea) {
        alert("YOUR DATA NOT VALIDE");
        return;
      }
      const response = await axios.post(
        "https://server-portfolio-m8te.vercel.app/userSend",
        {
          name,
          email,
          textarea,
        }
      );
      console.log(await response);
      if (response.status === 200) {
        toast.success("Your Data Sent Successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to send data");
    }
  };
  return (
    <div className="bg-[#1a1a2e] text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-purple-400 to-pink-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>

            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-purple-400 mr-2" />
              <a href="mailto:kj382542@gmail.com" className="hover:underline">
                kj382542@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <FaPhone className="inline-block text-purple-400 mr-2" />
              <a href="tel:+918595998512" className="hover:underline">
                +91 8595998512
              </a>
            </div>

            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-purple-400 mr-2" />
              <a
                href="https://www.google.com/maps/place/Delhi,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                India, Delhi
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-purple-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded bg-[#222831] border border-[#393E46] focus:outline-none
                    focus:border-purple-400 text-white"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-purple-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded bg-[#222831] border border-[#393E46] focus:outline-none
                    focus:border-purple-400 text-white"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-purple-300">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 rounded bg-[#222831] border border-[#393E46] focus:outline-none
                    focus:border-purple-400 text-white"
                  rows="5"
                  placeholder="Enter Your Message"
                  value={textarea}
                  onChange={(e) => setTextarea(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                onClick={handleSubmit}
              >
                Send
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
