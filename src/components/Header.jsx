import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/">Home</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <NavLink exact to="/users" className="nav-link" activeClassName="nav-link active">Users</NavLink>
                                <NavLink exact to="/books" className="nav-link" activeClassName="nav-link active">Books</NavLink>
                                <NavLink exact to="/rented" className="nav-link" activeClassName="nav-link active">Rent records</NavLink>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;