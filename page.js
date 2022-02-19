import React from "react";
import { render } from "react-dom";
import LoginForm from "./loginForm";
import NavBar from "./Navbar";

let e = React.createElement; 

export default class Page extends React.Component { 

    render() { 

        return(
            <div className="container">
                <LoginForm />
                <NavBar />

            </div>

        );
    }


}

