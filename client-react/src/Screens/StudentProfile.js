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
        this.state = {
             studentprofile: [
               { id: "", 
                firstname: "", 
                lastname: "",
                username: "",
                gradein: ""}
      ]
     };
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


    renderTableHeader() {
        let header = Object.keys(this.state.studentprofile[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.studentprofile.map((studentprofile, index) => {
            const { id, firstname, lastname, username, gradein } = studentprofile //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{firstname}</td>
                    <td>{lastname}</td>
                    <td>{username}</td>
                    <td>{gradein}</td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className= "container">
                <div>
                    <ul className="header" >
                        <li>
                            <Link to="/Home">Home</Link>
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
                <div>
                <table className="table table-responsive table-striped w-auto">
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    <form>
                        <ul>        
                <input className="form-control sm-8" type="text"placeholder="change first name"/>           
                <input className="form-control sm-8" type="text"placeholder="change last name"/>           
                <input className="form-control sm-8" type="text"placeholder="change username"/>          
                <input className="form-control sm-8" type="number"placeholder="change grade"/>
                </ul>
                <button type="submit"
                                className="btn btn-primary"
                              //  onClick={}
                            >Submit</button>
                          </form>  
                        
                </div>
            </div>
        )
    }
}

export default StudentProfile;
