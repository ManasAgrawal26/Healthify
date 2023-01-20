import React, { useEffect } from 'react'
import HomeNavbar from './HomeComponents/HomeNavbar'
import { useForm } from 'react-hook-form';
import {
  Link, useNavigate
} from 'react-router-dom';
import {Form} from 'semantic-ui-react';
export default function Patientlogin() {

  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  return (
    <>
      <HomeNavbar />
      <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div>
          <label>Username</label>
          <input  placeholder='Name' className="form-input" type="text" {...register("yourName", { required: true, maxLength: 25 })}/>
          {errors.yourName && <p className='warning'>Please check the First Name</p>}
          </div>
          <div>
          <label>Password</label>
          <input placeholder='password' className="form-input" type="password" {...register("yourName", { required: true, maxLength: 15, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })}/>
          {errors.yourName && <p className='warning'>Please check the Password</p>} 
          </div>
          <button>Submit</button>
      </form>
    </>
  );
}
