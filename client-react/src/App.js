import React from "react";
import "./App.css";
import Home from './Screens/Home'
import Login from './Screens/Login'
import Registration from './Screens/Registration'
import Teacher from './Screens/Teacher'
import CreateLesson from './Screens/CreateLesson'
import CurrentLessonPlan from './Screens/CurrentLessonPlan'
import Gradebook from './Screens/Gradebook'
import Student from './Screens/Student'
import {
  BrowserRouter as Router,
  // Link,
  Route
} from "react-router-dom";
import Values from './Values';
import StudentProfile from './Screens/StudentProfile'
import Parent from './Screens/Parent'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { token: "", username: "", password: "", values: [], error: "" };
  }
  onLogin = () => {
    fetch("http://localhost:8080/home", {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify({ username: this.state.username, password: this.state.password })
    })
      .then(res => res.headers.get("authorization"))
      .then(token => {
        if (token) {
          this.setState({ ...this.state, token: token });
        } else {
          this.setState({ ...this.state, error: "Unable to login with username and password." });
        }
      });
  }

  onUsernameChange = (e) => this.setState({ ...this.state, username: e.target.value });
  onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });
     

  onGetValues = () => {
    fetch("http://localhost:8080/api/values", {
      headers: { 'Authorization': this.state.token }
    })
      .then(res => res.json())
      .then(json => this.setState({ ...this.state, values: json }));
  }
  //function to load the title bar 
  // function App() {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            {(!this.state.token || this.state.token === "")
              ? (<Login onUsernameChange={this.onUsernameChange}
                onPasswordChange={this.onPasswordChange}
                onLogin={this.onLogin}
                error={this.state.error}></Login>)
              : (<Values values={this.state.values} onGetValues={this.onGetValues}></Values>)}
          </header>
        </div>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/Login' component={Login} />
          <Route path='/Registration' component={Registration} />
          <Route path='/Teacher' component={Teacher} />
          <Route path='/CreateLesson' component={CreateLesson} />
          <Route path='/CurrentLessonPlan' component={CurrentLessonPlan} />
          <Route path='/Gradebook' component={Gradebook} />
          <Route path='/Student' component={Student} />
          <Route path='/StudentProfile' component={StudentProfile} />
          <Route path='/Parent' component={Parent} />
        </Router>
      </div>
    );

  }
}


export default App;
