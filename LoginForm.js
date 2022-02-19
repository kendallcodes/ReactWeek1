import React from "react";
import './LoginForm.css'

export default class LoginForm extends React.Component { 


        render() {
            return (
              <div className="container">
                <div className="box">
                <h3>Log In</h3>
                  <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="login-input"
                      placeholder="Username"/>
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="login-input"
                      placeholder="Password"/>
                  </div>
                <div className="button">
                    <button>Log In</button>
                </div>
                </div>
              </div>
            )}
}