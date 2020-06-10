import React from 'react';
import axios from "axios";
import {
    // BrowserRouter as Router, 
    Link,
    // Route 
} from "react-router-dom";




class CreateLesson extends React.Component {
    constructor(props) {
        super(props);
        this.state = { createlesson: [] };
        this.taskName = React.createRef();
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/createlesson";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ createlesson: response.data }));
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
                            <Link to="/teacher">Dashboard</Link>
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

                <div className='form-row'>
                    <h2>Create Lesson Page</h2>
                </div>
                <hr></hr>
                <div className="form-group">
                    <br></br>
                    <form>
                        <select className="browser-default custom-select" ref={this.subject}>
                            <option defaultValue="M">Math</option>
                            <option defaultValue="R">Reading</option>
                            <option defaultValue="SS">Social Studies</option>
                            <option defaultValue="Sc">Science</option>
                        </select>

                        <div className="form-group-left">
                            <label name='lessonName'>lesson name</label>
                            <input type="text" id="lessonName" ></input>
                        </div>

                        <div className="form-group-text">
                            <label name="lesson text">Enter Lesson Text</label>
                            <textarea className="form-control" id="exampleTextarea" rows="3" ></textarea>
                        </div>

                        <div className="form-group"> 
                                    <label name="upload files">Add a Worksheet</label>
                                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                                    {/* <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>  */}
                        </div>
                        <button className="from-group" type='submit'>Submit Lesson</button>


                    </form>

                </div>
            </div >
        )
    }
}


export default CreateLesson;