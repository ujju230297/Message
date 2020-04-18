import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
    return (
      <ul className="right">
          <li><NavLink to='/create'></NavLink>New Mesaage</li>
          <li><NavLink to='/'>Logout</NavLink></li>
          <li><NavLink to='/' className='btn bth-floating pink lighten-1'>NN</NavLink></li>
      </ul>
    )
}
 export default SignedInLinks