import React from 'react';
import axios from "axios";
import {
    // BrowserRouter as Router, 
    Link,
    //  Route
} from "react-router-dom";

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            student: [
                { id: "", 
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
                        <Link to="/Student">Dashboard</Link>
                        </li>
                        <li>
                        <Link to="/StudentProfile">Profile</Link>
                        </li>

                        <li>
                            <Link to="/Login">Log Off</Link>
                        </li>
                    </ul>
                    
                <div className="center">

                    <h2>Student Page</h2>
                    <h6>Welcome to At-Home Learning</h6>
                </div>
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

        )
    }
}


export default Student;