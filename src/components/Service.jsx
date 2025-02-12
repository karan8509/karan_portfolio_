import React from "react";

const services = [
  {
    id: 1,
    title: "🚀 Full-Stack Web Development",
    description:
      "I build modern, responsive, and high-performance web applications using React.js and Node.js. From front-end UI to back-end APIs, I handle everything efficiently.",
  },
  {
    id: 2,
    title: "🎨 Frontend Development",
    description:
      "I create user-friendly and visually appealing interfaces with React.js, HTML, CSS, and JavaScript to ensure a seamless experience.",
  },
  {
    id: 3,
    title: "🛠 Backend Development",
    description:
      "I develop secure and scalable RESTful APIs using Node.js, Express.js, and MongoDB, ensuring smooth data handling and authentication.",
  },
  {
    id: 4,
    title: "🔐 Authentication & Security",
    description:
      "I implement JWT-based authentication, role-based access control, and data encryption to enhance security in web applications.",
  },
  {
    id: 5,
    title: "🛠 Debugging & Optimization",
    description:
      "   I troubleshoot and fix errors in web applications, optimizing performance, security, and responsiveness for a better user experience.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
