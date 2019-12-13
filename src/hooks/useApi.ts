import { useState, useEffect } from "react";

const useApi = (apiFn: () => Promise<any>) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
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
  };

  useEffect(() => {
    console.log("api called");
    fetchApi();
  }, [apiFn]);

  return { fetchApi, response, loading, error };
};

export default useApi;
