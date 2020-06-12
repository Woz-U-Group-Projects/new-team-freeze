import React from 'react';
import axios from "axios";
import { 
    // BrowserRouter as Router, 
    Link, 
    // Route 
} from "react-router-dom";




class CurrentLessonPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentLessonPlan: [] };
        this.taskName = React.createRef();
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/currentlessonplan";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ currentLessonPlan: response.data }));
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
                    <h2>Current Lesson Page</h2>
                   
                </div>
                <hr></hr>
                <div>
                        <form>
                            <h3>Question 1. When did World War II take place?</h3>
                            <input type="number"/>
                            <h3>Question 2. What started WWII?</h3>
                            <input type="text"/>
                            <h3>Question 3. Who were our allies during this war?</h3>
                            <input type="text"/>
                            <h3>Question 4. Who was our President during this war?</h3>
                            <input type="text"/>
                            <h3>Question 5. What year did the war end?</h3>
                            <input type="number"/>

                            <br></br>
                            <button type="submit"
                                className="btn btn-primary"
                              //  onClick={}
                            >Submit Lesson</button>
                        </form>
                        </div>
            </div>
        )
    }
}


export default CurrentLessonPlan;