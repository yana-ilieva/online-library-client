import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUsers extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }

        this.addEmployee = this.addEmployee.bind(this)
    }

    componentDidMount(){
        UserService.getUsers().then((res) => this.setState({users: res.data}));
    }

    addEmployee(){
        this.props.history.push("/users/create")
    }

    render() {
        
        return (
            <div>
                <h2 className="text-center">User list</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add user</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Phone numebr</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.users.map( user => 
                                    <tr key = {user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                    </tr>
                                )
                            }
                        </tbody>   
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUsers;