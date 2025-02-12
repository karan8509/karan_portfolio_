import React from "react";
import karan from "../assets/karan.png";

const About = () => {
  return (
    <div className="bg-gray-900 text-gray-200 py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          <img
            src={karan}
            alt="Karan's Profile"
            className="w-72 h-full md:h-auto rounded object-contain mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              Hello! My name is Karan, and I am a passionate Full-Stack Web
              Developer with expertise in React.js and Node.js. I have hands-on
              experience in authentication, API handling, and debugging, and I
              enjoy building dynamic and user-friendly web applications.
            </p>

            <div className="space-y-4">
              {[
                { skill: "HTML & CSS", width: "w-10/12" },
                { skill: "JavaScript", width: "w-11/12" },
                { skill: "React JS", width: "w-10/12" },
                { skill: "MongoDB", width: "w-9/12" },
                { skill: "Express JS", width: "w-8/12" },
                { skill: "Node JS", width: "w-9/12" },
              ].map(({ skill, width }, index) => (
                <div className="flex items-center" key={index}>
                  <label className="w-2/12">{skill}</label>
                  <div className="grow bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-red-400 to-purple-500 h-2.5 rounded-full ${width}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience and Projects Section */}
            <div className="mt-12 flex justify-center gap-12 text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500">
                  Fresher
                </h3>
                <p>No Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500">
                  10+
                </h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
