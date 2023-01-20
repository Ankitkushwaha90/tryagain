// import logo from './logo.svg';
import './App.css';

import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
class App extends React.Component {
  // componentDidMount(){
  //   alert('mounting');
  // }
  // componentDidUpdate(){
  //   alert('updated');
  // }
 render(){
  return (
    
    <div className="App">
     
    <div>
    <Link to="/about">About</Link>
    <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>

    </div>

    <hr />

    <Routes>
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contact" element={<Contact/>} />
    </Routes>
 
  </div>
 
);
 }
}
 
export default App;