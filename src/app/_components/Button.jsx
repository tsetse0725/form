import { ChevronLeft, ChevronRight } from "lucide-react";

export const Button = ({ text, type, bgColor, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`w-full flex items-center justify-center text-base font-semibold p-3 gap-2
        rounded-md cursor-pointer ${bgColor} ${
        type === "next" ? "text-white" : "text-black"
      }`}
    >
      {type === "prev" && <ChevronLeft />}
      {text}
      {type === "next" && <ChevronRight />}
    </button>
  );
};
