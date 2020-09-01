import React from 'react';
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import Foto from '../../assets/photo.jpg';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



export default function Main() {
    
    return (
        <div className='global-component'>
        <Header/>
            <main>
                    <div><p>Autalizado em 04/07</p></div>
                    <div className="main__container">

                        <div className='main__container_social-medias'>
                            <div className="main__container-img">
                                <img src={Foto} alt="foto"/>
                            </div>
                            <div className="links">

                            <Link to='/' onClick={() => window.open('https://github.com/RogerioVM')}><FaGithub  size={35}></FaGithub></Link>
                            <Link to='/' onClick={() => window.open('https://www.instagram.com/rogeriovicente92/?hl=pt-br')}><FaInstagram size={35}></FaInstagram></Link>
                            <Link to='/' onClick={() => window.open('https://www.linkedin.com/in/rogerio-morais-1b20411a7/')}><FaLinkedin size={35}></FaLinkedin></Link>
                            <Link to='/'><FaWhatsapp size={35}></FaWhatsapp></Link>

                            </div>
                        </div>

                        <div className="main__title">
                            <h2>Primeiros seis meses de estudos</h2>
                                <p className='sub'>Com um aumento significativo no interesse da função, coloquei como meta principal me tornar um desenvolvedor.Mas, em meio a tanta informação e conteúdo, como saber quais passos e o quão grande está sendo o progresso? Neste primeiro post venho descrever meus desafios, os progressos e dúvidas no primeiro semestre de estudos em programação.
                                </p>
                        </div>
                        <p>
                            Completando meus primeiros seis meses de estudos,
                            percebo que a caminhada é maior do que parece ser. Talvez para quem começa a ler
                            esse post — sempre quis dizer essa frase  —
                            possa parecer que são palavras de um futuro desistente. Errado! Tentarei, com simplicidade e objetividade, descrever um pouco de como tem sido esse novo desafio.
                        </p>
                        <p>
                            Ainda não sei dizer, claro, se há um tempo certo a estar apto a ser um programador.Isso depende
                            de uma série de fatores que jamais conseguirei menciona-los.Porém, meu desenvolvimento é
                            similar a uma gangorra. Sobe, desce, às vezes acho que estou em cima, e outrora parece que vejo tudo
                            de baixo. Ao mergulhar nesse objetivo, vejo que muitos dos programadores hoje bem sucedidos tiveram a mesma
                            dificuldade.Óbvio, não é incomum encontrarmos dificuldades em qualquer ramo da vida e, como em muitas outras áreas,
                            muitos acabam desistindo.Respeito a decisão e opinião de cada um, mas assim como em outras situações na minha vida, costumo ser meio teimoso — e encaro isso para muitos casos como uma grande vantagem.
                        </p>

                        <h2  className="main__titles-secondary">Primeiros passos</h2>

                        <p>
                            Antes de tudo, procurei entender o mundo da programação e como funcionam as funções e os caminhos para dar os primeiros passos.Então, coloquei como meta de curto prazo ser um desenvolvedor front-end.Comecei então pelos três mosqueteiros do desenvolvimento front: HTML,CSS e Javascript.Sim claro, passei pelo básico de lógica de programação, porém não tive muitas dificuldades por já estar habituado com o VBA para Excel (que não deixa de ser uma programação).No Javascript, técnologia pela qual me encantei logo de cara, até que consegui dominar os conceitos básicos rapidamente.Porém, é complicado, pois se me questionarem em qual nível me encontro atualmente, não saberei responder.Claro que até para essas linguagens consideradas as básicas do front-end, sou consciênte que preciso estar sempre me atualizando e melhorando.

                        </p>

                        <h2  className="main__titles-secondary">Progredindo</h2>

                        <p>
                        A fim de impulssionar meus conhecimentos de Javascript, decidi adicionar algo de impacto na linguagem. Algo que ao mesmo tempo sendo uma novidade, fosse também uma forma de ajudar no entendimento de Javascript. Foi então que, com dois meses de estudos, me inscrevi na semana Omnistack da <Link onClick={() => window.open('https://rocketseat.com.br/')}>Rocketseat</Link>,evento em que faríamos um projeto do zero com Node, React e React Native. Resultado: também me apaixonei por essa biblioteca — inclusive resolvi subir esse pequeno projeto utilizando o React para fins de prática. Óbvio que algumas partes estavam avançadas para mim, mas mesmo com algumas dificuldades consegui concluir o projeto e aprendi muito com o Diego Fernandez (CTO e pofessor no evento).Estou praticando e estudando dia após dia essa biblioteca, e pretendo me especializar e usá-la como uma espécie de cartão de visitas no front-end.
                        </p>

                        <h2  className="main__titles-secondary">Mudando para crescer mais</h2>

                        <p>
                            Ao passar do tempo e estudando em média 3hs por dia, percebi que somente o front-end estava me limitando ao acompanhamento dos procedimentos tornando inevitável a necessidade de conhecimentos, ainda que básicos, no back-end. Já tinha tido a experiência da semana Omnistack com o Node, o que me motivou a estudar mais e aprender o básico deste interpretador.Porém, me indicaram um curso denominado <Link onClick={() => window.open('https://b7web.com.br/php/')}>PHP do zero ao profissional</Link>, e resolvi fazê-lo com o intuito de me especializar em uma linguagem do back-end, e também após muita pesquisa constatei que o curso nos passa desde os principios básicos até ao avançado de desenvolvimento como um todo — ótimo curso por sinal. No momento React e PHP são meu foco para acrescentar e tentar de inicio meu passaporte rumo ao primeiro emprego.Me identifiquei com o curso, acrescentei muito mais conhecimento e ao começar com o PHP, realmente foi quando percebi que não é apenas momento, não é só uma empolgação momentânea, eu realmente tenho a paciência e disposição para aprender a programar.O PHP me parece um tanto que amigável, apesar de uma sintaxe totalmente diferente do que até então eu estava mais acostumado.
                            
                        </p>

                        <h2  className="main__titles-secondary">A dúvida nossa de cada dia</h2>

                        <p>
                            É natural que, ingressando em qualquer novidade na vida, tenhamos dúvidas e questões ainda não muito claras em nossas mentes. No meu caso, acredito que não diferente de muitos, o que mais deixa um ponto de interrogação é: Afinal, não tendo um diploma, quando posso realmente dizer se sou ou não um programador? Preciso ter inúmeros projetos no github, de autoria própria e que revolucionem? Bom, por mais que existam conteúdos para nos direcionar e dar dicas sobre dúvidas
                            como essas, realmente me pergunto quando ou se já posso me chamar de desenvolvedor. O tão esperado emprego na área serviria como chave para confirmação e passagem direta para a especialização, mas com a concorrência grande e ainda a pouca ( ou talvez nenhuma ) experiência me coloquem em desvantagem.
                            Outra grande dúvida que me deixa um tanto que curioso é a escolha das linguagens para eu aprender.Com tanto conteúdo e tanta informação de fácil acesso, fica complicado para alguém transbordando de entusiasmo e disposição escolher a stack certa.Óbviamente sou ciente de que nem o mais renomado desenvolvedor do mundo, com anos de experiência, será um expert em todas as linguagens que existem.Impossível. Por isso que eu tento focar, focar e focar nas que mais me identifico e nas que mais consigo absorver os conceitos.Percebo certos preconceitos entre uma linguagem e outra.Algumas já estão, segundo a opinião de muitos, com os dias contados.É dificil saber, pois as inovações técnologicas crescem num ritmo aluscinante.Com toda a certeza acredito que temos que estar em constante evolução e atualização, mas o que mais tento é manter meu foco nas que estou estudando e ter ao menos uma ou duas, ou o suficiente para me especializar e ingressar no mercado.  
                        </p>

                        <h2  className="main__titles-secondary">Conclusão</h2>

                        <p>
                            Nos meus seis meses de estudos, com poucos e básicos projetos para exercitar meus conhecimentos e colocando em prática meus aprendizados, hoje sei que não é impossível conseguir ser um desenvoledor web, desde que o foco e a força de vontade esteja ao lado de muita  paciência e disciplina, misturado com uma boa xícara de café e um computador para começar.Se vou conseguir? É difícil garantir.Só o que é certo garantir é a vontade de aprender e crescer, pois com as ferramentas em mãos, vou fazendo a minha parte. 
                        </p>
                        
                    </div>
                </main>

            <Footer/>
        </div>
    );
}

