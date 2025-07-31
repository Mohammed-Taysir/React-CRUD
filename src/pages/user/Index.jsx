import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader';
import useFetch from '../../components/custom/useFetch';

function Index() {
    const {error, isLoading, data} = useFetch("users");
    if(isLoading) return <Loader />
    if(error) return <p class = "text-danger">{error.message}</p>
    return (
        <>
            {data.map((user)=> {
               return <div className = "user" key = {user._id}>
                    <h2>{user.userName}</h2>
                </div>
            })}
        
        </>
    )


}

export default Index