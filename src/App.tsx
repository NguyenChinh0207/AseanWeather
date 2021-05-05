import { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainRoute from "./routes/MainRoute";

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
					<Route path="/" render={() => <MainRoute />} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;