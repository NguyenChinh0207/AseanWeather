import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import HomePage from '../pages/HomePage';
import Notfound from '../pages/Notfound';
import BoxWeather from '../pages/BoxWeather';

const MainRoute = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path='/search' component={HomePage} />
                <Route path='/now/:city' component={BoxWeather} />
                <Route path='/daily/:city' component={BoxWeather} />
                <Route path='/favourites/:city' component={BoxWeather} />
                <Route component={Notfound} />
            </Switch>
            <Footer />

        </>
    );
}

export default MainRoute;