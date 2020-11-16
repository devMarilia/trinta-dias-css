import React from 'react'
import './Testemunhos.css'
import Lia from '../imagens/perfil001.jpg'
import Power from '../imagens/perfil003.png'

function Banana() {
    return (
        <div>
            <h4>Pablo</h4>
            <h3>Um homem especial</h3>
        </div>
    )

}

function Testemunhos() {
    return (
        <div className="container"> 
            <div className="box"> 
               <div className="imgBox">
                    <img src={Lia}/>
                </div>
                <p>
                Agora, vivo num planeta dolorido, transparente como o gelo. É como se houvesse 
                aprendido tudo de uma vez, numa questão de segundos. Minhas amigas e colegas 
                tornaram-se mulheres lentamente. Eu envelheci em instantes e agora tudo está 
                embotado e plano. Sei que não há nada escondido; se houvesse, eu veria.</p>
                <h4>Frida Kahlo<br/><span>Artista</span></h4>
            </div>
            <div className="box"> 
               <div className="imgBox">
                    <img src={Power}/>
                </div>
                <p>
                Feminismo, essa é a essa causa que devemos lutar, pois queremos ter os mesmos direitos, ter as mesmas oportunidades independente de idade, origem, raça ou crença. Não é porque somos mulheres, mulheres sim, que não merecemos reconhecimento..</p>
                <h4>{Banana()}<br/><span>Feminismo</span></h4>
            </div>
        </div>
    )
}

export default Testemunhos
