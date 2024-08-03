import React from "react";
import { Link } from "react-router-dom";

interface HouseCardProps {
  name: string;
  url: string;
}

const HouseCard: React.FC<HouseCardProps> = ({ name, url }) => {
  const houseId = url.split("/").pop();
  return (
    <li>
      <Link to={`/houses/${houseId}`} className="block mb-4">
        <div className="border border-gray-400 p-4 rounded-lg hover:bg-white/10 transition duration-300">
          <p className="text-sm md:text-lg text-white">{name}</p>
        </div>
      </Link>
    </li>
  );
};

export default HouseCard;
