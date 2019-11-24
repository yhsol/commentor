import { useRef, useEffect, useState } from "react";
import { movieApi } from "./AxiosInstance";

export const PopularApi = () => {
  const [results, setResults] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { results }
        } = await movieApi.popular();
        setResults(results);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error };
};

export const RecentApi = () => {
  const [results, setResults] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { results }
        } = await movieApi.upcoming();
        setResults(results);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error };
};

export const SearchApi = (term: string) => {
  const [results, setResults] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { results }
        } = await movieApi.search(term);
        setResults(results);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, [term]);

  return { results, loading, error };
};

export const DetailApi = (id: number) => {
  const [results, setResults] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { results }
        } = await movieApi.detail(id);
        setResults(results);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, [id]);

  return { results, loading, error };
};

// function when need interval

// export function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest function.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }
