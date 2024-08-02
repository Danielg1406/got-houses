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
    <div className="min-h-screen bg-home bg-cover bg-no-repeat bg-center">
      <div className="min-h-screen w-full flex flex-col items-center pt-40 space-y-5 bg-gradient-to-t from-black to-100% p-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center text-pretty font-got mb-2 text-slate-50">
            Game of Thrones
          </h1>
          <h2 className="text-xl text-slate-50 font-got">House Wiki</h2>
        </div>
        <form onSubmit={handleFormSubmit} className="w-full max-w-md shadow-lg">
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
              className="w-full h-14 bg-inherit text-slate-50 p-2 rounded focus:outline-none"
            />
          </HoverBorderGradient>
          <button type="submit" className="sr-only">
            Submit
          </button>
        </form>
        {query && (
          <div className="mt-4 w-full max-w-md max-h-40 overflow-y-auto rounded">
            {/* TODO: Solve the problem of why it says list with 0 items in the screen reader*/}
            <ul role="list" className="font-merri">
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
