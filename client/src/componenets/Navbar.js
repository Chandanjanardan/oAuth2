import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export const Navbar = ({user}) => {
  
  return (
    <div className='navbar'>
        <span className='logo'><Link className="link" to="/">LOGO</Link></span>
        {user ?(

          <ul className='list'>
            <li className='listItem'>
                <img src='https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs' alt='' className='avatar'/>
            </li>
            <li className='listItem'>John doe</li>
            <li className='listItem'>Logout</li>
        </ul>
          ) :(
            <Link className='link' to="/login">Login</Link>
          )}
    </div>
  )
}
