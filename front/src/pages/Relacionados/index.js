import React from 'react';
import Header from '../Main/Partials/header';
import Footer from '../Main/Partials/footer';
import Nlw from '../../assets/download.png';
import Ecoleta from '../../assets/ecoleta.png';
import './relacionados.css';




export default function Relacionados() {
    return (
        <div className="global-component">
            <Header></Header>
            <main>

                <div className="main__container center">
                    <div className="main__title">
                        <h2>Next Level Week — 
                            O que esperar desse mais novo evento da Rocketseat?
                        </h2>
                            <small>
                                Entre os dias 03 e 07 de agosto a Rocketseat nos presenteia com mais um de seus grandes eventos.
                                Nesta segunda edição da NWL, o que podemos espear de novidades e como tirar o máximo de vantagens?
                            </small>
                    </div>

                    <div className="nlw">

                        <img src={Nlw} alt="Nlw"/>

                        <legend>Segunda edição do NWL promete </legend>
                    </div>
                    
                    <p>
                    A Rocketseat, uma das maiores plataformas formadores de desenvolvedores do Brasil, fará npvamente
                    outro grande evento totalmente online em que reúne centenas de estudantes em todo o país: a NWL (Next Level Week). Como o próprio
                    nome diz, o conceito principal desse evento é levar aqueles que estão em um certo nível, ao próximo nivel. Uma versão
                    inovada das famosas semanas Omnistacks,porém com uma outra proposta de conteúdo.
                    </p>
                    <p>
                    Atualmente a busca no mercado por bons profissionais está acirrada, mas não por falta de canditos.Liderados por
                    Diego Fernandez com uma equipe de apoio fantástica, o principal comprometimento que a plataformma oferece 
                    gratuitamente é contéudo suficiente garantir duas coisas: Que não nos arrependeremos da métodologia e didatica
                    passada, e que para aqueles que ainda não são alunos da plataforma, ficarem comm um gosto de quero mais.Claro,
                    obviamente não sendo um tempo suficiente de consumirmos todo potencial deles, esses eventos que nos oferecem 
                    é um grande cartão de visitas para queremos fazer parte da plataforma, sendo ja um desenvolvedor experiente ou não.
                    
                    </p>

                    <div className="nlw">

                        <img className='eco' src={Ecoleta} alt="Ecoleta"/>

                        <legend>Ecoleta - Projeto feito para os alunos do Mayk Brito na primeira edição</legend>
                    </div>

                    <p>
                    Mas, nesta segunda edição está sendo prometidas grandes novidades para quem se inscrever e participar.E a expectativa que 
                    se pode criar é até mesmo de um futuro outro evento, outra forma de ensino ou até mesmo alguma novidade que vem surgindo
                    no mundo da programação e ganhando força cada vez mais. Se pudesse chutar alguma, diria que podem começar a introduzis novas linguagens no mercado — como Deno por exemplo — ou até mesmo novos framework — Spring Rest seria um bom palpite.
                    </p>

                        
                    <p>
                        Realmente não da para saber o que pode ir, mais como sempre podemos esperar grandes novidades e muito conteúdo de qualidade
                        que realmente sempre nos levam a um outro nível.Na primeira edição, minhas aulas foram com o professor Mayk Brito, onde foi
                        conseguimos absorver grandes técnicas que até então, ao que pareceu notável, foram novidades para muitos da comunidade.A e, por 
                        sinal, uma grande comunidade. Centenas de pessoas com muita disposição interagindo e aprendendo juntos.

                    </p>

                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}