import React from 'react';
import axios from "axios";
import { 
    // BrowserRouter as Router, 
    Link, 
    // Route 
} from "react-router-dom";



class StudentProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { studentprofile: [] };
        this.taskName = React.createRef();
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/studentprofile";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ studentprofile: response.data }));
    };

    render() {

        return (
            <div className= "container">
                <div>
                    <ul className="header" >
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/Student">Dashboard</Link>
                        </li>

                        <li>
                            <Link to="/">Log Off</Link>
                        </li>
                    </ul>
                </div>
                <div className='center'>
                    <h2>Student Profile</h2>
                </div>
            </div>
        )
    }
}

export default StudentProfile;
