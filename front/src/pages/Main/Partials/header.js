import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';

export default function Header() {

    return (
        <header>
            <div className='header__container'>
                <div className="header__title">
                    <h1>Rogerio Morais</h1>
                </div>
                <div className="header__menu">
                    <nav>
                        <ul className='header__menu-list'>
                            <li><Link to='/Sobre'>Sobre</Link></li>
                            <li><Link to='/'>Topicos</Link></li>
                            <li><Link to='/'>Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}