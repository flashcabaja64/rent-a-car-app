import { useState, useEffect } from 'react';

const useFetch:Function = (endpoint:string): {} => {
  let active = true;

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<object>();
  const [error, setError] = useState<object | null>(null);
  
  useEffect(() => {
    if(!endpoint) return;
    const fetchData = async () => {
      if (active) setLoading(true);

      try {
        const response = await fetch(`https://myfakeapi.com/api/cars/${endpoint}`, {
          method: "GET"
        });
        const data = await response.json();
        if (active) setData(data);
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
  }, [endpoint])

  return { data, loading, error }
};

export default useFetch;