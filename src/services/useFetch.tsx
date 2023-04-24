import { useState, useEffect } from 'react';

const useFetch:Function = (url: string, objectKey: string): {} => {
  let active = true;

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<object>();
  const [error, setError] = useState<object | null>(null);
  
  useEffect(() => {
    if(!url) return;
    const fetchData = async () => {
      if (active) setLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();
        const dataObject = await [data[objectKey]];
        if (active) setData(dataObject);

      } catch(err: any) {
        if (active) setError(err);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchData();

    return () => {
      active = false;
    }
  }, [url])

  return { data, loading, error }
};

export default useFetch;