import React, { Component } from 'react';
import "./styles.css";

//Nossos Clientes 
import Tobias from '../../assets/Tobias.png'
import Bruce from '../../assets/Bruce.png'
import Perna_Longa from '../../assets/Perna-longa.png'
import Lili from '../../assets/Lili.png'

class Clientes extends Component {
    render(){
        return (   
                <div id="clientes-container">
                    <div id="titulo">
                        Clientes Felizes
                    </div>

                    <div id="clientes-list-container">
                        <div id="clientes-list">
                            '<div id="cliente">
                                <img src={Bruce} alt="Bruce" />
                                <h3> Bruce</h3>
                            </div>

                            <div id="cliente">
                                <img src={Tobias} alt="Tobias" />
                                <h3> Tobias</h3>
                            </div>

                            <div id="cliente">
                                <img src={Perna_Longa} alt="Perna Longa" />
                                <h3> Perna-Longa</h3>
                            </div>

                            <div id="cliente">
                                <img src={Lili} alt="Lili" />
                                <h3> Lili</h3>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Clientes;