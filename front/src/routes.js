import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/Main';
import Sobre from './pages/Sobre';

export default function Routes () {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/Sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>
    )
}