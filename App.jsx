import { useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  useEffect(() => {
    document.title = "Nemesis Interface";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 space-y-8">
      <motion.h1
        className="text-5xl font-bold text-center tracking-widest"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        NEMESIS
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        "Bienvenue, Silas. La nuit est à toi."
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-2">🎧 Mode Artiste</h2>
          <ul className="space-y-1 text-gray-300">
            <li>• Générateur de loops & idées</li>
            <li>• Plugins / Samples / Presets</li>
            <li>• Checklists hebdo musique</li>
            <li>• Génération visuelle artistique</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-2">💼 Mode Projet</h2>
          <ul className="space-y-1 text-gray-300">
            <li>• Deadlines musique/business</li>
            <li>• To-do intelligente</li>
            <li>• KPI Effort Max</li>
            <li>• Synthèse & rappels auto</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-2">🧠 Coach Effort Max</h2>
          <ul className="space-y-1 text-gray-300">
            <li>• Routines (matin / deep focus / nuit)</li>
            <li>• Suivi mental & énergie</li>
            <li>• Affirmations sombres</li>
            <li>• Défis de discipline</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-2">🌌 Créateur d'Univers</h2>
          <ul className="space-y-1 text-gray-300">
            <li>• Génération d'images (cover, logo, clip)</li>
            <li>• Customisation visuelle</li>
            <li>• Création d'avatars (Vantir, Drael Vant…)</li>
            <li>• Archive de ton univers</li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-6">
        <button className="bg-white text-black font-bold px-6 py-2 rounded-2xl shadow-lg hover:bg-gray-200 transition">
          Lancer Nemesis
        </button>
      </div>
    </div>
  );
}
