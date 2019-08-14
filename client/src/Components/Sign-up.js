import React , {Component} from 'react';

class Signup extends Component {


render(){
    return (
        <div className = "container">
            <h1>Register new user</h1>
            <form className = "form-group">
           <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="name" className="form-control"  aria-describedby="name" placeholder="John Smith"/>
            </div>
            <div class="form-group">
                <label for="exampleemail">Email</label>
                <input type="email" className="form-control"  placeholder="User@me.com"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control"  placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword2">Password</label>
                <input type="password" className="form-control"  placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    }
}

export default Signup;