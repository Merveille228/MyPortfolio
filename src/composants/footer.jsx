import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e0b2b] text-white pt-16 pb-10">
      
      

      {/* LOGO */}
      <div className="text-center text-2xl font-bold mb-5">AD</div>

      {/* SOCIAL LINKS */}
      <div className="flex justify-center gap-10 text-sm mb-8">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Instagram
        </a>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-[13px] text-gray-300">
        © 2024 Alexandre Dubois · Conçu et développé avec passion ❤️
      </div>

    </footer>
  );
}
