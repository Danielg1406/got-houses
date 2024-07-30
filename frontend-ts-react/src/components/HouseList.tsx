import React, { useState } from 'react';
import { searchHouses } from '../services/houseService';

const HouseList: React.FC = () => {
    const [query, setQuery] = useState('');
    const [houses, setHouses] = useState([]);

    const handleSearch = async () => {
        const result = await searchHouses(query);
        setHouses(result);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for houses..."
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {houses.map((house: any) => (
                    <li key={house.url}>
                        <a href={`/houses/${house.url.split('/').pop()}`}>{house.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HouseList;
