import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home'
import About from './about/About'
import Services from './services/Services'
import Classes from './classes/Classes'
import Contact from './contact/Contact'

export class Routes extends Component {
    render() {
        return (
            <div className='Routes'>
                <Route path="/about" component={About} />
                <Route path="/classes" component={Classes} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
            </div>
        )
    }
}

export default Routes
