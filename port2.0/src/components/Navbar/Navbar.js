import React, { Component } from 'react';
import { menuItems } from "./MenuItem";
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="navBarItems">
                <h1 className="navbar-logo">Portfolio</h1> 
                {/* <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas-fa-times' : 'fas fa-bars'}></i>
                    
                </div> */}
                <ul>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}> 
                                {item.title}
                                </a>
                        </li> 
                        )
                    })
                    }
                </ul>
            
            </nav>
        )
    }
}

export default Navbar;