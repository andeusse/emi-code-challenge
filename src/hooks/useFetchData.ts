import { useEffect, useState } from 'react';
import api from '../api/api';

export const useFetchData = <T extends any>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        api
          .get<T>(url)
          .then((res) => {
            setError(null);
            setData(res.data);
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        setError(error as string);
      }
    };
    fetchData();
  }, [url]);
  return [data, error, loading] as const;
};
