import React from "react";
import { TextGenerateEffect } from "./ui/TextEffect";

interface HouseNameProps {
  name: string;
  word: string;
}

const HouseName: React.FC<HouseNameProps> = ({ name, word }) => {
  return (
    <>
      <h1 className="font-got text-3xl text-center mt-2">{name}</h1>
      <div className="w-[40rem] h-1 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>
      <TextGenerateEffect duration={1} words={`"${word}"`} className="mb-10" />
    </>
  );
};

export default HouseName;
