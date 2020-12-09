import React from 'react'; 
import Header from '../../components/Header'
import Clientes from '../../components/Clientes'
import './styles.css'

function HomePage() {
    return(
        <div>
            <Header />
            <h1>HomePage</h1>
            <Clientes />

        </div>
    );
}

export default HomePage;
