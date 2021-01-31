import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUsers extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this)
        this.editUser = this.editUser.bind(this)
        this.formatDate = this.formatDate.bind(this)
    }

    componentDidMount(){
        UserService.getUsers().then((res) => this.setState({users: res.data}));
    }

    editUser(id){
        this.props.history.push(`/users/add/${id}`)
    }

    addUser(){
        this.props.history.push("/users/add/")
    }

    formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString('en-US',options);
    }

    render() {
        
        return (
            <div>
                <h2 className="text-center">User list</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}>Add user</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Registration date</th>
                                <th>Actions</th>
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
                                        <td>{this.formatDate(user.registrationDate)}</td>
                                        <td>
                                            <button onClick = {() => this.editUser(user.id)} className="btn btn-info">Edit</button>
                                        </td>
                                    </tr>
                                )}
                        </tbody>   
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUsers;