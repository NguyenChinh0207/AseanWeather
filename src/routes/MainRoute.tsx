import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

import HomePage from '../pages/HomePage';
import Notfound from '../pages/Notfound';
import SignIn from '../pages/SignIn';
import SignInAdmin from '../pages/SignInAdmin';


const MainRoute = () => {
    const [cart, setCart] = useState<any[]>([]);
    return (
        <>
            <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path='/search' component={HomePage} />
                    <Route path='/sign-in' component={SignIn} />
                    <Route path='/sign-in-admin' component={SignInAdmin} />
                         
                    <Route component={Notfound} />
                </Switch>
            
            <Footer />

        </>
    );
}

export default MainRoute;