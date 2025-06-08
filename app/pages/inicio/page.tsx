"use client"
import { ZoneButton } from "@/app/Components/zoneButton/zoneButton";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Main() {
  const [nomeUsuario, setNomeUsuario] = useState("")

  useEffect(() => {
    const nome = localStorage.getItem("usuario")
    if (nome) {
      setNomeUsuario(nome)
    }
  }, [])

  return (
    <>
      <main
        className="
          bg-white text-black mx-auto my-auto shadow-xl rounded-3xl
          max-sm:w-[90%] max-sm:p-4
          sm:w-[80%]
          md:w-[60%]
          lg:w-[40%] lg:rounded-4xl
        "
      >
        <div className="p-4">
          <p
          className="
            text-center mb-2
            max-sm:text-base
            sm:text-lg
            md:text-xl
            lg:text-[1.3em] lg:mb-3
          "
          >
            Bem-vindo, {nomeUsuario || "Usuário"}
          </p>
          <section>
            <p
              className="
                text-center font-medium mb-2
                max-sm:text-[1rem]
                sm:text-xl
                md:text-2xl
                lg:text-2xl lg:mb-3
              "
            >
              Em qual zona de São Paulo você está?
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <Link href="zonacentral">
                <ZoneButton>Zona Central</ZoneButton>
              </Link>
              <Link href="zonaoeste">
                <ZoneButton>Zona Norte</ZoneButton>
              </Link>
              <Link href="zonasul">
                <ZoneButton>Zona Sul</ZoneButton>
              </Link>
              <Link href="zonaoeste">
                <ZoneButton>Zona Oeste</ZoneButton>
              </Link>
              <Link href="zonaleste">
                <ZoneButton>Zona Leste</ZoneButton>
              </Link>  
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

