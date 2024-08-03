import React, { useState } from "react";
import { searchHouses } from "../services/houseService";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import HouseCard from "./ui/HouseCard";

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
    <div className="min-h-screen bg-home bg-cover bg-no-repeat bg-center relative">
      <div className="min-h-screen w-full flex flex-col items-center pt-40 space-y-5 bg-gradient-to-t from-[#000000] to-100% p-7 sm:p-12 z-10 relative">
        <div className="flex flex-col justify-center items-center w-full h-full py-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text- text-center text-pretty font-got text-slate-50">
            Game of Thrones
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-50 font-got">
            House Wiki
          </h2>
        </div>
        <form onSubmit={handleFormSubmit} className="w-full max-w-screen-md">
          <HoverBorderGradient
            containerClassName="w-full"
            aria-label="search box"
          >
            <input
              id="house-search"
              type="text"
              value={query}
              aria-label="Enter the name of a house"
              onChange={handleInputChange}
              placeholder="Enter the name of a house..."
              className="w-full h-14 lg:h-20 font-serif text-md md:text-xl lg:text-xl bg-inherit text-slate-50 px-5 rounded focus:outline-none"
            />
          </HoverBorderGradient>
          <button type="submit" className="sr-only">
            Submit
          </button>
        </form>
        {query && (
          <div className="mt-4 w-full max-w-screen-md max-h-36 overflow-y-auto rounded">
            <ul
              role="list"
              className="font-serif"
              aria-label="list with the search result"
            >
              {houses.map((house) => (
                <HouseCard key={house.url} name={house.name} url={house.url} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HouseList;
