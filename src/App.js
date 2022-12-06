import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Facilities from './components/Facilities/Facilities';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import MyBooking from './components/MyBooking/MyBooking';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {

  return (
    <div className="App">
      <AuthProvider>
      
        <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/myBooking' element={ <PrivateRoute><MyBooking/></PrivateRoute>}></Route>
            <Route path='/facilities' element={<Facilities/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/booking/:id' element={<PrivateRoute> <Booking/> </PrivateRoute>}></Route>
            <Route path='/admin' element={<PrivateRoute> <Admin/> </PrivateRoute>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
          
        </BrowserRouter>
       
      </AuthProvider>
    </div>
  );
}

export default App;
