import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
    this.formatDate = this.formatDate.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) =>
      this.setState({ user: res.data })
    );
  }

  formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString("en-US", options);
  }
  editUser(id) {
    this.props.history.push(`/users/edit/${id}`);
  }
  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.props.history.push("/users");
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">User details</h3>
          <div className="card-body">
            <div className="row">
              <table className="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td>First name:</td>
                    <td>{this.state.user.firstName}</td>
                  </tr>
                  <tr>
                    <td>Last name:</td>
                    <td>{this.state.user.lastName}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{this.state.user.email}</td>
                  </tr>
                  <tr>
                    <td>Phone number:</td>
                    <td>{this.state.user.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>Registration date:</td>
                    <td>{this.formatDate(this.state.user.registrationDate)}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <button
                  onClick={() => this.editUser(this.state.user.id)}
                  className="btn btn-info"
                >
                  Edit
                </button>
                <button
                  onClick={() => this.deleteUser(this.state.user.id)}
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUser;
