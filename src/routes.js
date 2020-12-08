import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from  './pages/HomePage';
import Contatos from './pages/Contatos';
import Sobre from './pages/Sobre';
import Serviços from './pages/Serviços';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/Contatos'  component={Contatos}/>
                <Route path='/Sobre'  component={Sobre}/>
                <Route path='/Serviços' component={Serviços}/>
            </Switch>
        </BrowserRouter>
    )
};
