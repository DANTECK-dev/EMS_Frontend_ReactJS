import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/employees" className="nav-link px-2 text-secondary">Home Page</a></li>
                        <li><a href="/add-employee" className="nav-link px-2 text-white">Add Employee Page</a></li>
                        </ul>

                    </div>
                </div>
            </header>
        );
    }

}

export default HeaderComponent;