import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./composants/navBar";
import Home from "./composants/Home";
import Loader from "./composants/Loader"; // Assure-toi que ton fichier Loader.jsx est à la racine ou ajuste le chemin

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Durée d'affichage du loader
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // 2 secondes avant fade-out

    // Suppression du loader après la transition (fade)
    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2s (transition fade)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* Loader visible au départ */}
      {loading && <Loader fadeOut={fadeOut} />}

      {/* Contenu de la page avec fade-in */}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
