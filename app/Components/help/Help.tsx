'use client';
import Link from "next/link";
import React from "react";

export default function Help() {
  return (
    <>
      <section className="mx-auto p-4 text-center">
        <Link href="centralajuda">
          <p
            className="
              text-blue-800 hover:text-blue-900 cursor-pointer
              max-sm:text-sm
              sm:text-base
              md:text-lg
              lg:text-[1em]
            "
          >
            Central de Ajuda
          </p>
        </Link>
      </section>
    </>
  );
}
