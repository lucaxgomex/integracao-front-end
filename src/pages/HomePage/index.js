import React from 'react'; 
import Header from '../../components/Header'
import Clientes from '../../components/Clientes'
import Produtos from '../../components/Produtos'
import Welcome from '../../components/Welcome'
import './styles.css'

function HomePage() {
    return(
        <div id="home-container">
            <Header />
            <Welcome /> 
            <Produtos />
            <Clientes />

        </div>
    );
}

export default HomePage;
