import { useState } from "react";

interface FetchDataResponse {
  [key: string]: any;
}

// Define the type for the arguments passed to the fetch function
type UseFetchProps = {
  loading: boolean;
  error: string | null;
};

// The hook expects a function that returns a Promise of the response (T)
const useFetch = <T extends FetchDataResponse, A extends Record<string, any>>(
  cb: (args: A) => Promise<T>
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (args: A): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const response = await cb(args);
      setData(response);
    } catch (err: unknown) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
