import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="m-2">
     <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/offers' element={<Offers />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
