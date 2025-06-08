"use client"

import { Check } from "lucide-react"
import Link from "next/link"

export default function Finalizado() {
  return (
    <>
      <main className="h-svh flex flex-col items-center justify-center">
        <section className="w-80 mx-auto p-4 bg-white rounded-lg shadow text-center mb-3">
          <span className="text-center gap-1 mb-4 text-blue-500 font-bold text-xl">
            <p>SOS</p>
          </span>

          <div className="flex items-center justify-center mx-auto w-16 h-16 rounded-full border-4 bg-blue-400 border-blue-400 mt-5 mb-5">
            <Check className="text-white w-8 h-8" />
          </div>

          <p>Mensagem Enviada!</p>
        </section>

        <Link href="/"><p className="uppercase text-2xl hover:text-blue-950 pointer">sair</p></Link>
      </main>
    </>
  )
}