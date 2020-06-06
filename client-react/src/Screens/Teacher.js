import React from 'react';
import axios from "axios";
// import CreateLesson from './CreateLesson'
// import CurrentLessonPlan from './CurrentLessonPlan'
// import Gradebook from './Gradebook'
import {
    // BrowserRouter as Router, 
    Link,
    // Route 
} from "react-router-dom";




class Teacher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: [
                { id: 1, name: 'Thomas', Math: "In_Progress", Reading: "In_Progress", Social_Studies: "Not_Started", Science:"Not_Started"},
                { id: 2, name: 'William', Math: "Not_Started", Reading: "In_Progress" ,Social_Studies: "Not_Started", Science:"Completed"},
                { id: 3, name: 'Gina', Math: "Completed", Reading: "Completed" ,Social_Studies: "Not_Started", Science:"Completed"},
                { id: 4, name: 'Molly', Math: "In_Progress", Reading: "Not_Started",Social_Studies: "Not_Started" , Science:"Completed"}
            ]
        };
        this.taskName = React.createRef();
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/teacher";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ teacher: response.data }));
    };


    renderTableHeader() {
        let header = Object.keys(this.state.teacher[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.teacher.map((student, index) => {
            const { id, name, Math, Reading, Social_Studies, Science } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{Math}</td>
                    <td>{Reading}</td>
                    <td>{Social_Studies}</td>
                    <td>{Science}</td>
                </tr>
            )
        })
    }


    render() {

        return (
            <div className="container">
                <div>
                    <ul className="header" >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Teacher">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/CreateLesson">Create Lesson</Link>
                        </li>
                        <li>
                            <Link to="/CurrentLessonPlan">Current Lesson Plan</Link>
                        </li>
                        <li>
                            <Link to="/Gradebook">Grade Book</Link>
                        </li>
                        <li>
                            <Link to="/">Log Off</Link>
                        </li>
                    </ul>
                </div>
                <div >
                    <div className="center">

                        <h2>Teacher Page</h2>
                        <hr></hr>

                    </div>
                    {/* <div className="" > */}

                        <table className="table table-responsive table-striped w-auto">
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    {/* </div> */}

                </div>
            </div>
        )
    }
}



export default Teacher;