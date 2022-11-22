import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css';

const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" >
          <Link class="navbar-brand mt-5 mt-lg-0 text-dark" to="/">
            Hotel Management System
          </Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link " id = 'home'to = '/'>Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to = '/gallery'>Gallery</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to = '/login'>Login</Link>
            </li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
            <div className='container-fluid'>
                <form className='d-flex input-group w-auto'>
                <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    />
                    <button className="btn btn-outline-dark border-1" id="search-addon">
                    Search
                </button>
                </form>
            </div>            
        </div>
      </div>
    </nav>
</div>
  )
}

export default Home