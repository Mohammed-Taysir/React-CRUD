import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useFetch(path) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const getUsers = async() => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BURL}/${path}`);
            setData(response.data.users);
        }catch(err) {
            setError(err);
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(()=> {
        getUsers();
    }, []);
  return {data, error, isLoading}
}

export default useFetch