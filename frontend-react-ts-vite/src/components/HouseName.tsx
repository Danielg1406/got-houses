import React from "react";
import { TextGenerateEffect } from "./ui/TextEffect";
import ScrollHint from "./ui/ScrollHint";

interface HouseNameProps {
  name: string;
  word: string;
}

const HouseName: React.FC<HouseNameProps> = ({ name, word }) => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen w-full -mt-20 sm:mt-0 lg:mb-4"
      tabIndex={0}
    >
      <img
        src="/sigil.webp"
        alt="sigil of the house - three headed iron dragon"
        className="opacity-10 fixed"
      />
      <h1 className="font-got text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-neutral-200">
        {name}
      </h1>
      <div className="w-[40rem] h-1 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-600 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-600 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-600 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-600 to-transparent h-px w-1/4" />
      </div>
      {word && <TextGenerateEffect duration={1} words={`"${word}"`} />}
      <ScrollHint />
    </div>
  );
};

export default HouseName;
