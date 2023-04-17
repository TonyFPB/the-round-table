import { useEffect, useState } from "react";

export default function useAsync(asyncFunction, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const act = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const data = await asyncFunction(...args);
      setData(data);
      setLoading(true);
      return data;
    }catch(err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  }

  useEffect(() => {
    if(immediate){
      act();
    }
  },[])
  
  return {
    data,
    loading,
    error,
    act
  }
}