import React from 'react';
import { useState } from 'react';
import './Main.css';
import { useCountries } from './useCountries.js';
import CountryCard from './CountryCard.js';

export default function Main() {

  const countries = useCountries();
  const [type, setType] = useState('all');

  const filterCountries = () => {
    return countries.filter((country) => {
      if (type === 'all') {
        return true;
      } else {
        return country.continent === type;
      }
    });
  };

    // eslint-disable-next-line indent

  return (
    <div className="main">
      <div className="select">
        <h1>Flags of the World</h1>
        <select value={type} onChange={(e) => {
          setType(e.target.value);
        }}>
          <option value="all">All</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="South America">South America</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
      <div className="flags">
        {filterCountries().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </div>
  );
}
