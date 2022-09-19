import React from 'react';
import { useState } from 'react';
import './Main.css';
import CountryCard from './CountryCard.js';

export default function Main() {

    const [countries, setCountries] = useState([]);



  return (
    <main>
      <CountryCard />
    </main>
  );
}
