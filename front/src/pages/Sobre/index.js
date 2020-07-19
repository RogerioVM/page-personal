import React from 'react';
import Header from '../Main/Partials/header';
import '../Main/Styles/header.css';
import './style.css'
import Footer from '../Main/Partials/footer'
import Photo from '../assets/photo.jpg'




export default function Sobre() {
    return (
        <div className="global-component">
            <Header></Header>
            <main>
             <div className="main__container center">
                    <div className="other-photo">
                        <img  src={Photo} alt=""/>
                    </div>
                    <p>
                        Rogério Vicente de Morais, 27 anos, casado e pai do Samuel.Nascido e criado em São Paulo 
                        e apaixonado por técnologia e suas inovações, ainda não tem nenhuma graduação em ensino 
                        superior, porém está sempre em busca de conhecimento.Primeiro contato com
                        programação foi em 2017 quando iniciou, por influência de uso excessivo do Excel no trabalho,
                        um curso online focado no VBA — Visual Basic Aplication — onde concretizou que programação
                        poderia ser a futura profissão.Iniciou de vez os estudos no inicio de 2020
                        começando por video aulas do youtube, onde cada vez mais foi aumentando o interesse.
                    </p>

                    <h2>Objetivos profissionais</h2>

                    <p>
                        A curto prazo,ser um programador front-end. Estudando no momento React.Cursos já realizados, fora
                        todos os bootcamps onlines, são :
                        <ul>
                            <li>Desenvolvimento Web mderno — Udemy</li>
                            <li>Lógica de programação — Curso em video</li>
                            <li>Php do zero ao profissional — B7WEB</li>
                            <li>Git e versionamento de código — Digital Innovation One</li>
                        </ul>

                    </p>

                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}