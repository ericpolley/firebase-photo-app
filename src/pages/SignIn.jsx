import React, { useState } from 'react'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

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
     <div className='absolute top-64 ml-[180px] mt-2 cursor-pointer'> {showPassword ? (<AiFillEyeInvisible onClick={()=>setShowPassword((prevState)=>!prevState)} />) : (<AiFillEye onClick={()=>setShowPassword((prevState)=>!prevState)}/>)} </div>
      </form>
      </div>
    </section>
  )
}
