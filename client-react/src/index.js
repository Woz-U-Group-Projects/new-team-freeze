import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Home from './Screens/Home'
// import Login from './Screens/Login'
// import Registration from './Screens/Registration'
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {BrowserRouter as Router, Link, Route} from "react-router-dom";


// function App() {
//     return (
//         <Router>
//             <div>
//                 <ul class= "header" ><li>
//                     <Link to="/">Home</Link>
//                 </li>
//                     <li>
//                         <Link to="/Login">Login</Link>
//                     </li>
//                     <li>
//                         <Link to="/Registration">Registration</Link>
//                     </li>
//                 </ul>

//                 <Route exact path='/' component={Home} />
//                 <Route path='/Login' component={Login} />
//                 <Route path='/Registration' component={Registration} />

//             </div>
//         </Router>
//     )
// }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
