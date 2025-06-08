"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Header } from "@/app/Components/header/Header";
import Category from "@/app/Components/category/Category";
import { Footer } from "@/app/Components/footer/Footer";

export default function CentralAjuda() {
  const router = useRouter();

  const [cep, setCep] = useState<string>("");
  const [logradouro, setLogradouro] = useState<string>("");
  const [observacoes, setObservacoes] = useState<string>("");
  const [erroCep, setErroCep] = useState<string>("");
  const [nomeUsuario, setNomeUsuario] = useState<string>("");

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      setNomeUsuario(usuarioSalvo);
    }
  }, []);

  const buscarCep = async () => {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = (await res.json()) as { erro?: boolean; logradouro?: string };

      if (data.erro) {
        setErroCep("CEP inválido.");
        setLogradouro("");
      } else {
        setErroCep("");
        setLogradouro(data.logradouro || "");
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setErroCep("Erro ao buscar o CEP.");
      setLogradouro("");
    }
  };

  const enviarMensagem = async () => {
    try {
      await axios.post("/api/mensagens", {
        texto: observacoes || null,
        endereco: logradouro || null,
        usuario: {
          id: 0,
          nome: nomeUsuario || "Anônimo"
        }
      });

      router.push("/finalizado");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Category>Central de Ajuda</Category>

      <section
        className="
          bg-white mx-auto p-6 rounded-b-lg shadow-xl mb-[18%]
          max-sm:w-[90%]
          sm:w-[80%]
          md:w-[60%]
          lg:w-[40%]
        "
      >
        <h3 className="text-xl font-semibold mb-4">Informe seu CEP</h3>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-700">CEP</label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                className="w-full border px-3 py-2 rounded border-blue-600 text-gray-700"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <button
                type="button"
                className="bg-blue-400 hover:bg-blue-600 hover:text-white cursor-pointer text-black px-4 py-2 rounded"
                onClick={buscarCep}
              >
                Buscar
              </button>
            </div>
            {erroCep && <p className="text-red-600 text-sm mt-1">{erroCep}</p>}
          </div>

          {logradouro && (
            <div>
              <label className="text-sm font-semibold text-gray-700">Rua</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded border-blue-600 text-gray-700 bg-gray-100"
                value={logradouro}
                readOnly
              />
            </div>
          )}

          <div>
            <label className="text-lg font-semibold text-gray-700">Deixe seu relato</label>
            <textarea
              className="w-full border px-3 py-2 rounded border-blue-600 text-gray-700 min-h-[100px] resize-y"
              placeholder="Digite aqui..."
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={enviarMensagem}
              className="bg-blue-400 hover:bg-blue-600 hover:text-white cursor-pointer text-black font-semibold px-6 py-3 rounded shadow transition"
            >
              Enviar
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
