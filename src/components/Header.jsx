import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default function Header() {
    const [pageState, setPageState] = useState('Sign In')
    const auth = getAuth(); 
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setPageState("Profile")
            }else{
                setPageState("Sign In")
            }
        })
    }, [auth])
    const location = useLocation()
    const navigate = useNavigate()
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div className='bg-blue-100 border-2 border-gray-800 p-1 shadow-lg rounded-xl sticky top-0 mb-6'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div className=' bg-blue-600 rounded-full border-2 border-gray-900 hover:bg-blue-400 '>
                <img className=" h-16 cursor-pointer" src="https://cdn.pixabay.com/photo/2013/07/13/11/34/owl-158414_960_720.png" 
                alt="logo" onClick={()=>navigate('/')} />
            </div>
            <div>
                <ul className='flex space-x-10 text-gray-500 cursor-pointer'>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                    ${pathMatchRoute("/") && "text-black border-b-blue-500"}`} onClick={()=>navigate('/')}>Home</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                    ${pathMatchRoute("/offers") && "text-black border-b-blue-500"}`} onClick={()=>navigate('/offers')}>Offers</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                    ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-blue-500"}`} 
                    onClick={()=>navigate('/profile')}>{pageState}</li>
                </ul> 
            </div>
        </header>
    </div>
  )
}
