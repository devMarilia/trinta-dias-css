import React from 'react'
import './FlipCard.css'
import Artemis from '../images/deusa-artemis.jpg'
import Noite from '../images/deusa-da-noite.jpg'
import Gaia from '../images/deusa-gaia.jpeg'
import Hestia from '../images/deusa-hestia.jpg'
import Lua from '../images/deusa-lua.jpg'
import Negra from '../images/deusa-negra.jpg'


function FlipCard() {
    return (
        <div className="container">

            <div className="cards">
                <div className="imgBox">
                     <img src={Artemis}/>
                </div>
                    <div className="details">
                        <h2>Deusa Ártemis</h2>
                        <p>Ártemis é deusa da lua, da caça, dos animais selvagens, da região selvagem,
                            do parto e da virgindade e protetora das meninas na antiga religião grega. 
                            Foi descrita como a melhor caçadora entre deuses e mortais. Arco e flechas 
                            são seus companheiros constantes. O cervo, o urso e o cipreste foram-lhe 
                            consagrados.
                        </p>
                    </div>
                </div>
            <div className="cards">
                <div className="imgBox">
                     <img src={Noite}/>
                </div>
                    <div className="details">
                        <h2>Deusa da Noite</h2>
                        <p>É a Deusa dos segredos e mistérios noturnos, rainha dos astros 
                            noturnos. Nix é cultuada por bruxas e feiticeiras, que acreditavam 
                            que ela dá fertilidade à terra para brotar ervas encantadas. Também 
                            se acreditava que Nix tem total controle sobre vida e morte, tanto 
                            dos homens como dos Deuses.
                        </p>
                    </div>
                </div>
            <div className="cards">
                <div className="imgBox">
                     <img src={Gaia}/>
                </div>
                    <div className="details">
                        <h2>Deusa Gaia</h2>
                        <p>Gaia, a mãe Terra
                            Gaia, representada pelos símbolos das frutas e grãos, foi a grande responsável pelo nascimento dos poderosos deuses da mitologia grega, possível 
                            graças a sua união com Urano, o céu.
                            Fazendo jus à sua forte figura feminina de mãe e mulher, Gaia também teve papel fundamental nas
                            diversas histórias da mitologia grega – na realidade, ela somente não aceitava a maneira como 
                            era tratada.
                        </p>
                    </div>
                </div>
            <div className="cards">
                <div className="imgBox">
                     <img src={Hestia}/>
                </div>
                    <div className="details">
                        <h2>Deusa Héstia</h2>
                        <p>Na mitologia grega, Héstia é a deusa sagrada do fogo que foi muito respeitada pelos deuses 
                        e os mortais.<br/>
                        Ela está entre os 12 deuses do Olimpo, os principais do panteão grego e 
                        que residiam ali. Muitas vezes, ela é substituída por Dionísio e na
                        mitologia romana, é chamada de Vesta.
                        </p>
                    </div>
                </div>
            <div className="cards">
                <div className="imgBox">
                     <img src={Lua}/>
                </div>
                    <div className="details">
                        <h2>Deusa Selene</h2>
                        <p>Selene não permanecia em Olimpo como os demais deuses e sim no céu 
                        onde fazia sua jornada, mas antes de começá-la se banhava no mar. 
                        É também deusa dos lunáticos e também dos que trabalham na noite 
                        (os bruxos).
                        Teve uma filha com Zeus, Pandeia, e quatro filhas com seu irmão Hélios,
                         as Horas, que representam as quatro estações do ano.
                        </p>
                    </div>
                </div>
            <div className="cards">
                <div className="imgBox">
                     <img src={Negra}/>
                </div>
                    <div className="details">
                        <h2>Deusa Themis</h2>
                        <p> Filha de Urano e Gaia, em seu histórico, tem o título de uma das esposas de Zeus (o Rico Mansur 
                        do Olimpo). Além de esposa, era também sua mentora e ajudava a tornar suas
                        decisões menos severas.
                        Têmis não tinha os olhos vendados inicialmente, era representada como uma divindade 
                        de olhar austero, mas sempre esteve junto da balança (como toda mulher, inclusive!) 
                        que simboliza o equilíbrio e a espada, como o poder.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default FlipCard
