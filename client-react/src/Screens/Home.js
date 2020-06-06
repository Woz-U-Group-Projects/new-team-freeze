import React from 'react';
import axios from "axios";
// import Registration from './Registration'
import {
    // BrowserRouter as Router, 
    Link,
    //  Route
} from "react-router-dom";
// import "../home.min.css";




class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { home: [] };
        this.taskName = React.createRef();
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/home";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ home: response.data }));
    };

    register() {
        window.location.href = "./Register";
    }


    render() {
        if (!this.props.token || this.props.token === "") {
            return (
                <div className="container" >
                   <ul >
                        <li>
                            <Link to="/">Home</Link>
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
                            <Link to="/">Log Off</Link>
                        </li>
                    </ul>
                    
                    {/*login input */}
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-4 offset-sm-4">

                                <h2 className="text-center">Home</h2>
                                <h6 className="text-center">Welcome to the At Home Learning  Portal</h6>
                                <hr></hr>
                                <p className="text-center">Enter your login credentials below:</p>
                                
                                


                                <div className="form-group-row" >
                                    {/* <div style={{ color: "red" }}>{(this.props.error ? this.props.error : '')}</div> */}
                                    <div className="form-group row">
                                        {/* <label htmlFor="username">Username:</label> */}
                                        <input type="text" className="form-control" id="username" placeholder="User Name" name="username" onChange={this.props.onUsernameChange} />
                                    </div>
                                    <div className="form-group row">
                                        {/* <label htmlFor="password">Password:</label> */}
                                        <input type="password" className="form-control" id="password" placeholder="password" name="password" onChange={this.props.onPasswordChange} />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-lg" onClick={this.props.onLogin}>Submit</button>
                                        <button className="btn btn-secondary" onClick={this.register}>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >


            )
        } else { return (<div>Logged In</div>); }
    }
}


export default Home;