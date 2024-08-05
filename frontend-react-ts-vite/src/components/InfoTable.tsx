import React, { useEffect, useState } from "react";
import axios from "axios";

interface InfoTableProps {
  infoDetails: {
    titles: string[];
    seats: string[];
    coatOfArms: string;
    overlord: string;
    founded: string;
    founder: string;
    diedOut: string;
    ancestralWeapons: string[];
    cadetBranches: string[];
  };
}

interface House {
  name: string;
  url: string;
}

const fetchHouseName = async (url: string): Promise<string> => {
  const response = await axios.get(url);
  return response.data.name;
};

const InfoTable: React.FC<InfoTableProps> = ({ infoDetails }) => {
  const [overlordName, setOverlordName] = useState<string>("");
  const [founderName, setFounderName] = useState<string>("");
  const [cadetBranches, setCadetBranches] = useState<House[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (infoDetails.overlord) {
        const name = await fetchHouseName(infoDetails.overlord);
        setOverlordName(name);
      }

      if (infoDetails.founder) {
        const name = await fetchHouseName(infoDetails.founder);
        setFounderName(name);
      }

      if (infoDetails.cadetBranches.length > 0) {
        const branches = await Promise.all(
          infoDetails.cadetBranches.map(async (url) => {
            const name = await fetchHouseName(url);
            return { name, url };
          })
        );
        setCadetBranches(branches);
      }
    };

    fetchData().catch((error) => {
      console.error("Error during fetchHouseDetails call:", error);
    });
  }, [infoDetails]);

  const renderList = (items: string[]) => (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const renderLinks = (houses: House[]) => (
    <ul className="list-disc pl-5">
      {houses.map((house, index) => (
        <li key={index}>
          <a
            href={`/houses/${house.url.split("/").pop()}`}
            className="text-neutral-200 underline hover:text-red-700"
          >
            {house.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="py-10 w-full flex flex-col px-6 md:px-10 lg:px-20 xl:px-32 bg-[#181818] z-10">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-neutral-200 font-got">
        Info
      </h2>
      <table className="w-full lg:w-11/12 2xl:10/12 self-center mt-8 font-serif text-neutral-200 border border-neutral-700 shadow-[0_5px_30px_2px_rgba(240,240,240,0.1)]">
        <tbody>
          <tr>
            <td className="border-b md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2 font-bold">
              Titles
            </td>
            <td className="border-b md:text-lg 2xl:text-xl border-l border-neutral-700 px-4 py-2">
              {renderList(infoDetails.titles)}
            </td>
          </tr>
          <tr>
            <td className="border-b md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2 font-bold">
              Seats
            </td>
            <td className="border-b md:text-lg 2xl:text-xl border-l border-neutral-700 px-4 py-2">
              {renderList(infoDetails.seats)}
            </td>
          </tr>
          <tr>
            <td className="border-b md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2 font-bold">
              Coat of Arms
            </td>
            <td className="border-b md:text-lg 2xl:text-xl border-l border-neutral-700 px-4 py-2">
              {infoDetails.coatOfArms || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border-b md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2 font-bold">
              Overlord
            </td>
            <td className="border-b md:text-lg 2xl:text-xl border-l border-neutral-700 px-4 py-2">
              {overlordName ? (
                <a
                  href={`/houses/${infoDetails.overlord.split("/").pop()}`}
                  className="text-neutral-200 underline"
                >
                  {overlordName}
                </a>
              ) : (
                "N/A"
              )}
            </td>
          </tr>
          <tr>
            <td className="border-b md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2 font-bold">
              Founded
            </td>
            <td className="border-b md:text-lg 2xl:text-xl border-l border-neutral-700 px-4 py-2">
              {infoDetails.founded || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border-b md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2 font-bold">
              Founder
            </td>
            <td className="border-b md:text-lg 2xl:text-xl border-l border-neutral-700 px-4 py-2">
              {founderName || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border-b md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2 font-bold">
              Died Out
            </td>
            <td className="border-b md:text-lg 2xl:text-xl border-l border-neutral-700 px-4 py-2">
              {infoDetails.diedOut || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border-b md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2 font-bold">
              Ancestral Weapons
            </td>
            <td className="border-b md:text-lg 2xl:text-xl border-l border-neutral-700 px-4 py-2">
              {renderList(infoDetails.ancestralWeapons)}
            </td>
          </tr>
          <tr>
            <td className="md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2 font-bold">
              Cadet Branches
            </td>
            <td className="border-l md:text-lg 2xl:text-xl border-neutral-700 px-4 py-2">
              {renderLinks(cadetBranches)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
