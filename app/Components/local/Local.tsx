import React from 'react';

type Variant = 'food' | 'home' | 'water';

interface LocalProps {
  children: React.ReactNode;
  title: string;          
  subtitle: string;
  telephone: string;     
  variant?: Variant; 
}

const variantStyles: Record<Variant, { bg: string; text: string }> = {
  food: { bg: 'bg-orange-200', text: 'text-orange-400' },
  home: { bg: 'bg-red-200', text: 'text-red-400' },
  water: { bg: 'bg-blue-200', text: 'text-blue-500' },
};

export const Local = ({ children, title, subtitle, telephone, variant = 'food' }: LocalProps) => {
  const styles = variantStyles[variant];

  return (
    <section className="mb-6">
      <ul className="px-4 grid gap-6 mt-1 [grid-template-columns:repeat(auto-fit,minmax(110px,1fr))]">
        <li
          className="
            bg-gray-100 rounded-[20px] flex items-center gap-6
            max-sm:p-3 max-sm:gap-3
            sm:p-4 sm:gap-4
            md:p-5 md:gap-5
            lg:p-6 lg:gap-6
          "
        >
          <div
            className={`
              rounded-[10px] flex justify-center items-center
              max-sm:w-[20%] max-sm:h-[30px] max-sm:p-1 max-sm:text-[0.9em]
              sm:w-[18%] sm:h-[34px] sm:p-2 sm:text-[1em]
              md:w-[16%] md:h-[38px] md:p-2 md:text-[1.1em]
              lg:w-[15%] lg:h-[42px] lg:p-2 lg:text-[1em]

              ${styles.text} ${styles.bg}
            `}
          >
            {children}
          </div>
          <div className="flex flex-col">
            <span
              className="
                text-gray-900 font-medium
                max-sm:text-sm
                sm:text-base
                md:text-lg
                lg:text-[1.1em]
              "
            >
              {title}
            </span>
            <span
              className="
                text-gray-700 text-sm
                max-sm:text-xs
                sm:text-sm
                md:text-base
                lg:text-sm
              "
            >
              {subtitle}
            </span>
            <span
              className="
                text-gray-700 text-sm
                max-sm:text-xs
                sm:text-sm
                md:text-base
                lg:text-sm
              "
            >
              {telephone}
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
};

