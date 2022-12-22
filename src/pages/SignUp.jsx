import React, { useState } from 'react'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {db} from'../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: '',
    name: '',
  });

  const {email, password, name} = formData;
  const navigate = useNavigate()
  function onChange(e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit(e){
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredentials = await createUserWithEmailAndPassword
      (auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: name
      })
      const user = userCredentials.user
      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy)
      navigate("/")
      toast("Success!");
    } catch (error) {
      toast.error("Something went wrong");
    }
    
  }
  return (
    <section className='flex flex-col items-center'>
      <div className=' p-6 border-2 rounded-xl border-black shadow-2xl w-fit flex-col flex bg-blue-100'>
      <h1 className='text-center font-bold text-2xl mt-2 mb-2'>Sign Up</h1>
      <form onSubmit={onSubmit} className='flex flex-col'>
      <input type="text" id="name" value={name} onChange={onChange} placeholder="Name" className='mt-2 mb-2'></input>
      <input type="email" id="email" value={email} onChange={onChange} placeholder="email address" className='mt-2 mb-2'></input>
      <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={onChange} placeholder="password" className='mt-2 mb-2'></input>
     <div className='absolute top-64 ml-[205px] mt-2 cursor-pointer'> {showPassword ? (<AiFillEyeInvisible onClick={()=>setShowPassword((prevState)=>!prevState)} />) : (<AiFillEye onClick={()=>setShowPassword((prevState)=>!prevState)}/>)} </div>
      <div className='flex flex-col text-sm text-right'>
        <p>Have an account?
          <Link to="/sign-in" className='text-red-600 hover:text-red-400 ml-2'>Sign In</Link>
        </p>
        <p className='text-right mb-2 mt-1'>
          <Link to="/forgot-password" className='text-blue-600 hover:text-blue-400'>Forgot password</Link>
        </p>
      </div>
      <button className='bg-blue-600 text-white rounded-lg border-2 border-black hover:bg-blue-500 p-1 m-1 uppercase shadow-lg active:bg-blue-700'>Sign Up</button>
      <div className='my-2 flex items-center before:border-t  before:flex-1 before:border-gray-400 after:border-t  after:flex-1 after:border-gray-400'><p className='text-center font-semibold m-3'>OR</p></div>
      <OAuth />
      </form>
    </div>
    </section>
  )
}
