'use client';
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  children?: React.ReactNode;
}

const Category: React.FC<CategoryProps> = ({ children }) => {
  return (
    <>
      <section
        className="
          mx-auto mt-16 bg-white text-black rounded-t-lg
          hover:text-blue-900 cursor-pointer border-b-4 border-gray-300
          max-sm:w-[90%]
          sm:w-[80%]
          md:w-[60%]
          lg:w-[40%]
        "
      >
        <Link href="inicio">
          <p
            className="
              flex items-center
              max-sm:p-3 max-sm:text-base
              sm:p-4 sm:text-lg
              md:p-5 md:text-xl
              lg:p-[1em] lg:text-[1.2em]
            "
          >
            <ChevronLeft />
            {children}
          </p>
        </Link>
      </section>
    </>
  );
};

export default Category;
