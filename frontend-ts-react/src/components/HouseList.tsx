import React, { useEffect, useState } from 'react';
import { getAllHouses } from '../services/houseService';

const HouseList: React.FC = () => {
    const [query, setQuery] = useState('');
    const [houses, setHouses] = useState<any[]>([]);
    const [filteredHouses, setFilteredHouses] = useState<any[]>([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const allHouses = await getAllHouses();
            setHouses(allHouses);
        };

        fetchHouses().catch((error) => {
            console.error('Error during fetchHouseDetails call:', error);
        });
    }, []);

    useEffect(() => {
        if (query) {
            setFilteredHouses(
                houses.filter(house =>
                    house.name.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setFilteredHouses([]);
        }
    }, [query, houses]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for houses..."
            />
            <ul>
                {filteredHouses.map(house => (
                    <li key={house.url}>
                        <a href={`/houses/${house.url.split('/').pop()}`}>{house.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HouseList;
