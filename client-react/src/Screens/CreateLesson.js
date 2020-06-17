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
        this.subject = React.createRef();
        this.lessonname = React.createRef();
        this.video = React.createRef();
        this.lessontext = React.createRef();
        this.uploadfiles = React.createRef();

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

    addLesson = () => {
        let url = "http://localhost:8080/createlesson";
        axios.post(url, {
            subject: this.subject.current.value,
            lessonname: this.lessonname.current.value,
            video: this.video.current.value,
            lessontext: this.lessontext.current.value,
            uploadfiles: this.uploadfiles.current.value
        }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.lessonname.current.value = "";
        });
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
                            <Link to="/Lessons">Lessons</Link>
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
                            <label >Lesson Name</label>
                            <input type="text" name="lessonName" className="form-control" ref={this.lessonname} ></input>
                        </div>
                        <div className="form-group-left">
                            <label >Add link to a video</label>
                            <input type="link" name="video" className="form-control" ref={this.video}></input>
                        </div>


                        <div className="form-group-text">
                            <label name="lessontext">Enter Lesson Text</label>
                            <textarea className="form-control" name="lessontext" rows="3" ref={this.lessontext} ></textarea>
                        </div>

                        <div className="form-group">
                            <label name="uploadfiles">Add a Worksheet</label>
                            <input type="file" ref={this.uploadfiles} className="form-control-file" name="uploadfiles" aria-describedby="fileHelp" />
                            {/* <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>  */}
                        </div>
                        <div className="text-center">
                            <button type="submit"
                                className="btn btn-primary"
                                onClick={this.addLesson}
                            >Submit Lesson</button>
                        </div>


                    </form>

                </div>
            </div >
        )
    }
}


export default CreateLesson;