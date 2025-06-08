'use client';
import { Signal, Zap } from "lucide-react";
import React from "react";

interface StatusProps {
  powerStatus: React.ReactNode;
  signalStatus: React.ReactNode;
}

const Status: React.FC<StatusProps> = ({ powerStatus, signalStatus }) => {
  return (
    <section className="mb-6">
      <ul className="px-4 grid gap-6 mt-1 [grid-template-columns:repeat(auto-fit,minmax(110px,1fr))]">
        <li
          className="
            bg-gray-100 rounded-[20px] flex items-center
            max-sm:p-3 max-sm:gap-3
            sm:p-4 sm:gap-4
            md:p-5 md:gap-5
            lg:p-6 lg:gap-6
          "
        >
          <Zap
            className="
              rounded-[10px] text-yellow-400 bg-yellow-200 flex justify-center items-center
              max-sm:w-[20%] max-sm:h-[30px] max-sm:p-1 max-sm:text-[0.9em]
              sm:w-[18%] sm:h-[34px] sm:p-2 sm:text-[1em]
              md:w-[16%] md:h-[38px] md:p-2 md:text-[1.1em]
              lg:w-[15%] lg:h-[42px] lg:p-2 lg:text-[1em]
            "
          />
          <span
            className="
              max-sm:text-sm
              sm:text-base
              md:text-base
              lg:text-[1.1em]
            "
          >
            {powerStatus}
          </span>
        </li>
        <li
          className="
            bg-gray-100 rounded-[20px] flex items-center
            max-sm:p-3 max-sm:gap-3
            sm:p-4 sm:gap-4
            md:p-5 md:gap-5
            lg:p-6 lg:gap-6
          "
        >
          <Signal
            className="
              rounded-[10px] text-green-400 bg-green-200 flex justify-center items-center
              max-sm:w-[20%] max-sm:h-[30px] max-sm:p-1 max-sm:text-[0.9em]
              sm:w-[18%] sm:h-[34px] sm:p-2 sm:text-[1em]
              md:w-[16%] md:h-[38px] md:p-2 md:text-[1.1em]
              lg:w-[15%] lg:h-[42px] lg:p-2 lg:text-[1em]
            "
          />
          <span
            className="
              max-sm:text-sm
              sm:text-base
              md:text-base
              lg:text-[1.1em]
            "
          >
            {signalStatus}
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Status;

