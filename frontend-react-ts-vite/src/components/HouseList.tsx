import React, { useState } from "react";
import { searchHouses } from "../services/houseService";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const HouseList: React.FC = () => {
  const [query, setQuery] = useState("");
  const [houses, setHouses] = useState<any[]>([]);

  const handleSearch = async (value: string) => {
    setQuery(value);
    if (value) {
      const result = await searchHouses(value);
      setHouses(result);
    } else {
      setHouses([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="min-h-screen bg-home bg-cover bg-no-repeat bg-center">
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-black to-100% p-5">
        <h1 className="text-3xl text-center text-pretty font-trajan mb-8 text-slate-50">
          Game of Thrones Houses
        </h1>
        <form onSubmit={handleFormSubmit} className="w-full max-w-md shadow-lg">
          <HoverBorderGradient containerClassName="w-full">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Enter the name of a house..."
              className="w-full h-14 bg-inherit text-slate-50 p-2 rounded focus:outline-none"
            />
          </HoverBorderGradient>
        </form>
        {query && (
          <ul className="mt-4 font-serif">
            {houses.map((house) => (
              <li key={house.url}>
                <a
                  href={`/houses/${house.url.split("/").pop()}`}
                  className="text-xl text-white hover:underline"
                >
                  {house.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HouseList;
