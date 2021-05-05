import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

import HomePage from '../pages/HomePage';
import Notfound from '../pages/Notfound';

import BoxWeather from '../pages/BoxWeather';

const MainRoute = () => {
    return (
        <>
            <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path='/search' component={HomePage} />
                  
                    <Route path='/now' component={BoxWeather} />   
                    <Route component={Notfound} />
                </Switch>
            
            <Footer />

        </>
    );
}

export default MainRoute;