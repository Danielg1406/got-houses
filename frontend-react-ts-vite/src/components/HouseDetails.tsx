import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHouseDetails } from "../services/houseService";
import HouseInfoSection from "./HouseInfoSection";
import { SparklesCore } from "./ui/FireSparkles";
import HouseName from "./HouseName";
import HouseMembers from "./HouseMembers";

const HouseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [house, setHouse] = useState<any>(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      const result = await getHouseDetails(Number(id));
      setHouse(result);
    };

    fetchHouseDetails();
  }, [id]);

  if (!house) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-[#181818] flex flex-col items-center text-slate-50 p-8 overflow-hidden">
      <HouseName name={house.name} word={house.words} />
      <HouseInfoSection region={house.region} coatArms={house.coatOfArms} />
      <HouseMembers swornMembers={house.swornMembers} />
      <div className="absolute bottom-0 w-full h-1/2 pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.4}
          maxSize={1.8}
          particleDensity={15}
          className="w-full h-full"
          particleColor="#7F1D1D"
        />
      </div>
      <a
        href="/"
        className="px-8 py-2 rounded-full relative bg-transparent text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-neutral-700"
      >
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <span className="relative z-20">Back to search</span>
      </a>
    </div>
  );
};

export default HouseDetails;
