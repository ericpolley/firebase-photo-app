import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="m-2">
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/profile' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        </Route>
        
        <Route path='/offers' element={<Offers />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
      </Routes>

      
     </Router>
     <ToastContainer
position="bottom-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover
theme="dark"
/>
    </div>
    
  );
}

export default App;
