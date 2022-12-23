import { getAuth } from 'firebase/auth';
import { useState } from 'react'
import { useNavigate } from 'react-router';

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate();
  const[formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
 const {name, email} = formData
 function onLogout() {
  auth.signOut();
  navigate("/");
 }
  return (
    <>
    <section className='flex flex-col items-center'>
      <div>
      <h1 className='text-3xl text-center m-4'>Profile</h1>
      </div>
      <div className=' p-6 border-2 rounded-xl border-black shadow-2xl w-fit flex-col flex bg-blue-100'>
      <form className='flex flex-col'>
        <input type="text" id="name" value={name} disabled className='mt-2 mb-2' />
        <input type="email" id="email" value={email} disabled className='mt-2 mb-2' />
        <div className='flex justify-between flex-col'>
          <p>Change your name? <span className='text-red-500 hover:text-red-400 active:text-red-600 cursor-pointer'> Edit </span></p> 
          <p className='mt-2 mb-2 text-blue-500 hover:text-blue-400 active:text-blue-600 cursor-pointer' onClick={onLogout}>Sign out</p>
        </div>
      </form>
      </div>
    </section>
    </>
  )
}
