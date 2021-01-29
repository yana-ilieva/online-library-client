import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUser extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        }

        this.onChange = this.onChange.bind(this)
        this.saveUser = this.saveUser.bind(this)
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, phoneNumber: this.state.phoneNumber}
        console.log('User => ' + JSON.stringify(user))

        UserService.saveUser(user).then(res => {
            this.props.history.push('/users')
        });
    }

    cancel(){
        this.props.history.push('/users')
    }

    onChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Add user</h3>
                        <div className="card-body">
                            <form>
                                <label>First name:</label>
                                <div className="form-group">
                                    <input name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange}/>
                                </div>

                                <label>Last name:</label>
                                <div className="form-group">
                                    <input name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChange}/>
                                </div>

                                <label>Email:</label>
                                <div className="form-group">
                                    <input name="email" value={this.state.email} className="form-control" onChange={this.onChange}/>
                                </div>

                                <label>Phone number:</label>
                                <div className="form-group">
                                    <input name="phoneNumber" value={this.state.phoneNumber} className="form-control" onChange={this.onChange}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CreateUser;