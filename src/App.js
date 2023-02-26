import React from 'react'
import Header from './Header';
import Prepaid from './Prepaid';
import Postpaid from './Postpaid'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from './Button';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Button/>
    
     <Routes>
       <Route path='/prepaid' element={<Prepaid/>} />
       <Route path='/postpaid' element={<Postpaid/>} />
     </Routes>
  </BrowserRouter>
  )
}

export default App
