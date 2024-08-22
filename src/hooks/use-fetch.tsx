import { useEffect, useState } from "react";
import { Location } from "../mocks/db";
import { getErrorMessage } from "../utils/error";

const COMPONENT_RERENDERING_ABORT = "component is re-rendering";

export function useFetch<T>(url = "/locations", method = "GET") {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<T>();

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
      const error = getErrorMessage(e);

      // ignore re-rendering errors
      if (error !== COMPONENT_RERENDERING_ABORT) {
        setError(getErrorMessage(e));
      }

      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      const abortController = new AbortController();
      refetch(abortController.signal);

      return () => {
        abortController.abort(COMPONENT_RERENDERING_ABORT);
      };
    }
  }, [url]);

  return { data, isLoading, error };
}
