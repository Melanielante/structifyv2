import React from "react";

export default function HeroSection({ onNavigate }) {
  return (
    <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-28 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Discover Architectural Brilliance
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-blue-100 mb-8">
          Explore stunning house plans and connect with Kenya’s most creative
          architects — all in one platform designed for inspiration and
          connection.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onNavigate && onNavigate("explore")}
            className="px-6 py-3 rounded-xl bg-white text-blue-900 font-semibold shadow-lg hover:bg-blue-100 transition-all duration-300"
          >
            Explore Designs
          </button>

          <button
            onClick={() => onNavigate && onNavigate("architects")}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 transition-all duration-300"
          >
            Join as an Architect
          </button>
        </div>
      </div>

      {/* Decorative Blur Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
}
