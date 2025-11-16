import React from "react";
import "./Home.css";
import {
  Stars,
  ArrowUpRight,
  Medal,
  SquareTerminal,
  Coffee,
  Heart,
} from "lucide-react";
import moiImage from "../assets/moi.png"

export default function Home() {
  return (
    <>
      {/* ============================================================= */}
      {/* acceuil */}
      <section
  id="accueil"
  className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-20"
>
  {/* === Texte (gauche desktop / haut mobile) === */}
  <div className="md:w-1/2 space-y-6">
    {/* Badge */}
    <div className="flex justify-start items-center space-x-2 border w-60 text-sm rounded-2xl border-indigo-200 bg-indigo-300 cursor-pointer">
      <Stars className="w-4 text-cyan-800" />
      <p className="text-cyan-900 font-bold">DEVELOPPEUR FULLSTACK</p>
    </div>

    {/* Titre */}
    <h1 className="text-3xl md:text-5xl font-bold">
      Bonjour, je suis{" "}
      <span className="text-4xl md:text-6xl block bg-linear-120 from-blue-600 via-blue-400 to-cyan-600 bg-clip-text text-transparent mb-4">
        Komlavi Merveille AMEVIGBE
      </span>
    </h1>

    {/* Description */}
    <p className="text-sm md:text-base text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
      suscipit sed eos nihil magnam doloribus tenetur cumque obcaecati rem.
    </p>

    {/* Boutons */}
    <div className="flex flex-wrap gap-4 mt-4">
      <button className="btn btn1 btn-accent flex items-center gap-2">
        Voir mes projets <ArrowUpRight className="w-4" />
      </button>
      <button className="btn btn2">Me contacter</button>
    </div>

    {/* Stats – cachées sur mobile */}
    <div className="hidden md:flex justify-start mt-6 gap-10">
      <div className="flex flex-col text-center">
        <p className="text-xl font-bold">50+</p>
        <p className="text-xs text-gray-400">Projets réalisés</p>
      </div>
      <div className="flex flex-col text-center">
        <p className="text-xl font-bold">5+</p>
        <p className="text-xs text-gray-400">Années d'expérience</p>
      </div>
      <div className="flex flex-col text-center">
        <p className="text-xl font-bold">∞</p>
        <p className="text-xs text-gray-400">Café bus</p>
      </div>
      <div className="flex flex-col text-center">
        <p className="text-xl font-bold">100%</p>
        <p className="text-xs text-gray-400">Passion</p>
      </div>
    </div>
  </div>

  {/* === Image (droite desktop / bas mobile) === */}
  <div className="md:w-1/2 relative flex justify-center md:justify-end mt-10 md:mt-0">
    <img
      src={moiImage}
      alt="Moi"
      className="w-60 h-auto md:w-96 rounded-3xl shadow-lg"
    />
  </div>
</section>


{/* ============================================================= */}
      {/* projet */}
<section id="projets" className="min-h-screen px-6 py-10">
  <h2 className="text-3xl font-bold text-center">
    Projets{" "}
    <span className="bg-linear-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
      Récents
    </span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
    {/* ==== CARD 1 ==== */}
    <div className="rounded-2xl overflow-hidden bg-linear-to-br from-purple-900/80 via-purple-700/40 to-indigo-900/80 shadow-xl hover:scale-[1.02] duration-300 border border-white/10">
      
      {/* Image */}
      <div className="relative h-40 bg-linear-to-r from-purple-700 to-purple-500 flex items-center justify-center">
        <span className="text-white/70">Image du projet</span>

        {/* Badges top-right */}
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            15k+
          </span>
          <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            4.9★
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="p-5 text-white">
        <h3 className="text-xl font-bold flex items-center gap-2">
          Euuuuuuuuuuuuuuuuuuuuuh
          <a href="#" className="text-purple-300 hover:text-white">↗</a>
        </h3>

        <p className="text-sm mt-2 text-white/70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, placeat. Delectus quae enim accusamus esse aperiam reiciendis ducimus quos quaerat! Voluptatum, distinctio vel ut ipsa velit iure exercitationem esse deserunt!
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">React</span>
          <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">Node.js</span>
          <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">MongoDB</span>
          <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">Stripe</span>
        </div>
      </div>
    </div>

    {/* ==== CARD 2 ==== */}
    <div className="rounded-2xl overflow-hidden bg-linear-to-br from-indigo-800/80 via-blue-800/40 to-purple-900/80 shadow-xl hover:scale-[1.02] duration-300 border border-white/10">
      
      {/* Image */}
      <div className="relative h-40 bg-linear-to-r from-blue-700 to-indigo-500 flex items-center justify-center">
        <span className="text-white/70">Image du projet</span>

        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            50+
          </span>
          <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            2.1s
          </span>
        </div>
      </div>

      {/* Desc */}
      <div className="p-5 text-white">
        <h3 className="text-xl font-bold flex items-center gap-2">
          Générateur de citations
          <a href="#" className="text-blue-300 hover:text-white">↗</a>
        </h3>

        <p className="text-sm mt-2 text-white/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id. Suscipit velit, alias nulla illo libero voluptatum voluptas culpa sunt repellendus recusandae voluptatem officiis possimus sequi omnis maiores dolorem accusamus.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full border border-white/10">React</span>
          <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full border border-white/10">D3.js</span>
          <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full border border-white/10">Python</span>
          <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full border border-white/10">TensorFlow</span>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ============================================================= */}
      {/* compétences */}
      <section
        id="competences"
        className="h-screen"
      >
        <h2 className="text-3xl font-bold text-center"><span className="bg-linear-120 from-blue-600 via-blue-400 to-cyan-600 bg-clip-text text-transparent">Compétences</span> & Expertise</h2>
        <p className="text-center text-[10px] mt-2"> Technologies et outils que je maitrise</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="h-60 border"></div>
          <div className="h-60 border"></div>
        </div>
      </section>
{/* contac */}
      <section
        id="contact"
        className="h-80 w-screen"
      >
        <h2 className="text-3xl font-bold text-center">Créons quelque chose <span className="bg-linear-120 from-blue-600 via-blue-400 to-cyan-600 bg-clip-text text-transparent">d'incroyable ensemble</span></h2>
        <p className="text-center text-[10px] mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, fuga voluptate</p>
        <div className="flex justify-center mt-4 gap-5">
          <div className="border w-20 h-20 rounded-3xl"></div>
          <div className="border w-20 h-20 rounded-3xl"></div>
          <div className="border w-20 h-20 rounded-3xl"></div>
        </div>

        {/* EMAIL BUTTON */}
      <div className="flex justify-center mb-16">
        <a
          href="mailto:merveilleamevigbe2@gmail.com"
          className="mt-6 px-6 py-4 rounded-xl text-white font-bold text-lg 
                     bg-linear-to-r from-blue-600 via-blue-400 to-cyan-500
                     shadow-lg shadow-blue-800/40"
        >
          merveilleamevigbe2@gmail.com
        </a>
      </div>
      <div className="w-screen text-white pt-16 pb-10">
  <div className="w-screen text-center text-2xl font-bold mb-5">AD</div>
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
  <div className="text-center text-[13px] text-gray-300">
    © 2026 AMEVIGBE · Conçu et développé avec passion ❤️
  </div>
</div> 
      </section>
      <section>
        
      </section>
    </>
  );
}
