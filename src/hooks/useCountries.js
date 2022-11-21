import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/client.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getCountries() {
      setLoading(true);
      try {
        const data = await fetchCountries();
        setCountries(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    }
    getCountries();
  }, []);
  return { countries, loading, error };
}