import { useState, useEffect } from 'react';

type ApiResponse<T> = {
  data?: T;
  error?: Error;
  loading: boolean;
};
  

function FetchData<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        const json = await response.json();

        if (isMounted) {
          setData(json);
        }
      } catch (error:any) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    console.log(data)
    console.log(typeof(data))
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, error, loading };
}

export default FetchData;
