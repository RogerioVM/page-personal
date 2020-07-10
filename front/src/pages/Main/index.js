import React from 'react';
import Content from './Partials/main';
import Header from './Partials/header';
import Footer from './Partials/footer';


export default function Main() {
    
    return (
        <div className='global-component'>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}

