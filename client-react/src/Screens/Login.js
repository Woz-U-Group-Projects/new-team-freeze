import React from 'react';
import axios from "axios";
import {
  BrowserRouter as Router 
  //Link
  // Route 
} from "react-router-dom";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: [] };
    this.taskName = React.createRef();
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


  render() {

    return (

      <div className="container">
        <Router>
        <ul className="header" >
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          {/* <li>
            <Link to="/Login">Login</Link>
          </li> */}
          {/* <li>
            <Link to="/Registration">Registration</Link>
          </li> */}
          {/* <li>
            <Link to="/">Log Off</Link>
          </li> */}
        </ul>
        </Router>

        {/* <div className="center">
            if (!this.props.token || this.props.token === "") {

              <div>
                <div style={{ color: "red" }}>{(this.props.error ? this.props.error : '')}</div>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" onChange={this.props.onUsernameChange} />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" onChange={this.props.onPasswordChange} />
                </div>
                <div>
                  <button onClick={this.props.onLogin}>Submit</button>
                </div>
              </div>

            } else {(<div>Logged In</div>)} */}
      </div>


    );
  }
}



export default Login;