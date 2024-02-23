import { useEffect, useState } from 'react';
import { getData } from '../utils/dataBase';

export const useMockFetchData = <T extends unknown>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const pageTasks = getData(url);
        //To see how to handle the error on the API error
        // throw new Error('not implemented');
        //To see how the app handles the delay of the API
        setTimeout(function () {
          setData(pageTasks as T);
          setError(null);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(error as string);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [data, error, loading] as const;
};
