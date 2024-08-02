import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Full Stack Application</a>
        <Link to="/adduser" ><button className='btn btn-outline-light'>Add User</button></Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
