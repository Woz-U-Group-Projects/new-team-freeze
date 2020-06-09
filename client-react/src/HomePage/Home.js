import React from 'react';
import axios from "axios";
// import Registration from './Registration'
import {
    // BrowserRouter as Router, 
    Link,
    //  Route
} from "react-router-dom";

import {userService} from "../_services/user.service";





class Home extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { home: [] };
        this.state = {
            user: {},
            users: []
        };

    }


    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('http://localhost:8080/User')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/User";

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
        // const { user, users } = this.state;
        return (
            <div className="container" >
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
                            {/* <h1>Hi {user.firstname}!</h1>
                            <p>You're logged in with React & Basic HTTP Authentication!!</p>
                            <h3>Users from secure api end point:</h3>
                            {users.loading && <em>Loading users...</em>}
                            {users.length &&
                                <ul>
                                    {users.map((user, index) =>
                                        <li key={user.id}>
                                            {user.firstname + ' ' + user.lastname}
                                        </li>
                                    )}
                                </ul>
                            } */}


                            <h2 className="text-center">Home</h2>
                            <h6 className="text-center">Welcome to the At Home Learning  Portal</h6>
                            <hr></hr>
                                     <p>
                                           
                                    </p>           


                        </div>
                    </div >
                </div>
            </div >
        )
    }
}


export default Home;