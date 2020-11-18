import React from 'react'
import '../components/ImageFluction.css'
import Image001 from '../images/image001.jpeg'


export default function ImageFluctiation(){
    return(
        <div className="container">
            <div className="imgBx">
                <img src={Image001}/>
                <img src={Image001}/>
                <img src={Image001}/>
            </div>
            <h1>Texto Aqui</h1>
            <div className="skew">
                <p>Lorem Ipsum é simplesmente um texto fictício da 
                    indústria de impressão e composição. Lorem Ipsum 
                    tem sido o texto fictício padrão da indústria 
                    desde os anos 1500, quando um impressor desconhecido 
                    pegou uma galé do tipo e embaralhou para fazer um 
                    livro de amostra de tipos.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    )
}