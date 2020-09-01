import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './style.css';


export default function Header() {

    return (
        <header>
            <div className='header__container'>
                <div>
                    <img className='logo' src={Logo} alt='Logo do app'/>
                </div>
                <div className="header__menu">
                    <nav>
                        <ul className='header__menu-list'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Sobre'>Sobre</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}