import React from 'react';
import Header from '../Main/Partials/header';
import { Link } from 'react-router-dom';
import Footer from '../Main/Partials/footer'
import Photo from '../assets/photo.jpg';

import '../../global.css';
import './sobre.css';




export default function Sobre() {
    return (
        <div className="global-component">
            <Header></Header>
            <main>
            <div><p>Autalizado em 04/07</p></div>

             <div className="main__container center">
                    <div className="other-page-photo">
                        <img  src={Photo} alt=""/>
                    </div>
                    <p>
                        Rogério Vicente de Morais, 27 anos, casado e pai do Samuel. Nascido e criado em São Paulo 
                        e apaixonado por tecnologia e suas inovações, ainda não tem nenhuma graduação em ensino 
                        superior, porém está sempre em busca de conhecimento. Primeiro contato com
                        programação foi em 2017 quando iniciou, por influência de uso excessivo do Excel no trabalho,
                        um curso online focado no VBA — Visual Basic Aplication — onde concretizou que programação
                        poderia ser a futura profissão. Iniciou de vez os estudos no inicio de 2020
                        começando por video aulas do youtube, onde cada vez mais foi aumentando o interesse.
                    </p>

                    <h2>Objetivos profissionais</h2>

                    <p>
                        A curto prazo, ser um programador front-end. Estudando no momento React. Cursos já realizados, sem mencionar 
                        os bootcamps participados e que está completando são :
                        <ul>
                            <li>Desenvolvimento Web mderno —  
                                <Link 
                                    onClick={() => window.open('https://www.udemy.com/')} 
                                    to="/"> Udemy 
                                </Link> 
                            </li>

                            <li>Lógica de programação — 
                                <Link 
                                    onClick={() => window.open('https://www.youtube.com/user/cursosemvideo')} 
                                    to="/"> Curso em video 
                                </Link>
                            </li>

                            <li>Php do zero ao profissional — 
                                <Link 
                                    onClick={() => window.open('https://alunos.b7web.com.br/explorar')} 
                                    to="/"> B7WEB
                                </Link>
                            </li>

                            <li>Git e versionamento de código — 
                                <Link 
                                    onClick={() => window.open('https://alunos.b7web.com.br/explorar')} 
                                    to="/"> Digital Innovation One
                                </Link>
                            </li>
                        </ul>

                    </p>

                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}