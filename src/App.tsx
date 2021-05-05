import { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainRoute from "./routes/MainRoute";
import SignIn from './pages/SignIn';
import SignInAdmin from './pages/SignInAdmin';
import AuthFB from './pages/AuthFacebook';

interface IProps { }
interface IState { }

class App extends Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>			
					<Route path='/sign-in' component={SignIn} />
					{/* <Route path='/auth/facebook' component={AuthFB} /> */}
                    <Route path='/sign-in-admin' component={SignInAdmin} />
					<Route path="/" render={() => <MainRoute />} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;