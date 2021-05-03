import axios from "axios";
import { Component } from "react";
import UserList from "../components/users/UserList";

interface IProps {}
interface IState {
	name: string;
	users: any;
}

class UserListPage extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			name: "Long",
			users: [],
		};
		console.log("Contructor");
	}

	componentDidMount() {
		console.log("componentDidMount");
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				console.log("ress", res.data);
				// this.setState({users: res.data})
				this.setState((prevState) => {
					return {
						...prevState,
						users: res.data,
					};
				});
			})
			.catch((err) => console.log(err));
	}

	// axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

	// componentDidUpdate(){
	//     console.log('componentDidUpdate')
	// }
	// shouldComponentUpdate(prevProps: any, prevState: any){ // ?
	//     console.log(prevProps, prevState)
	//     return true;
	// }
	// componentWillUnmount(){
	//     console.log('componentWillUnmount')
	// }

	changeName = () => {
		this.setState({ name: "Long" });
	};

	render() {
		// this.setState({name: 'Chinh'});
		console.log("render");

		if (!(this.state.users.length > 0)) {
			return (
				<div>
					<h2>Loading ...</h2>
                    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>
				</div>
			);
		}
		return (
			<>
				<h3>User List {this.state.name}</h3>
				<h2>{this.state.users[0].address.street}</h2>
				<UserList users={this.state.users} />
				<button onClick={this.changeName}>Chang name</button>
			</>
		);
	}
}

export default UserListPage;

// mounting

// updatting

// unmounting

// ve nha lam user detail giong product detail
