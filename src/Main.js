import React from 'react';
import { useState } from 'react';
import './Main.css';
import { useCountries } from './useCountries.js';
import CountryCard from './CountryCard.js';

export default function Main() {

  const countries = useCountries();
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('');

  const sortCountries = () => {

    return countries
      .sort((a, b) => {
        if (sort === 'aToZ') {
          return a.name > b.name ? 1 : -1;
        } else if (sort === 'zToA') {
          return a.name < b.name ? 1 : -1;
        }
      })
      .filter((country) => {
        return type === 'all' ? true : country.continent === type;
      });
  };

  return (
    <>
      <div className="main">
        
        <div className="select">
          <h1>Flags of the World</h1>
          <label>Sort by continent</label>
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
          
          <label>Sort alphabetically</label>
          <select placeholder="" value={sort} onChange={(e) => {
            setSort(e.target.value);
          }}>
            <option value="default"></option>
            <option value="aToZ">A - Z</option>
            <option value="zToA">Z - A</option>
          </select>
        </div>
        
        <div className="flags">
          {sortCountries().map((country) => (
            <CountryCard key={country.id} {...country} />
          ))}
        </div>
      </div>
    </>
  );
}
