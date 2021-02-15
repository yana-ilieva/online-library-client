import React, { Component } from "react";
import UserService from "../services/UserService";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id) {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
        });
      });
    } else {
      return;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
    };

    if (this.state.id) {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push(`/users/view/${this.state.id}`);
      });
    } else {
      UserService.saveUser(user).then((res) => {
        this.props.history.push("/users");
      });
    }
  };

  cancel = () => {
    this.props.history.push(`/users/view/${this.state.id}`);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    let pageTitle;
    if (this.state.id) {
      pageTitle = <h3 className="text-center">Edit user</h3>;
    } else {
      pageTitle = <h3 className="text-center">Add user</h3>;
    }

    return (
      <div>
        <div className="container">
          <div className="card col-md-6 offset-md-3">
            {pageTitle}
            <div className="card-body">
              <form>
                <label>First name:</label>
                <div className="form-group">
                  <input
                    name="firstName"
                    value={this.state.firstName}
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>

                <label>Last name:</label>
                <div className="form-group">
                  <input
                    name="lastName"
                    value={this.state.lastName}
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>

                <label>Email:</label>
                <div className="form-group">
                  <input
                    name="email"
                    value={this.state.email}
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>

                <label>Phone number:</label>
                <div className="form-group">
                  <input
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>

                <button className="btn btn-success" onClick={this.handleSubmit}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
