import React from "react";

interface HouseCardProps {
  name: string;
  url: string;
}

const HouseCard: React.FC<HouseCardProps> = ({ name, url }) => {
  return (
    <a
      href={`/houses/${url.split("/").pop()}`}
      className="block p-4 mb-2 bg-transparent rounded-lg border border-gray-400 hover:bg-black transition duration-300"
    >
      <p className="text-sm text-slate-50 font-semibold">{name}</p>
    </a>
  );
};

export default HouseCard;
