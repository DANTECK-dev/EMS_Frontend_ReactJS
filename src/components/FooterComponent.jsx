import React, { Component } from 'react';


class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <footer className="footer mt-auto bg-dark py-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/employees" className="nav-link px-2 text-white">Home Page</a></li>
                    <li className="nav-item"><a href="/add-employee" className="nav-link px-2 text-white">Add Employee Page</a></li>
                </ul>
                <p className="text-center text-white">All Rights Reserved © 2025 DanTeck-Dev</p>
            </footer>
        );
    }

}

FooterComponent.propTypes = {

};

export default FooterComponent;