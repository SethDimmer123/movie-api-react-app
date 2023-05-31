import React from 'react'
import MoviFlixLogo from "../assets/Untitled design (1).png"


const Nav = () => {
  return (
    <nav>
        <div className="nav__container">
            <a href='/'>
            <img src={MoviFlixLogo} alt='' className='logo' />
            </a>
            <ul className='nav__links'>
                <li className='nav__list'>
                    <a  href='/' className='nav__link'>
                        Home
                    </a>
                </li>
                <li className='nav__list'>
                    <a href='/browse' className='nav__link--btn'>
                        Browse Movies
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Nav