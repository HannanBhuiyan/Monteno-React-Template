import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Pages/Error';
import Join from './Pages/Join';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Singleproduct from './Pages/Singleproduct';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';



function App() {

  const [user, setUser] = useState(null)


  return (
     <>
      <BrowserRouter>
      <Navbar /> 
        <Routes> 
          <Route path='/' element={<Home />} />  
          <Route path='/about' element={<About />} />  
          <Route path='/join' element={<Join />} />  
          <Route path='/collection' element={<Collection />} /> 
          <Route path='/contact' element={<Contact />} /> 
          <Route path="/product" element={<Product />} /> 
          <Route path="/singleproduct/:product_id" element={<Singleproduct />} /> 
          <Route path='/login' element={<Login  setUser={setUser} />} />
          <Route path='/dashboard' element={<Dashboard user={user} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
     
     </>
  );
}

export default App;
