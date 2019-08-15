import React, { Component } from "react";
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import logo from "./logo.svg";
import Signup from './Components/Sign-up';
import Loggin from './Components/logIn-form'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import "./App.css";

class App extends Component {
  constructor(){
    super() 
    this.state ={
      loggedIn: false,
      name: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser =this.updateUser.bind(this) 
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log("getting user")
      console.log(response.data)
      if(response.data.user) {
        console.log("there is a user session saved")
        this.setState({
          loggedIn: true,
          name: response.data.user.name
        })
      } else {
        console.log("no user yet")
        this.setState({
          loggedIn: false,
          name: null
        })
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn && <p>Join the party, {this.state.name}</p>}
        <Route exact path="/" component={Home} />
        <Route path="/login" render={() => <Loggin updateUser={this.updateUser}/>}/>
        <Route path="/signup" render ={() => <Signup/>}/>
      </div>
    );
  }
}

export default App;
