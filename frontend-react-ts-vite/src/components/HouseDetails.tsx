import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHouseDetails } from "../services/houseService";
import HouseInfoSection from "./HouseInfoSection";
import { SparklesCore } from "./ui/FireSparkles";
import HouseName from "./HouseName";

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
      <a href="/" className="mt-8 text-blue-500 hover:underline">
        Back to search
      </a>
    </div>
  );
};

export default HouseDetails;
