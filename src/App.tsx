import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainRoute from "./routes/MainRoute";
import AdminDashboard from "./pages/AdminDashboard";
import LoginAdmin from "./pages/LoginAdmin";
import HomePage from "./pages/HomePage";


interface IProps { }
interface IState { }

class App extends Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path='/sign-in' exact component={LoginAdmin} /> 
					<Route path="/dashboard" exact  component={AdminDashboard} />
					<Route path="/" render={() => <MainRoute />} />
				</Switch>
			</Router>
		);
	}
}

export default App;