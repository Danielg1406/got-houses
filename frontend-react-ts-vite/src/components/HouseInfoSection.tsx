import React from "react";
import { motion } from "framer-motion";

interface HouseInfoSectionProps {
  region: string;
}

const HouseInfoSection: React.FC<HouseInfoSectionProps> = ({ region }) => {
  return (
    <div className="flex flex-col px-8 pt-20 pb-10 w-full bg-[#181818] z-10">
      <div className="flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-7xl text-xl md:text-5xl font-bold text-neutral-200 font-got mb-8"
        >
          Region
        </motion.h2>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          src="/got-map.webp"
          alt="map of game of thrones showing all the regions"
          className="z-10 mb-4 rounded border border-neutral-700 shadow-[0_5px_60px_5px_rgba(240,240,240,0.1)]"
        />
        <p className="font-serif text-md italic text-center text-gray-400">
          {region}
        </p>
      </div>
    </div>
  );
};

export default HouseInfoSection;
