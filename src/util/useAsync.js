import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useAsync(init, url){
  const [result, setResult] = useState(init);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    (async() => {
      try{
        const {data} = await axios.get(url);
        setResult(data);
        setLoading(true);
      }catch(err){
        console.error(err);
        setLoading(false);
      }
    })
  }, []);
  
  return [result, loading];
}
