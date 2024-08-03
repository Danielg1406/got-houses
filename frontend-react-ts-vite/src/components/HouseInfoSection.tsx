import React from "react";
import { motion } from "framer-motion";

interface HouseInfoSectionProps {
  region: string;
  coatArms: string;
}

const HouseInfoSection: React.FC<HouseInfoSectionProps> = ({
  region,
  coatArms,
}) => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-got text-lg text-gray-400"
        >
          Region
        </motion.h2>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          src="/got-map.webp"
          alt="map of game of thrones showing all the regions"
          className="z-10 rounded border border-gray-700 shadow-[0_5px_60px_5px_rgba(240,240,240,0.1)]"
        />
        <p className="font-serif text-sm italic text-center text-gray-400">
          {region}
        </p>
      </div>
      <div className="flex flex-col items-baseline">
        <h2 className="font-got text-xl text-gray-400 text-right">
          Coat Of Arms
        </h2>
        <p className="font-serif text-sm text-gray-400">{coatArms}</p>
      </div>
    </div>
  );
};

export default HouseInfoSection;
