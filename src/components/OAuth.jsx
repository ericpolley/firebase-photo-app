import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify'
import { db } from '../firebase'
import { useNavigate } from 'react-router'

export default function OAuth() {
  const navigate = useNavigate()
 async function onGoogleClick(){
try {
  const auth = getAuth()
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider)
  const user = result.user 
  //check for user

  const docRef = doc(db, "users", user.uid)
  const docSnap = await getDoc(docRef)

  if(!docSnap.exists()){
    await setDoc(docRef, {
      name: user.displayName,
      email: user.email,
      timestamp: serverTimestamp(),
    })
  }

  navigate('/');
} catch (error) {
  toast.error("Could not authorize")
  console.log('error')
}
  }
  return (
    <button type="button" onClick={onGoogleClick} className='flex items-center justify-center w-full bg-red-700 text-white rounded-lg uppercase text-sm font-medium hover:bg-red-600 active:bg-red-800 p-2 border-2 shadow-lg border-black m-1'>
        <FcGoogle className='mr-2 bg-white rounded-full border-black border h-7 w-7' />
        Continue with Google</button>
  )
}
