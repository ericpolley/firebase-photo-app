import React, { useState } from 'react'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: '',
  });
  const {email, password} = formData;
  function onChange(e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <section className='flex flex-col items-center'>
      <div className=' p-6 border-2 rounded-xl border-black shadow-2xl w-fit flex-col flex bg-blue-100'>
      <h1 className='text-center font-bold text-2xl mt-2 mb-2'>Sign In</h1>
      <form className='flex flex-col'>
      <input type="email" id="email" value={email} onChange={onChange} placeholder="email address" className='mt-2 mb-2'></input>
      <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={onChange} placeholder="password" className='mt-2 mb-2'></input>
     <div className='absolute top-64 ml-[205px] mt-2 cursor-pointer'> {showPassword ? (<AiFillEyeInvisible onClick={()=>setShowPassword((prevState)=>!prevState)} />) : (<AiFillEye onClick={()=>setShowPassword((prevState)=>!prevState)}/>)} </div>
      <div className='flex flex-col text-sm text-right'>
        <p>No account?
          <Link to="/sign-up" className='text-red-600 hover:text-red-400 ml-2'>Register</Link>
        </p>
        <p className='text-right mb-2 mt-1'>
          <Link to="/forgot-password" className='text-blue-600 hover:text-blue-400'>Forgot password</Link>
        </p>
      </div>
      <button className='bg-blue-600 text-white rounded-lg border-2 border-black hover:bg-blue-500 p-1 m-1 uppercase shadow-lg active:bg-blue-700'>Sign In</button>
      <div className='my-2 flex items-center before:border-t  before:flex-1 before:border-gray-400 after:border-t  after:flex-1 after:border-gray-400'><p className='text-center font-semibold m-3'>OR</p></div>
      <OAuth />
      </form>
    </div>
    </section>
  )
}
