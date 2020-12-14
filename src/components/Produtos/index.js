import React, { Component } from 'react';
import "./styles.css";

//Nossos Produtos 
import Comedouro from '../../assets/Comedouro.png'
import Coleira from '../../assets/Coleira.png'
import Caixa_trasporte from '../../assets/Caixa-transporte.png'
import Right from '../../assets/right.png'
import Left from '../../assets/left.png'


class Produtos extends Component {
    render(){
        return (   
                <div id="produtos-container">
                    <div id="titulo">
                       Produtos
                    </div>

                    <div id="produtos-list-container">
                            <div id="pass-left">
                                <img src={Left} />   
                            </div>
                        
                            <div id="produto">
                                <img src={Coleira} />
                                <h3> Coleira</h3>
                            </div>

                            <div id="produto">
                                <img src={Comedouro} />
                                <h3> Comedouro</h3>
                            </div>

                            <div id="produto">
                                <img src={Caixa_trasporte} />
                                <h3>Caixa de <br/> Transporte</h3>
                            </div>

                            <div id="pass-right">
                                <img src={Right} />
                            </div>

                    </div>
                </div>
        );
    }
}

export default Produtos;