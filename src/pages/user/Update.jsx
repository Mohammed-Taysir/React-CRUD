import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../components/custom/useFetch';
import Loader from '../../components/loader/Loader';
import {Flip, toast } from 'react-toastify';

function Update() {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const { data, setData, error, isLoading } = useFetch(`users/${id}`);
    if (isLoading)
        return <Loader />;
    if (error)
        return <p className="text-danger">{error.message}</p>;


    const updateUser = async (newData) => {
        const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`, newData);
        if (response.status === 200) {
            toast.success('User Eddited Successfully...', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
            });
            navigate('/');
        }
    }



    return <form onSubmit={handleSubmit(updateUser)}>
        Update User Details

        <div className="form-floating mb-3">
            <input {...register('userName')} type="text" className="form-control" id="user-name" placeholder="" />
            <label htmlFor="user-name">User Name</label>
        </div>
        <div className="form-floating mb-3">
            <input value={data.user.email} type="email" className="form-control" id="email" placeholder="" disabled />
            <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3">
            <input value={data.user.phone} type="text" className="form-control" id="phone" placeholder="" disabled />
            <label htmlFor="phone">Phone Number</label>
        </div>

        <button type="submit" className="btn btn-outline-primary">Update</button>



    </form>

}

export default Update;