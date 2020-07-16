import React, { Component } from 'react';

class SignIn extends Component {
    render(){
        return(
            <div className="container">
            <form onSubmit={this.onSubmitHandle} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChangeHandle}/>
            </div>
            <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.onChangeHandle}/>
            </div>
            <div className="input-field">
            <button className="btn  waves-effect waves-light light-blue darken-3 z-depth-0">Login</button>
            </div>
            </form>
            </div>
        )
    }
}

export default SignIn;