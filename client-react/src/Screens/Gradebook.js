import React from 'react';
import axios from "axios";
import {
    // BrowserRouter as Router, 
    Link,
    // Route 
} from "react-router-dom";

import { Tabs, Tab } from 'react-bootstrap-tabs';
import Math from "./Math";
import Reading from "./Reading";
import SocialStudies from "./SocialStudies";
import Science from "./Science";





class Gradebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gradebook: [
                { id: 1, name: 'Thomas', Math: "In_Progress", Reading: "In_Progress", Social_Studies: "Not_Started", Science: "Not_Started" },
                { id: 2, name: 'William', Math: "Not_Started", Reading: "In_Progress", Social_Studies: "Not_Started", Science: "Completed" },
                { id: 3, name: 'Gueniver', Math: "Completed", Reading: "Completed", Social_Studies: "Not_Started", Science: "Completed" },
                { id: 4, name: 'Molly', Math: "In_Progress", Reading: "Not_Started", Social_Studies: "Not_Started", Science: "Completed" }
            ]
        };
        this.taskName = React.createRef();
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/gradebook";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ gradebook: response.data }));
    };




    render() {

        return (
            <div className="container">
                <div>
                    <ul className="header" >
                        <li>
                            <Link to="/Home">Home</Link>
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
                <div className='center'>
                    <h2>Grade Book</h2>
                    <hr></hr>
                    <div className="Tabs">
                        {/* <Tabs defaultActiveKey="Math" transition={true} id="noanim-tab-example"> */}
                            <Tabs  onSelect={(index, label) => console.log(label + ' selected')}>
                            <Tab label="Math" title="Math">
                                <Math />
                            </Tab>
                            <Tab label="Reading" title="Reading">
                                <Reading />
                            </Tab>
                            <Tab label="Social_Studies" title="Social Studies">
                                <SocialStudies />
                            </Tab>
                            <Tab label="Science" title="Science">
                                <Science />
                            </Tab>
                        </Tabs>
                        <div>
                            {/* <table className="table table-responsive table-striped w-auto">
                                <tbody>
                                    <tr>{this.renderTableHeader()}</tr>
                                    {this.renderTableData()}
                                </tbody> 
                            </table>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Gradebook;