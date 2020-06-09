import React from 'react';
import axios from "axios";
import {
  // BrowserRouter as Router ,
  Link,
  // Route 
} from "react-router-dom";
import { userService } from '../_services/user.service';



class Login extends React.Component {
  constructor(props) {
    super(props);

    userService.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const {
      username,
      password,
      // returnUrl 
    } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });
    userService.login(username, password)
      .then(
        user => {
          const { from } = this.props.location.state || { from: { pathname: "/Home" } };
          this.props.history.push(from);
        },
        // error => this.setState({ error, loading: false })
      );
  }


  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/login";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    // let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ login: response.data }));
  };
  register() {
    window.location.href = "./Register";
  }


  render() {
    const {
      username,
      password,
      submitted,
      loading,
      // error 
    } = this.state;
    return (
      <div className="container">
        <div className="col-sm-4 offset-sm-4"></div>
        <ul className="header" >
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Teacher">Teacher</Link>
          </li>
          <li>
            <Link to="/Student">Student</Link>
          </li>
          <li>
            <Link to="/Parent">Parent</Link>
          </li>
          <li>
            <Link to="/Login">Log Off</Link>
          </li>
        </ul>
        <div className="container ">
          <div className="row">
            <div className="col-sm-4 offset-sm-4">
              <h2 className="text-center">Home</h2>
              <h6 className="text-center">Welcome to the At Home Learning  Portal</h6>
              <hr></hr>
              <p className="text-center">Enter your login credentials below:</p>

              <div className="form-group-row" >

                <div className="form-group row">
                  <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group-row' + (submitted && !username ? ' has-error' : '')}>
                      {/* <label htmlFor="username">Username</label> */}
                      <input type="text" className="form-control" name="username" placeholder="username" value={username} onChange={this.handleChange} />
                      {submitted && !username &&
                        <div className="help-block">Username is required</div>
                      }
                    </div>
                    <div className={'form-group-row' + (submitted && !password ? ' has-error' : '')}>
                      {/* <label htmlFor="password">Password</label> */}
                      <input type="password" className="form-control" name="password" placeholder="password" value={password} onChange={this.handleChange} />
                      {submitted && !password &&
                        <div className="help-block">Password is required</div>
                      }
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary" disabled={loading}>Login</button>
                      <button className="btn btn-secondary" onClick={this.register}>Register</button>

                    </div>
                    {/* {error &&
                      <div className={'alert alert-danger'}>{error}</div>
                    } */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Login;