import React from "react";
import axios from "axios";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [] };
        this.username = React.createRef();
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
        axios.post(url, { username: this.username.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.username.current.value = "";
        });
        axios.post(url, { password: this.password.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.password.current.value = "";
        });
        axios.post(url, { firstName: this.firstname.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.firstname.current.value = "";
        });
        axios.post(url, { lastName: this.lastname.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.lastname.current.value = "";
        });
        axios.post(url, { role: this.role.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.role.current.value = "";
        });

    };



    render() {
        return (
            <div className="container">

                <div className="col-sm-4 offset-sm-4" >

                    <h2 className="text-center">Registration</h2>
                    <hr></hr>
                    <p className="text-center">To register, please complete the form below.</p>
                    {/* <input ref={this.userName} /> */}

                    <div className="form-row">
                        <div className="text-center">
                            <form>
                                <select className="browser-default custom-select">
                                    
                                        {/* select={value.toString()*/} 
                                        ref={this.role}/>
                                        <option defaultValue="T">Teacher</option>
                                        <option defaultValue="S">Student</option>
                                        <option defaultValue="P">Parent</option>
                                    </select>

                                    <br></br>
                                <div >
                                    <div className="form-group">
                                        <label><input className="form-control" ref={this.firstName} type="text" placeholder="First name" name="firstName" /> </label>
                                    </div>
                                    <div className="form-group">
                                        <label><input className="form-control" ref={this.lastName} type="text" placeholder="Last Name" name="lastName" /></label>
                                    </div>
                                    <div className="form-group">
                                        <label> <input className="form-control" ref={this.username} type="text" placeholder="Username" autoComplete="username" /></label>
                                    </div>
                                    <div className="form-group ">
                                        <label><input className="form-control" ref={this.password} type="password" placeholder="Password" autoComplete="password" /></label>
                                    </div>
                                    <div className="form-group ">
                                        <label><input className="form-control" ref={this.password} type="password" placeholder="Re-enter Password" autoComplete="password" /></label>
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
