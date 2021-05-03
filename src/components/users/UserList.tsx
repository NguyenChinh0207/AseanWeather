import { Component } from "react";
import { Link } from "react-router-dom";
interface IProps {
    users: any;
}
interface IState { }

class UserList extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            name: 'Long'
        }
        console.log('Contructor Child')
    }
    componentDidMount() {
        console.log('componentDidMount Child')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate Child')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount Child')
    }
    render() {
        console.log('render Child')

        return (
            <div>
                <h2>User List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">address</th>
                            <th scope="col">Link</th>

                        </tr>
                    </thead>
                    <tbody>
                      {
                    
                        this.props.users.map((item: any) => {
                            return(<tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.address.street}</td>
                                <td>
                                <Link to={`/users/${item.id}`}>click</Link>
                                </td>
                            </tr>);
                        })

                    }
                
                    </tbody>
                </table>




            </div>
        );

    }
}
export default UserList;