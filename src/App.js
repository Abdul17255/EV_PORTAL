

import './App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

//import Router from "../app/router/index"
import Router from "../src/router/index"
class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Router} />
            </BrowserRouter>
        );
    }
}

export default App;
