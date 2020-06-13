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
                        <Tab label="My Progress" className="tab-text">
                            <br></br>
                            <div className="card-deck">
                                <div className="card border-primary mb-3 text-center">
                                    <div className="card-body text-primary">
                                        <div>
                                            <ProgressBar variant="danger" now={25} label={`${25}%`} />
                                        </div>
                                        <hr></hr>
                                        <h4 className="card-title">Math</h4>
                                        <h5 className="card-text">"Multiplying Decimals"</h5>
                                        <p className="card-text text-danger">Due: Aug. 14, 2020</p>
                                        <Button variant="primary" size="sm">Go to lesson</Button>{' '}
                                    </div>
                                </div>
                                <div className="card border-primary mb-3 text-center">
                                    <div className="card-body text-primary">
                                        <div>
                                            <ProgressBar variant="warning" now={50} label={`${50}%`} />
                                        </div>
                                        <hr></hr>
                                        <h4 className="card-title">Reading</h4>
                                        <h5 className="card-text">"Main Idea"</h5>
                                        <p className="card-text text-danger">Due: Aug. 14, 2020</p>
                                        <Button variant="primary" size="sm">Go to lesson</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-deck">
                                <div className="card border-primary mb-3 text-center">
                                    <div className="card-body text-primary">
                                        <div>
                                            <ProgressBar variant="success" now={70} label={`${70}%`} />
                                        </div>
                                        <hr></hr>
                                        <h4 className="card-title">Social Studies</h4>
                                        <h5 className="card-text">"Industrial Revolution"</h5>
                                        <p className="card-text text-danger">Due: Aug. 12, 2020</p>
                                        <Button variant="primary" size="sm">Go to lesson</Button>
                                    </div>
                                </div>
                                <div className="card border-primary mb-3 text-center">
                                    <div className="card-body text-primary">
                                        <div>
                                            <ProgressBar variant="success" now={100} label={`${100}%`} />
                                        </div>
                                        <hr></hr>
                                        <h4 className="card-title">Science</h4>
                                        <h5 className="card-text">"Force and Motion"</h5>
                                        <p className="card-text text-danger">Due: Aug. 13, 2020</p>
                                        <Button variant="primary" size="sm">Go to lesson</Button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="Math Grades">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body-grades">
                                    <div className="card-title-grades">Assignment</div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Multiples of 10 Worksheet</li>
                                        <li className="list-group-item">Multiplying Decimals Quiz</li>
                                        <li className="list-group-item">Unit Test</li>
                                        <li className="list-group-item-avg">Average:</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body-grades">
                                    <div className="card-title-grades">Grade</div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">88</li>
                                        <li className="list-group-item">91</li>
                                        <li className="list-group-item">84</li>
                                        <li className="list-group-item">91</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </Tab >
                        <Tab label="Reading Grades">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body-grades">
                                    <div className="card-title-grades">Assignment</div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Vocabulary Quiz</li>
                                        <li className="list-group-item">Main Idea Activity #1</li>
                                        <li className="list-group-item">Main Idea Exam</li>
                                        <li className="list-group-item-avg">Average:</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body-grades">
                                    <div className="card-title-grades">Grade</div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">95</li>
                                        <li className="list-group-item">93</li>
                                        <li className="list-group-item">97</li>
                                        <li className="list-group-item">95</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </Tab >
                        <Tab label="Social Studies Grades">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body-grades">
                                    <div className="card-title-grades">Assignment</div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Matching Activity #1</li>
                                        <li className="list-group-item">Vocabulary Worksheet</li>
                                        <li className="list-group-item">Unit Test 1</li>
                                        <li className="list-group-item-avg">Average:</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body-grades">
                                    <div className="card-title-grades">Grade</div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">92</li>
                                        <li className="list-group-item">89</li>
                                        <li className="list-group-item">76</li>
                                        <li className="list-group-item">86</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </Tab >
                        <Tab label="Science Grades">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body-grades">
                                    <div className="card-title-grades">Assignment</div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Push or Pull Worksheet</li>
                                        <li className="list-group-item">Newton's Laws of Motion Quiz</li>
                                        <li className="list-group-item">Vocabulary Test</li>
                                        <li className="list-group-item-avg">Average:</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body-grades">
                                    <div className="card-title-grades">Grade</div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">85</li>
                                        <li className="list-group-item">72</li>
                                        <li className="list-group-item">88</li>
                                        <li className="list-group-item">82</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </Tab >
                        
                    </Tabs>
                </div>
            </div>

        )
    }
}


export default Student;