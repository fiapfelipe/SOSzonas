"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [nome, setNome] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    if (nome.trim()) {
      localStorage.setItem("usuario", nome)
      router.push("/pages/inicio")
    }
  }

  return (
    <main className="h-svh flex flex-col items-center justify-center">
      <section className="w-80 mx-auto p-4 bg-white rounded-lg shadow">
        <span className="text-center gap-1 mb-4 text-blue-500 font-bold text-xl">
          <p>SOS</p>
        </span>
        <form>
          <div className="flex flex-col mb-4 gap-2">
            <label htmlFor="login">Nome:</label>
            <input
              className="bg-white p-2 rounded-md border border-gray-400"
              type="text"
              id="login"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleLogin}
              className="text-center bg-blue-400 hover:bg-blue-600 hover:text-white cursor-pointer text-black font-semibold px-4 py-2 rounded-full shadow transition"
            >
              Entrar
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
