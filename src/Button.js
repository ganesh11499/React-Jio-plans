import React from 'react'
import { Link } from 'react-router-dom';
import './button.css';
function Button() {
  return (
    <div>
      <Link to='/Prepaid'>
        <button className="btn" >Prepaid</button>
      </Link>  
      <Link to='/Postpaid'>
      <button className='btn'>Postpaid</button>
      </Link>
    </div>
  )
}

export default Button
