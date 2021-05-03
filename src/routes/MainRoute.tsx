import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

import HomePage from '../pages/HomePage';
import Notfound from '../pages/Notfound';
import SignIn from '../pages/SignIn';

import UserListPage from '../pages/UserListPage';
const MainRoute = () => {
    const [cart, setCart] = useState<any[]>([]);
    return (
        <>
            <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path='/sign-in' component={SignIn} />
                    <Route path="/users" exact component={UserListPage} />           
                    <Route component={Notfound} />
                </Switch>

            <Footer />

        </>
    );
}

export default MainRoute;