import { useState, useEffect } from 'react';
import { fetchCountries } from '../src/services/client.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const data = await fetchCountries();
      setCountries(data);
    }
    getCountries();
  }, []);
  return countries;
}