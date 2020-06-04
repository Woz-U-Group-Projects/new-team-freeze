import React from "react";
import axios from "axios";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [] };
        this.userName = React.createRef();
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
        axios.post(url, { username: this.userName.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.userName.current.value = "";
        });
        axios.post(url, { password: this.password.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.password.current.value = "";
        });
        axios.post(url, { firstName: this.firstName.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.firstName.current.value = "";
        });
        axios.post(url, { lastName: this.lastName.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.username.current.value = "";
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
                    <p className="text-center">To Register, Please complete the below Items.</p>
                    {/* <input ref={this.userName} /> */}

                    <div className="form-row">
                        <div className="text-center">
                            <form>
                                <div className="form-group ">
                                    <select
                                        // select={value.toString()} 
                                        ref={this.role}>
                                        <option defaultValue="S">Student</option>
                                        <option value="T">Teacher</option>
                                        <option value="P">Parent</option>

                                    </select>
                                    <br></br>
                                </div>

                                <div >
                                    <div className="form-group">
                                        <label><input className="form-control" ref={this.firstName} type="text" placeholder="First name" name="firstName" /> </label>
                                    </div>
                                    <div className="form-group">
                                        <label><input className="form-control" ref={this.lastName} type="text" placeholder="Last Name" name="lastName" /></label>
                                    </div>
                                    <div className="form-group">
                                        <label> <input className="form-control" ref={this.username} type="text" placeholder="User Name" autoComplete="username" /></label>
                                    </div>
                                    <div className="form-group ">
                                        <label><input className="form-control" ref={this.password} type="password" placeholder="Password" autoComplete="password" /></label>
                                    </div>
                                    <div className="form-group ">
                                        <label><input className="form-control" ref={this.password} type="password" placeholder=" re-enter Password" autoComplete="password" /></label>
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
