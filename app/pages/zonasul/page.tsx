"use client";
import Category from "@/app/Components/category/Category";
import { Footer } from "@/app/Components/footer/Footer";
import { Header } from "@/app/Components/header/Header";
import Help from "@/app/Components/help/Help";
import { Local } from "@/app/Components/local/Local";
import Status from "@/app/Components/status/Status";
import { CategoryList } from "@/app/types/zones";
import axios from "axios";
import { Droplet, Hamburger, Home } from "lucide-react";
import { useEffect, useState } from "react";

export default function Sul() {
  const [house, setHouse] = useState<CategoryList>([]);
  const [water, setWaters] = useState<CategoryList>([]);
  const [food, setFoods] = useState<CategoryList>([]);

  const baseURL = "/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [houseRes, waterRes, foodRes] = await Promise.all([
          axios.get<CategoryList>(`${baseURL}/abrigos`),
          axios.get<CategoryList>(`${baseURL}/aguas`),
          axios.get<CategoryList>(`${baseURL}/comidas`)
        ]);

        setHouse(houseRes.data);
        setWaters(waterRes.data);
        setFoods(foodRes.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Category>Zona Sul</Category>

      <main
        className="
          bg-white text-black mx-auto rounded-b-lg shadow-xl mb-12
          max-sm:w-[90%]
          sm:w-[80%]
          md:w-[60%]
          lg:w-[40%]
        "
      >
        <p
          className="
            font-semibold
            max-sm:p-3 max-sm:text-base
            sm:p-4 sm:text-lg
            md:p-5 md:text-xl
            lg:p-6 lg:text-[1.2em]
          "
        >
          Status:
        </p>
        <Status powerStatus="Energia Estável" signalStatus="Sinal de Rede Ativo" />

        <h2
          className="
            font-semibold
            max-sm:p-3 max-sm:text-base
            sm:p-4 sm:text-lg
            md:p-5 md:text-xl
            lg:p-6 lg:text-[1.2em]
          "
        >
          Abrigos próximos a você
        </h2>

        {house
          .filter((h) => h.id === 3)
          .map((h) => (
            <Local key={h.id} variant="home" title={h.nome} subtitle={h.endereco} telephone={h.telefone ?? ''}>
              <Home />
            </Local>
          ))}

        <h2
          className="
            font-semibold
            max-sm:p-3 max-sm:text-base
            sm:p-4 sm:text-lg
            md:p-5 md:text-xl
            lg:p-6 lg:text-[1.2em]
          "
        >
          Pontos de abastecimento de água
        </h2>

        {water
          .filter((w) => w.id === 3)
          .map((w) => (
            <Local key={w.id} variant="water" title={w.nome} subtitle={w.endereco} telephone={w.telefone ?? ''}>
              <Droplet />
            </Local>
          ))}

        <h2
          className="
            font-semibold
            max-sm:p-3 max-sm:text-base
            sm:p-4 sm:text-lg
            md:p-5 md:text-xl
            lg:p-6 lg:text-[1.2em]
          "
        >
          Postos de distribuição de alimentos
        </h2>

        {food
          .filter((f) => f.id === 3)
          .map((f) => (
            <Local key={f.id} variant="food" title={f.nome} subtitle={f.endereco} telephone={f.telefone ?? ''}>
              <Hamburger />
            </Local>
          ))}

        <Help />
      </main>
      <Footer />
    </>
  );
}
