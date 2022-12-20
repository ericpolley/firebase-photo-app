import { useLocation, useNavigate } from "react-router-dom"

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    function pathMathRoute(route){
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div className='bg-white border-b shadow-lg rounded-xl sticky top-0'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div className=' bg-gray-100 rounded-full border-4 border-gray-900 p-1'>
                <img src="https://cdn.pixabay.com/photo/2017/05/21/07/59/nerd-2330686_960_720.png" 
                alt="logo" className='h-16 cursor-pointer' onClick={()=>navigate('/')} />
            </div>
            <div>
                <ul className='flex space-x-10 text-gray-500 cursor-pointer'>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                    ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate('/')}>Home</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                    ${pathMathRoute("/offers") && "text-black border-b-red-500"}`} onClick={()=>navigate('/offers')}>Offers</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                    ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={()=>navigate('/sign-in')}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
