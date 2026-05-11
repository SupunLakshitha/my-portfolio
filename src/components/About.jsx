import about from "../assets/about.png";
import { ArrowRight } from "lucide-react";

const About = ({ darkMode }) => {
  const stats = [
    { value: "3+", label: "Years Studying" },
    { value: "10+", label: "Projects Built" },
    { value: "7+", label: "Tech Stacks" },
  ];

  const skills = [
    "Java",
    "Python",
    "React.js",
    "JavaScript",
    "SQL",
    "Firebase",
    "Power BI",
    "Android",
  ];

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-6 py-24
        ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* IMAGE */}
        <figure
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative">

            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/10 blur-2xl" />

            {/* Image frame */}
            <div
              className={`relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px]
              rounded-full overflow-hidden border-4
              ${darkMode ? "border-orange-500/40" : "border-orange-300"}
              ring-4 ${darkMode ? "ring-orange-500/90" : "ring-red-400/40"}`}
            >
              <img
                src={about}
                alt="Supun Lakshitha"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Badge */}
            <div
              className={`absolute bottom-6 right-0 lg:-right-6
              flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-lg border
              ${darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-100 text-gray-700"}`}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold whitespace-nowrap">
                Open to opportunities
              </span>
            </div>

          </div>
        </figure>

        {/* TEXT */}
        <article
          data-aos="fade-left"
          data-aos-delay="200"
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">
            Computer Science Undergraduate
          </p>

          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 leading-tight
              ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            About{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">
              Me
            </span>
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-400 rounded-full mb-6 mx-auto lg:mx-0" />

          <p
            className={`text-sm sm:text-base leading-relaxed mb-6
            ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Motivated CS undergraduate with hands-on experience in software engineering,
            QA testing, web & mobile app development, data analytics, and IT support.
            I build with Java, Python, JavaScript, React.js, Firebase, and Power BI —
            and I'm passionate about clean code and real-world problem solving.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border
                  ${darkMode
                    ? "bg-orange-500/10 border-orange-500/25 text-orange-300"
                    : "bg-orange-50 border-orange-200 text-orange-700"}`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 divide-x rounded-2xl overflow-hidden border mb-8
            ${darkMode
              ? "border-gray-700 divide-gray-700"
              : "border-gray-200 divide-gray-200"}`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`py-4 text-center ${
                  darkMode ? "bg-gray-800/50" : "bg-white"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-0.5">
                  {stat.value}
                </div>
                <div
                  className={`text-xs font-medium ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <a href="#projects">
            <button
              className={`inline-flex items-center gap-2 py-3 px-7 rounded-xl
              text-sm font-semibold border-2 border-orange-500
              hover:shadow-lg hover:shadow-orange-500/20 hover:scale-[1.02]
              transition-all duration-200 group
              ${
                darkMode
                  ? "text-white bg-orange-500/10 hover:bg-orange-500/20"
                  : "text-gray-800 bg-white hover:bg-orange-50"
              }`}
            >
              View My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </article>

      </div>
    </section>
  );
};

export default About;