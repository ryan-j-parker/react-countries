import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-container">
      <div className="country-card">
        <img className="flag"
          src={`https://flagcdn.com/48x36/${iso2.toLowerCase()}.png`} />
        <p className="name">{name}</p>
      </div>
    </div>
  );
}