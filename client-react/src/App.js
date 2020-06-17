import React from "react";
import "./App.css";
import Home from './HomePage/Home';
import Login from './LoginPage/Login';
import Register from './Screens/Register';
import Teacher from './Screens/Teacher';
import CreateLesson from './Screens/CreateLesson';
import Lessons from './Screens/Lessons';
import Gradebook from './Screens/Gradebook';
import Student from './Screens/Student';
import {
  BrowserRouter as Router,
  // Link,
  Route
} from "react-router-dom";
// import Values from './Values';
import StudentProfile from './Screens/StudentProfile';
import Parent from './Screens/Parent';
import { PrivateRoute } from './_components';





class App extends React.Component {





  //function to load the title bar 
  // function App() {
  render() {
    return (
      <div>

        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/Login" component={Login} />

            <PrivateRoute path='/Home' component={Home} />
            <Route path='/Register' component={Register} />
            <PrivateRoute path='/Teacher' component={Teacher} />
            <PrivateRoute path='/CreateLesson' component={CreateLesson} />
            <PrivateRoute path='/Lessons' component={Lessons} />
            <PrivateRoute path='/Gradebook' component={Gradebook} />
            <PrivateRoute path='/Student' component={Student} />
            <PrivateRoute path='/StudentProfile' component={StudentProfile} />
            <PrivateRoute path='/Parent' component={Parent} />
            <PrivateRoute path='/Math' component={Parent} />
            <PrivateRoute path='/Reading' component={Parent} />
            <PrivateRoute path='/SocialStudies' component={Parent} />
            <PrivateRoute path='/Science' component={Parent} />
          </div>
        </Router>
      </div>
    );

  }
}


export default App;
