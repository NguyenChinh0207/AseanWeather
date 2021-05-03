import axios from "axios";
import { Component } from "react";
import UserList from "../components/users/UserList";

interface IProps {
    match:any
}
interface IState {
    user:any,
    loading:boolean
}

class UserDetailNTC extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {			
			user: {},
            loading:false
		};
	
	}


	componentDidMount() {
	console.log("props",this.props)
    const { id } = this.props.match.params;
		axios
			.get("https://jsonplaceholder.typicode.com/users/"+id)
			.then((res) => {
				console.log("ress", res.data);
				// this.setState({users: res.data})
				this.setState((prevState) => {
					return {
						...prevState,
						user: res.data,
                        loading:true
					};
				});
			})
			.catch((err) => console.log(err));
	}


	render() {
        if (!(this.state.loading)) {
			return (
				<div>
					<h2>Loading ...</h2>
                    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>
				</div>
			);
		}
		return (
			<>
				<h2>{this.state.user.id}</h2>
				<h2>{this.state.user.name}</h2>
				<h2>{this.state.user.address.street}</h2>
			</>
		);
	}
}

export default UserDetailNTC;


