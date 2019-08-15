import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super()
        this.state ={
            email: "",
            password: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [this.target.name]:this.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("Handle login submit")

        axios.post('/user/login',{
            email:this.state.email,
            password: this.state.password
        })
        .then(response => {
            console.log("Login response")
            console.log(response)
            if(response.status=== 200) {
                this.props.updateUser({
                    loggedIn: true,
                    name: response.data.name
                })
                this.setState({
                    redirectTo: '/'
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        if(this.state.redirectTo){
            return <Redirect to={{pathname: this.state.redirectTo}} />
        } else{
            return (
                <div className = "container">
                    <h1>Login</h1>
                    <form className = "form-group">
                        <label className="form-label">Email</label>
                        <input 
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder =" your email here"
                        value = {this.state.email}
                        onChange = {this.handleChange}
                        />
                        <label className="form-label">Password</label>
                        <input 
                        className = "form-input"
                        type ="password"
                        name = "password"
                        value ={this.state.password}
                        onChange = {this.handleChange}
                        />
                        <button className ="btn btn-primary" type ="submit" onClick ={this.handleSubmit}>Login</button>
                    </form>
                </div>
            )
        }
    }
}

export default Login;