import React from 'react';
import Content from './Partials/main';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



export default function Main() {
    
    return (
        <div className='global-component'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

