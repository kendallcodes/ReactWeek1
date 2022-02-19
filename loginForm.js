import React from "react";

let e = React.createElement; 

export default class LoginForm extends React.Component { 

    render() {

        return (
        <form>
       <div class="mb-3">
           <label>Username</label>
           <input type="text" placeholder="Enter Username"></input>
           <label>Password</label>
        </div>
        <div class="mb-3">
           <input type="password" placeholder="Enter Password"></input>
       </div>
            <button type="submit">Login</button>
       </form>
        );
    }


}