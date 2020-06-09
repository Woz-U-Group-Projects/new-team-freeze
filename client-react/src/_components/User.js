import React from "react";
import axios from "axios";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [] };
        this.username = React.createRef();
        this.password = React.createRef();
        this.firstname = React.createRef();
        this.lastname = React.createRef();
        this.role = React.createRef();
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/user";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ user: response.data }));
    };

    addUser = () => {
        let url = "http://localhost:8080/user";
        axios.post(url, {
            username: this.username.current.value,
            password: this.password.current.value,
            firstname: this.firstname.current.value,
            lastname: this.lastname.current.value,
            role: this.role.current.value
        }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.username.current.value = "";
        });
    };



    render() {
        return (
            <div className="container">

                <div className="col-sm-4 offset-sm-4" >

                    <h2 className="text-center">Register</h2>
                    <hr></hr>
                    <p className="text-center">To register, please complete the form below.</p>
                    {/* <input ref={this.userName} /> */}

                    <div className="form-row">
                        <div className="text-center">
                            <form>
                                <select className="browser-default custom-select" ref={this.role}>
                                        <option defaultValue="T">Teacher</option>
                                        <option defaultValue="S">Student</option>
                                        <option defaultValue="P">Parent</option>
                                    </select>

                                    <br></br>
                                {/* registration form*/}
                                <div >
                                    <div className="form-group">
                                        <label><input className="form-control" ref={this.firstname} type="text" placeholder="First name" name="firstname" /> </label>
                                    </div>
                                    <div className="form-group">
                                        <label><input className="form-control" ref={this.lastname} type="text" placeholder="Last Name" name="lastname" /></label>
                                    </div>
                                    <div className="form-group">
                                        <label> <input className="form-control" ref={this.username} type="text" placeholder="Username" autoComplete="username" /></label>
                                    </div>
                                    <div className="form-group ">
                                        <label><input className="form-control" ref={this.password} type="password" placeholder="Password" autoComplete="password" /></label>
                                    </div>
                                    <br></br>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary" onClick={this.addUser}>Register</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default User;
