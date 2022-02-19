import React, {Component} from "react";
import { MenuItems } from "./MenuItems"; 
import './NavBar.css'

//loops over array Menu Items. Adds them 
class Navbar extends Component { 

    state = { clicked: false }

    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        return (
            <nav className="NavBarItems">
                <h1>Showcase App</h1>
               
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  

                    {MenuItems.map((item, index) => { 
                        return (
                                <li key={index}>
                                    <a className="{item.cName}" href="{item.url}">
                                        {item.title}
                                    </a>
                                </li>
                        )
                    })} 
                </ul>
            </nav>
        );
    }
}

export default Navbar