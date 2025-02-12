import React from "react";
import karan2 from "../assets/karan2.png";

const Hero = () => {
  return (
    <div className="bg-gray-900 text-gray-200 text-center py-14">
      <img
        src={karan2}
        alt=""
        className="mx-auto mb-8 w-64 h-64 rounded-full object-cover transform 
  transition-transform duration-300 hover:scale-105 border-4 border-yellow-400"
      />

      <h1 className="text-4xl font-bold">
        I'M{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500">
          KARAN KASHYAP
        </span>
        , FULL-STACK DEVELOPER
      </h1>
      <p className="mt-4 text-lg text-gray-400">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="https://wa.me/918595998512"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-400 to-purple-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hover:underline"
        >
          Contact With Chat
        </a>

        <button
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a
            href="file:///C:/Users/kj382/Downloads/Simple%20Professional%20CV%20Resume%20(1).pdf"
            className="hover:underline"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
