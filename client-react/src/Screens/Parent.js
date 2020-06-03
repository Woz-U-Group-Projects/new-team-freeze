import React from 'react';
import axios from "axios";
import {
    // BrowserRouter as Router, 
    Link,
    //  Route
} from "react-router-dom";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { parent: [] };
        this.taskName = React.createRef();
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/parent";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ parent: response.data }));
    };

    //
    render() {
        return (
            //create a parent dashboard 
            <div className="container">
                <ul className="header" >
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

                <div className="center">

                    <h2>Parent Page</h2>
                    <h3>Welcome to The School Lesson Tracking Portal</h3>
                </div>
            </div>

        )
    }
}


export default Parent;