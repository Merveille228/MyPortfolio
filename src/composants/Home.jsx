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
      <section id="accueil" className="h-screen mt-38 ml-5">
        
        <div className="cercle" >
          <img
            className="absolute w-50 h-100 top-20 right-0 rounded-3xl -z-50"
            src={moiImage}
            alt="photo"
          />
        </div>
        <div className="mt-10 flex justify-center items-center space-x-2 border w-40 text-[10px] rounded-2xl border-indigo-200 bg-indigo-300 cursor-pointer">
          <Stars className="w-3 text-cyan-800" />
          <p className="text-cyan-900 font-bold"> DEVELOPPEUR FULLSTACK</p>
        </div>

        <p className="mt-4 text-2xl font-bold">
          Bonjour, je suis{" "}
          <span className="text-3xl block bg-linear-120 from-blue-600 via-blue-400 to-cyan-600 bg-clip-text text-transparent mb-4">
            Komlavi Merveille AMEVIGBE
          </span>
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          suscipit sed eos nihil magnam doloribus tenetur cumque obcaecati rem,
          quo eius nulla ipsa dignissimos adipisci asperiores provident dolorum
          illum?
        </p>
        <div>
          <button className="btn btn1 btn-accent mr-4">
            Voir mes projets{" "}
            <span>
              <ArrowUpRight className="w-4" />
            </span>
          </button>
          <button className="btn btn2">Me contacter</button>
        </div>
        <div className="flex justify-between mt-5 ml-3">
          <SquareTerminal className="w-5" />
          <Medal className="w-5" />
          <Coffee className="w-5" />
          <Heart className="w-5" />
        </div>
        <div className="flex justify-around w-screen mt-3">
          <div className="flex flex-col text-center">
            <p>50+</p>
            <p className="text-[10px]">Projets realisés</p>
          </div>
          <div className="flex flex-col text-center">
            <p>5+</p>
            <p className="text-[10px]">Année d'expériences</p>
          </div>
          <div className="flex flex-col text-center">
            <p>∞</p>
            <p className="text-[10px]">Café bus</p>
          </div>
          <div className="flex flex-col text-center">
            <p>100%</p>
            <p className="text-[10px]">Passion</p>
          </div>
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
        className="h-screen ml-5"
      >
        <h2 className="text-3xl font-bold text-center"><span className="bg-linear-120 from-blue-600 via-blue-400 to-cyan-600 bg-clip-text text-transparent">Compétences</span> & Expertise</h2>
        <p className="text-center text-[10px] mt-2"> Technologies et outils que je maitrise</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="h-60 border"></div>
          <div className="h-60 border"></div>
        </div>
      </section>

      <section
        id="contact"
        className="h-80 ml-5"
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
      </section>
    </>
  );
}
