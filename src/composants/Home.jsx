import React from "react";
import "./Home.css";
import {
  Stars,
  ArrowUpRight,
  Mail,
  PhoneCall,
  Linkedin,
  Github,
} from "lucide-react";
const scrollToSection = () => {
  const projets = document.getElementById(projets);
  if (projets) {
    projets.scrollIntoView({ behavior: "smooth" });
  }
};
import moiImage from "../assets/moi.png";

export default function Home() {
  const contactCards = [
    {
      label: "Email",
      detail: "Réponse sous 24h",
      value: "merveilleamevigbe2@gmail.com",
      href: "mailto:merveilleamevigbe2@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      detail: "Profil & réseau",
      value: "pas encore definie",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      label: "Téléphone",
      detail: "Disponible en journée",
      value: "+228 91 24 29 86",
      href: "tel:+22891242986",
      icon: PhoneCall,
    },
  ];
  return (
    <>
      {/* ============================================================= */}
      {/* acceuil */}
      <section
        id="accueil"
        className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-30"
      >
        {/* === Texte (gauche desktop / haut mobile) === */}
        <div className="md:w-1/2 space-y-6">
          {/* Badge */}
          <div className="flex pl-4 justify-start items-center space-x-2 border w-60 text-sm rounded-2xl border-indigo-200 bg-indigo-300 cursor-pointer">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            voluptates suscipit sed eos nihil magnam doloribus tenetur cumque
            obcaecati rem.
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              className="btn btn1 btn-accent flex items-center gap-2"
              onClick={() => scrollToSection()}
            >
              Voir mes projets <ArrowUpRight className="w-4" />
            </button>
            <button className="btn btn2">Me contacter</button>
          </div>

          {/* Stats – */}
          <div className="flex md:flex justify-start mt-6 gap-10">
            <div className="flex flex-col text-center">
              <p className="text-xl font-bold">50+</p>
              <p className="text-[10px] text-gray-400">Projets réalisés</p>
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
        <div className="md:w-1/2 relative flex justify-center md:justify-end -mt-35 md:mt-0">
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
                <a href="#" className="text-purple-300 hover:text-white">
                  ↗
                </a>
              </h3>

              <p className="text-sm mt-2 text-white/70">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, placeat. Delectus quae enim accusamus esse aperiam
                reiciendis ducimus quos quaerat! Voluptatum, distinctio vel ut
                ipsa velit iure exercitationem esse deserunt!
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  Stripe
                </span>
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
                <a href="#" className="text-blue-300 hover:text-white">
                  ↗
                </a>
              </h3>

              <p className="text-sm mt-2 text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, id. Suscipit velit, alias nulla illo libero voluptatum
                voluptas culpa sunt repellendus recusandae voluptatem officiis
                possimus sequi omnis maiores dolorem accusamus.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full border border-white/10">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full border border-white/10">
                  D3.js
                </span>
                <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full border border-white/10">
                  Python
                </span>
                <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full border border-white/10">
                  TensorFlow
                </span>
              </div>
            </div>
          </div>

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
                <a href="#" className="text-purple-300 hover:text-white">
                  ↗
                </a>
              </h3>

              <p className="text-sm mt-2 text-white/70">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, placeat. Delectus quae enim accusamus esse aperiam
                reiciendis ducimus quos quaerat! Voluptatum, distinctio vel ut
                ipsa velit iure exercitationem esse deserunt!
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  Stripe
                </span>
              </div>
            </div>
          </div>

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
                <a href="#" className="text-purple-300 hover:text-white">
                  ↗
                </a>
              </h3>

              <p className="text-sm mt-2 text-white/70">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, placeat. Delectus quae enim accusamus esse aperiam
                reiciendis ducimus quos quaerat! Voluptatum, distinctio vel ut
                ipsa velit iure exercitationem esse deserunt!
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full border border-white/10">
                  Stripe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* compétences */}
      <section
        id="competences"
        className="min-h-screen px-6 md:px-20 py-16 bg-linear-to-b from-slate-900/30 via-slate-900/10 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-linear-120 from-blue-600 via-blue-400 to-cyan-600 bg-clip-text text-transparent">
                Compétences
              </span>{" "}
              & Expertise
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              Un mélange équilibré entre approche produit, maîtrise technique et
              sens du détail pour livrer des expériences modernes et
              performantes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
            {/* Aperçu général */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-[0_20px_45px_-25px_rgba(15,23,42,1)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Vision globale
              </p>
              <h3 className="text-2xl font-semibold mt-2">
                Stack moderne orientée produit
              </h3>
              <p className="text-sm text-gray-300 mt-4">
                Architecture front-to-back, automatisation, et suivi qualité
                pour transformer les idées en produits élégants et fiables.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Front-end",
                    detail: "React · Next · Tailwind · Animations",
                  },
                  { title: "Back-end", detail: "Node · Nest · Prisma · REST" },
                  { title: "Craft", detail: "Design systems · Tests · CI/CD" },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-white/5"
                  >
                    <p className="text-xs text-gray-400">{`0${index + 1}`}</p>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Barres de progression */}
            <div className="lg:col-span-2 space-y-8">
              {[
                {
                  category: "Compétences principales",
                  skills: [
                    { label: "React & Écosystème", level: "90%" },
                    { label: "Node / API REST", level: "85%" },
                    { label: "UI Design System", level: "80%" },
                    { label: "Tests & Qualité", level: "75%" },
                  ],
                },
                {
                  category: "Compétences transverses",
                  skills: [
                    { label: "Gestion de projet agile", level: "70%" },
                    { label: "Coaching & mentoring", level: "65%" },
                    { label: "Veille technologique", level: "80%" },
                  ],
                },
              ].map((group) => (
                <div
                  key={group.category}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-[0_25px_50px_-30px_rgba(15,23,42,1)] backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">
                    {group.category}
                  </p>
                  <div className="mt-6 space-y-5">
                    {group.skills.map((skill) => (
                      <div key={skill.label}>
                        <div className="flex items-center justify-between text-sm text-gray-200 mb-2">
                          <span className="font-medium">{skill.label}</span>
                          <span className="text-gray-400">{skill.level}</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-linear-to-r from-blue-600 via-blue-400 to-cyan-400 duration-700"
                            style={{ width: skill.level }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* contac */}
      <section
        id="contact"
        className="px-6 md:px-20 py-20 bg-slate-950/20 space-y-10"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">
            Contact
          </p>
          <h2 className="text-3xl font-bold mt-2">
            Créons quelque chose{" "}
            <span className="bg-linear-120 from-blue-600 via-blue-400 to-cyan-600 bg-clip-text text-transparent">
              d'incroyable ensemble
            </span>
          </h2>
          <p className="text-sm text-gray-300 mt-3 max-w-2xl mx-auto">
            Choisissez le canal qui vous convient pour discuter d’un projet,
            d’une mission ou simplement échanger sur vos idées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group border border-white/10 rounded-3xl p-6 bg-white/5 backdrop-blur flex flex-col gap-4 hover:border-cyan-400/60 hover:bg-white/10 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-linear-to-r from-blue-600/70 to-cyan-500/70 flex items-center justify-center text-white shadow-lg shadow-blue-800/40 group-hover:scale-105 transition">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {card.label}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {card.value}
                  </p>
                  <p className="text-sm text-gray-400">{card.detail}</p>
                </div>
                <span className="text-sm text-cyan-300 font-semibold">
                  {card.label === "Email" ? "Écrire un message ↗" : "Ouvrir ↗"}
                </span>
              </a>
            );
          })}
        </div>

        {/* EMAIL BUTTON */}
        <div className="flex justify-center">
          <a
            href="mailto:merveilleamevigbe2@gmail.com"
            className="mt-2 px-6 py-4 rounded-xl text-white font-bold text-lg 
                     bg-linear-to-r from-blue-600 via-blue-400 to-cyan-500
                     shadow-lg shadow-blue-800/40"
          >
            merveilleamevigbe2@gmail.com
          </a>
        </div>
      </section>

      {/* footer */}
      <section className="border-t border-white/10 bg-slate-950/30">
        <div className="px-6 md:px-20 py-12 flex flex-col gap-6 md:gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-bold">AKIM</p>
            <p className="text-sm text-gray-400">
              Designer & Développeur Fullstack
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              {
                label: "GitHub",
                href: "https://www.github.com/Merveille228",
                icon: Github,
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com",
                icon: Linkedin,
              },
              { label: "Portfolio", href: "#accueil", icon: Stars },
            ].map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-cyan-400/60 transition"
                >
                  <IconComponent className="w-4 h-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="text-[13px] text-gray-400">
            © 2026 AMEVIGBE · Conçu et développé avec passion
          </div>
        </div>
      </section>
    </>
  );
}
