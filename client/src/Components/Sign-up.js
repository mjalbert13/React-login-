import React , {Component} from 'react';
import axios from 'axios'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange =this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        console.log("Submiting: ")
        console.log(this.state.name)

        axios.post('./user/',{
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        .then( response => {
            console.log(response)
            if(!response.data.errmsg) {
                console.log("Successful user added")
                this.setState({
                    redirectTo: '/login'
                })
            } else {
                console.log("User already exists")
            }
        })
        .catch(error => {
            console.log("error signing up")
            console.log(error)
        })
    }

render(){
    return (
        <div className = "container">
            <h1>Register new user</h1>
            <form className = "form-group">
           <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                 type="name"
                 className="form-control"
                 aria-describedby="name"
                 placeholder="John Smith"
                 value={this.state.name}
                 onChange ={this.handleChange}/>
            </div>
            <div class="form-group">
                <label for="exampleemail">Email</label>
                <input
                type="email"
                className="form-control"
                placeholder="User@me.com"
                value = {this.state.email}
                onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input 
                type="password" 
                className="form-control"
                placeholder="Password"
                value ={this.state.password}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword2">Confirm Password</label>
                <input 
                type="password"
                className="form-control"
                placeholder="Password"
                value ={this.state.confirmPassword}
                onChange={this.handleChange}/>
            </div>
            <button 
            type="submit" 
            className="btn btn-primary"
            onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    )
    }
}

export default Signup;