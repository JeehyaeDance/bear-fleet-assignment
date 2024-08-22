import { useEffect, useState } from "react";
import { Location } from "../mocks/db";
import { getErrorMessage } from "../utils/error";

export const useFetch = (url = "locations", method = "GET") => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Location[]>();

  const refetch = async (signal: AbortSignal) => {
    setData(undefined);
    setIsLoading(true);
    setError(undefined);

    try {
      const res = await fetch(url, { method: method, signal });

      if (res.ok === false) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    } catch (e) {
      setError(getErrorMessage(e));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      const abortController = new AbortController();
      refetch(abortController.signal);

      return () => {
        abortController.abort();
      };
    }
  }, [url]);

  return { data, isLoading, error };
};
