// components/ServicesSection.jsx
import { Code, Monitor, LayoutTemplate, Rocket } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: <Monitor className="w-8 h-8 text-[#58A6FF]" />,
    description: "I specialize in building sleek, high-performance frontends using React.js and Tailwind CSS. My focus is on clean code, modular components, and pixel-perfect layouts that adapt seamlessly across all devices. Whether you're launching a product or showcasing a brand, I deliver interfaces that look sharp and feel intuitive.",
  },
  {
    title: "Single-Page Apps",
    icon: <Rocket className="w-8 h-8 text-[#58A6FF]" />,
    description: "I create fast, dynamic SPAs that eliminate page reloads and improve user flow. Using React Router, component state management, and lazy loading, I ensure your app performs efficiently while delivering a smooth, app-like user experience on the web.",
  },
  {
    title: "UI/UX to Code",
    icon: <LayoutTemplate className="w-8 h-8 text-[#58A6FF]" />,
    description: "Have a design in Figma or Adobe XD? I transform design files into fully functional, responsive interfaces with pixel accuracy. I prioritize accessibility, usability, and modern styling, ensuring your designs work flawlessly on both desktop and mobile platforms.",
  },
  {
    title: "Landing Pages",
    icon: <Code className="w-8 h-8 text-[#58A6FF]" />,
    description: "Need a landing page that converts visitors into customers? I craft custom landing pages that are not only visually striking but also strategically structured for high conversion rates — using clear call-to-actions, performance optimization, and responsive design principles.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-5 lg:px-2 lg:max-w-[1024px] m-auto bg-[#0D1117] text-[#C9D1D9]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#58A6FF]">SERVICES</h2>
        <p className="text-gray-300 mb-12">What I can do for you</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#161B22] flex flex-col justify-center items-center rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#21262D]"
            >
              <div className="mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#8B949E] text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
