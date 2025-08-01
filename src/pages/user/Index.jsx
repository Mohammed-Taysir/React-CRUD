import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader';
import useFetch from '../../components/custom/useFetch';
import { Link } from 'react-router-dom';

function Index() {
    const {error, isLoading, data, setData} = useFetch("users");
    if(isLoading) return <Loader />
    if(error) return <p className = "text-danger">{error.message}</p>

    const removeUser = async (id) => {
        const response = await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
        const newUsers = data.users.filter((user) => user._id != id);
        const newData = {
            message: "Users Fetched successfully",
            users: newUsers
        };
        setData(newData);
    }
    return (
        <>
            <table className = "w-100 text-center">
                <thead>
                    <tr className = "py-3 border border-0 border-bottom">
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>phone</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.users.map(user => 
                            <tr key = {user._id} className = "py-3 border border-0 border-bottom">
                                <td>{user._id}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td className = "d-flex gap-2 justify-content-center">
                                    <Link className = "btn btn-outline-primary" to = {`/details/${user._id}`}>Details</Link>
                                    <button onClick={()=> removeUser(user._id)} className = "btn btn-dark">Delete</button>
                                    <Link className = "btn btn-outline-primary" to = {`/update/${user._id}`}>Update</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        
        </>
    )


}

export default Index