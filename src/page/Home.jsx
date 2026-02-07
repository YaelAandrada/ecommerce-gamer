import React from "react";
import { Link } from "react-router-dom";

import freefireImage from "../img/freefire.png";
import valorantImage from "../img/valorant.jpg";
import steamImage from "../img/steam.jfif";
import mobilelegendImage from "../img/mobilelegends.png";
import csgoImage from "../img/csgo.jpg";
import legendsImage from "../img/legends.avif";
import marvelImage from "../img/marvel.jpg";
import rainbowImage from "../img/rainbow.jpeg";
import robloxImage from "../img/roblox.jpg";
import starrailImage from "../img/starrail.jpg";
import pokemonImage from "../img/pokemon.webp";
import minecraftImage from "../img/minecraft.jfif";
import gratisImage from "../img/gratis.jfif";
import neonImage from "../img/neon.png";
import neon2Image from "../img/neon2.png";
import neon3Image from "../img/neon3.png";
import gtavImage from "../img/gtav.jpg";
import redImage from "../img/red.jfif";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen px-4 pb-10">

      {/* CAROUSEL */}
      <div className="max-w-5xl mx-auto mb-10 rounded-xl overflow-hidden">
        <div className="relative">
          <img src={neonImage} alt="slide" className="w-full h-[420px] object-cover" />
        </div>
      </div>

      {/* PROMOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
        <Link to="/juegos" className="bg-zinc-900 hover:bg-zinc-800 transition rounded-xl p-5 flex gap-4 items-center border border-green-500">
          <div dangerouslySetInnerHTML={{ __html: `<lord-icon src="https://cdn.lordicon.com/slkvcfos.json" trigger="hover" colors="primary:#00ff99" style="width:40px;height:40px"></lord-icon>` }} />
          <div>
            <h3 className="text-lg font-semibold">Comprá</h3>
            <p className="text-sm text-zinc-400">Comprá y acumulá Coins</p>
          </div>
        </Link>

        <div className="bg-zinc-900 rounded-xl p-5 flex gap-4 items-center opacity-70">
          <div dangerouslySetInnerHTML={{ __html: `<lord-icon src="https://cdn.lordicon.com/kthelypq.json" trigger="hover" colors="primary:#00ff99" style="width:40px;height:40px"></lord-icon>` }} />
          <div>
            <h3 className="text-lg font-semibold">
              Jugá <span className="text-xs bg-green-500 text-black px-2 py-0.5 rounded ml-1">Nuevo</span>
            </h3>
            <p className="text-sm text-zinc-400">Jugá y divertite</p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-5 flex gap-4 items-center opacity-70">
          <div dangerouslySetInnerHTML={{ __html: `<lord-icon src="https://cdn.lordicon.com/xljvqlng.json" trigger="hover" colors="primary:#00ff99" style="width:40px;height:40px"></lord-icon>` }} />
          <div>
            <h3 className="text-lg font-semibold">Canjeá</h3>
            <p className="text-sm text-zinc-400">Canjeá premios</p>
          </div>
        </div>
      </div>

      {/* RECOMENDADOS */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-xl font-bold mb-4 text-green-400">Recomendados para vos</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {[freefireImage, valorantImage, steamImage].map((img, i) => (
            <div key={i} className="w-[420px] bg-zinc-900 rounded-xl overflow-hidden border border-green-500 hover:scale-[1.02] transition">
              <img src={img} className="h-[200px] w-full object-cover" />
              <div className="p-3 text-center font-semibold">
                {i === 0 ? "Free Fire" : i === 1 ? "Valorant" : "Steam"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPULARES */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-xl font-bold mb-3 text-green-400">Populares</h2>

        <div className="flex gap-3 overflow-x-auto pb-3">
          {[
            mobilelegendImage, csgoImage, legendsImage, marvelImage,
            rainbowImage, robloxImage, starrailImage, pokemonImage,
            minecraftImage, gratisImage, gtavImage, redImage
          ].map((img, i) => (
            <div key={i} className="min-w-40 bg-zinc-900 rounded-lg border border-green-500">
              <img src={img} className="h-20 w-full object-cover rounded-t-lg" />
              <div className="p-2 text-center text-xs font-medium">
                Juego #{i + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NOTICIAS + QUIZ */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-green-400 mb-3">Novedades Gamer</h2>

          {[pokemonImage, minecraftImage, gratisImage].map((img, i) => (
            <div key={i} className="flex gap-3 bg-zinc-900 p-3 rounded-lg mb-3">
              <img src={img} className="w-16 h-16 object-cover rounded" />
              <div>
                <h4 className="font-semibold">Noticia {i + 1}</h4>
                <p className="text-sm text-zinc-400">Descripción breve del juego</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-green-500 rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-2">Quiz Diario</h2>
          <p className="text-sm text-zinc-400 mb-3">¿Cuál es un shooter táctico?</p>

          <div className="flex flex-col gap-2">
            <button className="border border-green-500 rounded py-1 hover:bg-green-500 hover:text-black">League of Legends</button>
            <button className="border border-green-500 rounded py-1 hover:bg-green-500 hover:text-black">Valorant</button>
            <button className="border border-green-500 rounded py-1 hover:bg-green-500 hover:text-black">Roblox</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
