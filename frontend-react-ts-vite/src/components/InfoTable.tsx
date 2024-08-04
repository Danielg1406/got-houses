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

    fetchData();
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
            className="text-red-500 hover:underline"
          >
            {house.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full flex flex-col my-10">
      <h2 className="font-got text-xl">Info</h2>
      <table className="w-full table-auto mt-8 font-serif border border-neutral-700 shadow-[0_5px_60px_5px_rgba(240,240,240,0.15)]">
        <tbody>
          <tr>
            <td className="border-b border-neutral-700 px-4 py-2 font-bold">
              Titles
            </td>
            <td className="border-b border-l border-neutral-700 px-4 py-2">
              {renderList(infoDetails.titles)}
            </td>
          </tr>
          <tr>
            <td className="border-b border-neutral-700 px-4 py-2 font-bold">
              Seats
            </td>
            <td className="border-b border-l border-neutral-700 px-4 py-2">
              {renderList(infoDetails.seats)}
            </td>
          </tr>
          <tr>
            <td className="border-b border-neutral-700 px-4 py-2 font-bold">
              Coat of Arms
            </td>
            <td className="border-b border-l border-neutral-700 px-4 py-2">
              {infoDetails.coatOfArms || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border-b border-neutral-700 px-4 py-2 font-bold">
              Overlord
            </td>
            <td className="border-b border-l border-neutral-700 px-4 py-2">
              {overlordName ? (
                <a
                  href={`/houses/${infoDetails.overlord.split("/").pop()}`}
                  className="text-red-500 hover:underline"
                >
                  {overlordName}
                </a>
              ) : (
                "N/A"
              )}
            </td>
          </tr>
          <tr>
            <td className="border-b border-neutral-700 px-4 py-2 font-bold">
              Founded
            </td>
            <td className="border-b border-l border-neutral-700 px-4 py-2">
              {infoDetails.founded || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border-b border-neutral-700 px-4 py-2 font-bold">
              Founder
            </td>
            <td className="border-b border-l border-neutral-700 px-4 py-2">
              {founderName ? (
                <a
                  href={`/characters/${infoDetails.founder.split("/").pop()}`}
                  className="text-red-500 hover:underline"
                >
                  {founderName}
                </a>
              ) : (
                "N/A"
              )}
            </td>
          </tr>
          <tr>
            <td className="border-b border-neutral-700 px-4 py-2 font-bold">
              Died Out
            </td>
            <td className="border-b border-l border-neutral-700 px-4 py-2">
              {infoDetails.diedOut || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border-b border-neutral-700 px-4 py-2 font-bold">
              Ancestral Weapons
            </td>
            <td className="border-b border-l border-neutral-700 px-4 py-2">
              {renderList(infoDetails.ancestralWeapons)}
            </td>
          </tr>
          <tr>
            <td className="border-neutral-700 px-4 py-2 font-bold">
              Cadet Branches
            </td>
            <td className="border-l border-neutral-700 px-4 py-2">
              {renderLinks(cadetBranches)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
