import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainRoute from "./routes/MainRoute";

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
					<Route path="/" render={() => <MainRoute />} />
				</Switch>
			</Router>
		);
	}
}

export default App;