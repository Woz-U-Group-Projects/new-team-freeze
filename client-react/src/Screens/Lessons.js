import React from 'react';
import axios from "axios";
import { 
    // BrowserRouter as Router, 
    Link, 
    // Route 
} from "react-router-dom";
import ReactPlayer from "react-player";




class Lessons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Lessons:[], 
            inputValue: "",
            url:""
         };
        this.taskName = React.createRef();
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/lessons";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ Lessons: response.data }));
    };


    handleChange = (event) =>{
        this.setState({inputValue : event.target.value})
    }

    handleSubmit = (data) =>{
        data.preventDefault();
        this.setState({url: this.state.inputValue})
    }

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
                <div className='center'>
                    <h2>Lessons</h2>
                   
                </div>
                <hr></hr>
                                  <div className="video">
                                  <div className="video-header">
                                       
                                           <form onSubmit={this.handleSubmit}>
                                               <div className="row">
                                         <input onChange={this.handleChange} 
                                          className="form-control" type="text" placeholder="Input video url here."/>
                                          </div>
                                          <div className="row">
                                           <button className="btn btn-primary">Play Video</button>
                                           </div>
                                           <div className="row">     
                        <ReactPlayer className="form-control rounded"  url={this.state.url} control={true} />
                        </div>
                        </form>
                        </div>
                        
                      </div>
                <div>
                        <form>
                            <h3>Question 1. When did World War II take place?</h3>
                            <input className="form-control sm-8" type="number"/>
                            <h3>Question 2. What started WWII?</h3>
                            <input className="form-control sm-8" type="text"/>
                            <h3>Question 3. Who were our allies during this war?</h3>
                            <input className="form-control sm-8" type="text"/>
                            <h3>Question 4. Who was our President during this war?</h3>
                            <input className="form-control sm-8" type="text"/>
                            <h3>Question 5. What year did the war end?</h3>
                            <input className="form-control sm-8" type="number"/>

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


export default Lessons;