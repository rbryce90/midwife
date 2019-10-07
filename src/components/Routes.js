import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home'
import About from './about/About'
import Services from './services/Services'
import Classes from './classes/Classes'
import Contact from './contact/Contact'
import OneClass from './classes/OneClass'

export class Routes extends Component {
    render() {
        return (
            <div className='Routes'>
                
                <Route path="/class/:class_id" component={OneClass} />
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
