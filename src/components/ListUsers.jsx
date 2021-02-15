import React, { Component } from "react";
import UserService from "../services/UserService";

class ListUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.viewUser = this.viewUser.bind(this);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => this.setState({ users: res.data }));
  }

  addUser() {
    this.props.history.push("/users/add/");
  }

  viewUser(id) {
    this.props.history.push(`/users/view/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">User list</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addUser}>
            Add user
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <button
                      onClick={() => this.viewUser(user.id)}
                      className="btn btn-info"
                      style={{ marginLeft: "10px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUsers;
