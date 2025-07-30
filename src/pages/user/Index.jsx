import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader';

function Index() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const getUsers = async() => {
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_BURL}/users`);
            setUsers(data.users);
        }catch(err) {
            setError(err);
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(()=> {
        getUsers();
    }, []);
    if(isLoading) return <Loader />
    if(error) return <p class = "text-danger">{error.message}</p>
    return (
        <>
            {users.map((user)=> {
               return <div className = "user" key = {user._id}>
                    <h2>{user.userName}</h2>
                </div>
            })}
        
        </>
    )


}

export default Index