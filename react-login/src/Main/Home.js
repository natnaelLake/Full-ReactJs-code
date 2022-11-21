import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css';

const Home = () => {
  return (
      <div>
          <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                  <ul className='navbar-nav'>
                      <li className='nav-item active'>
                            <Link  to  ="/">Home</Link>
                      </li>
                      <li className='nav-item'>
                            <Link  to  ="/login">Login</Link> 
                      </li>
                      <li className='nav-item'>
                            <Link  to  ="/gallery">Gallery</Link>
                      </li>
                  </ul>
          </nav>
      </div>
  )
}

export default Home