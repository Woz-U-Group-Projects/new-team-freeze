import React from 'react';
import axios from "axios";
import {
    // BrowserRouter as Router, 
    Link,
    //  Route
} from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap-tabs';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: [
                {
                    id: "",
                    coursename: "",
                    progress: "",
                    duedate: ""
                }
            ]
        };
        this.taskName = React.createRef();
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/student";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ student: response.data }));
    };

    renderTableHeader() {
        let header = Object.keys(this.state.student[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.student.map((course, index) => {
            const { id, coursename, progress, duedate } = course //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{coursename}</td>
                    <td>{progress}</td>
                    <td>{duedate}</td>
                </tr>
            )
        })
    }

    //
    render() {
        return (
            //create a student dashboard 
            <div className="container">
                <div>
                    <ul className="header" >
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/Student">Student</Link>
                        </li>
                        <li>
                            <Link to="/StudentProfile">Profile</Link>
                        </li>

                        <li>
                            <Link to="/Login">Log Off</Link>
                        </li>
                    </ul>

                    <div className="center">

                        <h2>Hello, Kim!</h2>
                        <h6>Welcome to At-Home Learning</h6>
                    </div>
                    <hr></hr>
                </div>
                {/* <div className="" > */}

                {/* <table className="table table-responsive table-striped w-auto">
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table> */}

                <div className="Tabs">
                    <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                        <Tab label="My Progress">
                    <br></br>
                    <div className="card-deck">
                                <div className="card border-primary mb-3 max-width: 18rem">
                                    <div className="card-body text-primary">
                                        <div>
                                            <ProgressBar variant="danger" now={25} label={`${25}%`} />
                                        </div>
                                        <hr></hr>
                                        <h4 className="card-title">Math</h4>
                                        <h6 className="card-text">Multiplying Decimals</h6>
                                        <p className="card-text text-danger">Due: Aug. 14, 2020</p>
                                        <Button variant="primary" size="sm">Go to lesson</Button>{' '}
                                    </div>
                                </div>
                                <div className="card border-primary mb-3">
                                    <div className="card-body text-primary">
                                        <div>
                                            <ProgressBar variant="warning" now={50} label={`${50}%`} />
                                        </div>
                                        <hr></hr>
                                        <h4 className="card-title">Reading</h4>
                                        <h6 className="card-text">Main Idea</h6>
                                        <p className="card-text text-danger">Due: Aug. 14, 2020</p>
                                        <Button variant="primary" size="sm">Go to lesson</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-deck">
                                <div className="card border-primary mb-3">
                                    <div className="card-body text-primary">
                                        <div>
                                            <ProgressBar variant="success" now={70} label={`${70}%`} />
                                        </div>
                                        <hr></hr>
                                        <h4 className="card-title">Social Studies</h4>
                                        <h6 className="card-text">Industrial Revolution</h6>
                                        <p className="card-text text-danger">Due: Aug. 12, 2020</p>
                                        <Button variant="primary" size="sm">Go to lesson</Button>
                                    </div>
                                </div>
                                <div className="card border-primary mb-3">
                                    <div className="card-body text-primary">
                                        <div>
                                            <ProgressBar variant="success" now={100} label={`${100}%`} />
                                        </div>
                                        <hr></hr>
                                        <h4 className="card-title">Science</h4>
                                        <h6 className="card-text">Force and Motion</h6>
                                        <p className="card-text text-danger">Due: Aug. 13, 2020</p>
                                        <Button variant="primary" size="sm">Go to lesson</Button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="My Grades">My Grades</Tab>
                    </Tabs>
                </div>
            </div>

        )
    }
}


export default Student;