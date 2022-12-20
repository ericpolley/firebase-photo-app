import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full bg-red-700 text-white rounded-lg uppercase text-sm font-medium hover:bg-red-600 active:bg-red-800 p-2 border-2 shadow-lg border-black m-1'>
        <FcGoogle className='mr-2 bg-white rounded-full border-black border h-7 w-7' />
        Continue with Google</button>
  )
}
