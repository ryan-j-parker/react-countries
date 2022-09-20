import { useState, useEffect } from 'react';
import { fetchCountries } from '../src/services/client.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCountries() {
      setLoading(true);
      const data = await fetchCountries();
      setCountries(data);
      setLoading(false);
    }
    getCountries();
  }, []);
  return { countries, loading };
}