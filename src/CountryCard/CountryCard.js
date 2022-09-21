import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-container">
      <div className="country-card">
        {/* <img className="flag"
          src={`https://flagcdn.com/48x36/${iso2.toLowerCase()}.png`} /> */}
        <img className="flag"
          src={`https://flagcdn.com/108x81/${iso2.toLowerCase()}.png`}
          width="108"
          height="81"
          alt={`Flag of ${name}`}/>
        <p className="name">{name}</p>
      </div>
    </div>
  );
}