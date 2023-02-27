import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        <NavLink to='/products'>Produtos</NavLink>
    </nav>
  )
}
