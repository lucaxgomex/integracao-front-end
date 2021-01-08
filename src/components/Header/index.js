import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "./styles.css";
import Logo from '../../assets/logo.png'

class Header extends Component {
    render(){
        return (   
                <div id="header">
                    <div id="logo-container">
                        <img src={Logo}  className="logo" alt="Logo"></img>
                        <h2>Pet {"&"} Gatô</h2>
                    </div>

                    <div id="links">
                        <ul>
                            <li ><Link to='/' className="link">Home</Link></li>
                            <li ><Link to='/sobre' className="link">Sobre</Link></li>
                            <li ><Link to='/servicos' className="link">Serviços</Link></li>
                            <li ><Link to='/contato' className="link">Contato</Link></li>
                            
                        </ul>
                    </div>
                </div>
        );
    }
}

//<li><Link to='/admin'>Painel do admin</Link></li>
//<li><Link to='/usuario'>Painel do usuário</Link></li>

export default Header;