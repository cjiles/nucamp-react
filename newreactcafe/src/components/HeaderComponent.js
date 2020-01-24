import React, {Component} from 'react';
import {Nav, Navbar, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
       
    }
    
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return(
            <React.Fragment>
                 <Navbar light sticky="top" expand="md">
                    <div className="container">
                        <div className="col-6 col-md-4">
                            <h2>React Cafe</h2>
                        </div>
                        <div className="col-4 col-md-4">
                            <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home"> Home </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/menu"> Menu </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/locations"> Locations </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/products"> Products </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </div>   
                    </Navbar> 
            </React.Fragment>
        );
    }
}

export default Header;