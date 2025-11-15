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

export default function Home() {
  return (
    <>
      {/* ============================================================= */}
      {/* acceuil */}
      <section id="accueil" className="h-screen mt-38 ml-5">
        
        <div className="cercle" >
          <img
            className="absolute w-50 h-100 top-20 right-0 rounded-3xl -z-50"
            src="src\assets\moi.png"
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
      <section
        id="projets"
        className="h-screen ml-5"
      >
        <h2 className="text-3xl font-bold text-center">Projets <span className="bg-linear-120 from-blue-600 via-blue-400 to-cyan-600 bg-clip-text text-transparent">Récents</span></h2>
        <div className="grid grid-cols-2 gap-5 mt-4">
          {/* il ya yn grand div qui porte les divs et chaque div portent deux divs */}
          <div className="h-60 border">
            <div className="border-amber-400 border h-1/2">
              image des projets
            </div>
            <div className="border-red-400 border h-1/2">
              Description
            </div>
          </div>
          
          <div className="h-60 border">
            <div className="border-amber-400 border h-1/2">
              image des projets
            </div>
            <div className="border-red-400 border h-1/2">
              Description
            </div>
          </div>
          
          <div className="h-60 border">
            <div className="border-amber-400 border h-1/2">
              image des projets
            </div>
            <div className="border-red-400 border h-1/2">
              Description
            </div>
          </div>
          
          <div className="h-60 border">
            <div className="border-amber-400 border h-1/2">
              image des projets
            </div>
            <div className="border-red-400 border h-1/2">
              Description
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

        <div className="flex justify-center">
          <button className="btn mt-3 bg-linear-120 from-blue-600 via-blue-700 to-cyan-600 p-6 rounded-2xl">merveilleamevigbe@gmail.com</button>
        </div>
      </section>
    </>
  );
}
