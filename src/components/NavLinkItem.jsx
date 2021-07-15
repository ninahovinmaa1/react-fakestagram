import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinkItem({to, text}) {
  return (
    <>
      <li className="nav-item">
        <Link to={to} className="nav-link">{text}</Link>
      </li>
    </>
  )
}
