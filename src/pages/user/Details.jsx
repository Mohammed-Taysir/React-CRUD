import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/custom/useFetch';
import Loader from '../../components/loader/Loader';

function Details() {
    const {id} = useParams();
    console.log(id)
    const {error, isLoading, data} = useFetch(`users/${id}`);
    if(isLoading) 
      return <Loader />

    if(error)
      return <p class = "text-danger">{error.message}</p>
    console.log(data.user);
    
  return (
    <>
        <h2>User Details</h2>
        <div>
          <h3>{data.user.userName}</h3>
          <p>{data.user.email}</p>
          <p>{data.user.phone}</p>
        </div>

    </>
  )
}

export default Details