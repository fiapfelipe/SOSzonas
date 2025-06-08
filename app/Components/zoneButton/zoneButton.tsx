interface ZoneButtonProps {
  children: React.ReactNode;
}

export const ZoneButton = ({ children }: ZoneButtonProps) => {
  return (
    <button
      type="button"
      className="
        bg-blue-100 text-black font-semibold border border-blue-300 hover:bg-blue-400 cursor-pointer rounded-full

        max-sm:text-xs max-sm:px-3 max-sm:py-1
        sm:text-sm sm:px-4 sm:py-2
        md:text-base md:px-5 md:py-2
        lg:text-[1em] lg:px-6 lg:py-2
      "
    >
      {children}
    </button>
  );
};