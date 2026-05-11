import { useState } from "react";
import contactImg from "../assets/contact.png";

const Contact = ({ darkMode }) => {
  const [status, setStatus] = useState(""); // success / error message
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqengrgn", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);

    setTimeout(() => {
      setStatus("");
    }, 4000);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{
              color: darkMode ? "white" : "#142937",
            }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #ffffff, #f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
          >
            {/* Status Message */}
            {status && (
              <div
                className={`mb-4 font-medium text-center ${
                  status === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status === "success"
                  ? "Message sent successfully!"
                  : "Message failed. Please try again."}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border mb-3 sm:mb-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border mb-3 sm:mb-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              required
            />

            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border mb-4 sm:mb-6 resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              required
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
              }}
              className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;