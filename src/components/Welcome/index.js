import React, { Component } from 'react';
import "./styles.css";

//Pets
import Cachorro from '../../assets/Cachorro.png'
import Coelho from '../../assets/Coelho.png'
import Hamster from '../../assets/Hamster.png'
import Pata from '../../assets/Pata.png'
import Gato from '../../assets/Gato.png'

class Welcome extends Component {
    render(){
        return (   
                <div id="welcome-container">
                    <div id="titulo">
                        Melhor lugar pra fazer seu pet feliz
                    </div>

                    <div id="welcome-list-container">
                            <div id="imagem">
                                <img src={Cachorro} alt="Cachorro"/>   
                            </div>
                        
                            <div id="imagem">
                                <img  src={Gato} alt="Gato"/>
                                
                            </div>

                            <div id="imagem">
                                <img src={Hamster} alt="Hamster"/>
                               
                            </div>

                            <div id="imagem">
                                <img src={Coelho} alt="Coelho"/>
                                
                            </div>

                            <div id="imagem">
                                <img src={Pata} alt="Pata"/>
                            </div>
                    </div>
                </div>
        );
    }
}

export default Welcome;