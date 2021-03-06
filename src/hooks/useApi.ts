import { useState, useEffect, useCallback } from "react";

export interface useApiReturnType {
  fetchApi: () => void;
  response: any;
  loading: boolean;
  error: any;
}

//reusable custom hook
const useApi = (apiFn: () => Promise<any>): useApiReturnType => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setResponse(null);

      const apiResponse = await apiFn();
      setResponse(apiResponse);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [apiFn]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return { fetchApi, response, loading, error };
};

export default useApi;
