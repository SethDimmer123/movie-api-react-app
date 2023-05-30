import React from 'react'
import MoviFlixLogo from "../assets/MOVIFLIX (2).png"
<assets />


const Footer = () =>  {
  return (
    <footer>
        <div className='container'>
            <div className="row row__column">
                <a href="/">
                    <figure className='footer__logo'>
                        <img src={MoviFlixLogo}className='footer__logo--img' />
                    </figure>
                </a>
                <div className='footer__copyright'>
                    Copyright &copy; 2023 MOVIFLIX
                </div>
                <div className="footer__list">
                    <a href='/' className='footer__link'>Home</a>
                    <a href='https://www.omdbapi.com' className='footer__link'>API</a>
                    <a href='/' className='footer__link'>Browse</a>
                    <a href='/' className='footer__link'>GitHub</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer