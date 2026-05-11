import React from "react";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";
import CV from "../assets/Supun_Lakshitha_CV_CSIntern.pdf";
import hero from "../assets/hero.png";
import hi from "../assets/hi.png";



import { Mail, Download } from "lucide-react";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: instagram, alt: "Instagram" },
    { icon: tiktok, alt: "TikTok" },
    { icon: github, alt: "GitHub" },
    { icon: youtube, alt: "YouTube" },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-orange-500 hover:bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-20",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
    decorativeCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-2 lg:py-10 flex-col lg:flex-row items-center justify-between mt-12 lg:mt-14 mt-24">
          
          {/* LEFT SIDE */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
            
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos-delay={400 + index * 100}
                  className="transform hover:scale-110 transition duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? "" : "filter brightness-75"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Title */}
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Supun
            </h1>

            {/* Description */}
            <p
              className={`mb-6 sm:mb-8 max-w-md sm:max-w-lg leading-relaxed ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Dedicated Computer Science undergraduate skilled in software engineering, QA testing, IT support, networking, data analytics, and troubleshooting. Experienced in Java, Python, React.js, SQL, Firebase, and Power BI with strong problem-solving and technical support abilities.

            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {/* Download CV */}
              <a href={CV} download>
                <button className="w-full sm:w-auto inline-flex items-center justify-center text-white 
                  bg-gradient-to-r from-orange-500 to-amber-500 py-3 px-6 sm:px-8 
                  hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg 
                  font-semibold transition-all duration-300 transform">
                  
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download CV
                </button>
              </a>

              {/* Contact */}
              <a href="#contact">
                <button
                  className={`w-full sm:w-auto inline-flex items-center justify-center 
                  ${theme.buttonSecondary} py-3 px-6 sm:px-8 
                  hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg 
                  font-semibold transition-all duration-300 transform`}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full mx-auto">
              <div className="relative overflow-hidden">
                <img
                  src={hero}
                  alt="Hero"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />


                <div className="absolute" style={{ top: '6%', left: '10%' }}>
                  <img
                    src={hi}
                    alt="Hi"
                    className="w-14 h-14 sm:w-20 sm:h-20 animate-bounce opacity-90 z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} 
          rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hidden sm:block`}

        ></div>
        <div
        className={`absolute -top-20 -left-20 w-20 h-20
        sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full
        mix-blend-multiply filter blur-3xl opacity-10
        animate-pulse delay-1000 hidden sm:block`}>

        </div>
      </section>
    </div>
  );
};

export default Hero;