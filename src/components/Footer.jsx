import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaHeart } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-orange-500 dark:text-white">
              Portfolio
            </h3>
            <p
              className="text-sm"
              style={{
                color: darkMode ? "#9ca3af" : "#667280",
              }}
            >
              Full Stack Developer & UI/UX Designer
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/SupunLakshitha"
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                bg-[#374151] dark:bg-[#f3f4f6]
                text-[#f3f4f6] dark:text-[#374151]
                hover:scale-110 transition-all
                hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500
                hover:text-white
              "
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/supun-lakshitha/"
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                bg-[#374151] dark:bg-[#f3f4f6]
                text-[#f3f4f6] dark:text-[#374151]
                hover:scale-110 transition-all
                hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500
                hover:text-white
              "
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                bg-[#374151] dark:bg-[#f3f4f6]
                text-[#f3f4f6] dark:text-[#374151]
                hover:scale-110 transition-all
                hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500
                hover:text-white
              "
            >
              <FaTwitter />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-end gap-1 text-[#667280] dark:text-[#9ca3af]">
              © {currentYear} Made with

              by{" "}
              <span className="mt-1 text-[#f97316]">
                Supun Laksthitha 
              </span>
              <span className="mt-1 text-[#667280]">(get instructions by QualiCode)</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;