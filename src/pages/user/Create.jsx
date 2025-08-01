import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import {Flip, toast } from 'react-toastify';

function Create() {
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();
  const registerForm = async(data)=> {
    const response = await axios.post(`${import.meta.env.VITE_BURL}/users`, data);
    if(response.status === 201) {
      toast.success('User Add Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip``,
        });
      navigate('/')

    }
  }
  return (
    <>
      Add New User
      <form action="" onSubmit={handleSubmit(registerForm)}>
        <div className="form-floating mb-3">
          <input {...register('userName')} type="text" className="form-control" id="userName" placeholder="" />
          <label htmlFor="userName">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input {...register('email')} type="email" className="form-control" id="userEmail" placeholder="" />
          <label htmlFor="userEmail">User Email</label>
        </div>
        <div className="form-floating mb-3">
          <input {...register('password')} type="password" className="form-control" id="userPassword" placeholder="" />
          <label htmlFor="userPassword">User Password</label>
        </div>
        <div className="form-floating mb-3">
          <input {...register('phone')} type="text" className="form-control" id="userPhone" placeholder="" />
          <label htmlFor="userPhone">User Phone</label>
        </div>
        <button type = "submit" className = "btn btn-outline-primary">Add</button>
      </form>
    </>
  )
}

export default Create