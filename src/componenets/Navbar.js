import React from 'react'
import "../App.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>LOGO</span>
        <ul className='list'>
            <li className='listItem'>
                <img src='https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs' alt='' className='avatar'/>
            </li>
            <li className='listItem'>John doe</li>
            <li className='listItem'>Logout</li>
        </ul>
    </div>
  )
}
