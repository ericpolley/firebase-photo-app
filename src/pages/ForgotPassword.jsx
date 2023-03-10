import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';


export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function onChange(e) {
    setEmail(e.target.value);
    }
   async function onSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth() 
      await sendPasswordResetEmail(auth, email)
      navigate('/sign-in')
    
      toast.success('Password Reset Email Sent')
    } catch (error) {
      toast.error("Check the email address")
    }
   }
  
  return (
    <section className='flex flex-col items-center'>
      <div className=' p-6 border-2 rounded-xl border-black shadow-2xl w-fit flex-col flex bg-blue-100'>
      <h1 className='text-center font-bold text-2xl mt-2 mb-2'>Forgot Password</h1>
      <form onSubmit={onSubmit} className='flex flex-col'>
      <input type="email" id="email" value={email} onChange={onChange} placeholder="email address" className='mt-2 mb-2'></input>
      <div className='flex flex-col text-sm'>
      <p className='text-center mt-2 text-right'>
          <Link to="/sign-in" className='text-blue-600 hover:text-blue-400'>Sign In</Link>
        </p>
        <p className='text-right mb-2 mt-1'>No account?
          <Link to="/sign-up" className='text-red-600 hover:text-red-400 ml-2'>Sign Up</Link>
        </p>
      </div>
      <button className='bg-blue-600 text-white rounded-lg border-2 border-black hover:bg-blue-500 p-1 m-1 uppercase shadow-lg active:bg-blue-700'>reset
       my Password</button>

      </form>
    </div>
    </section>
  )
}

