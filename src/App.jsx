import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
//React Router import
import {Switch, Route} from 'react-router-dom';
//Import Pages
import Home from './components/pages/Home';
import Contactus from './components/pages/Contactus';
import Booking from './components/pages/Booking';
import Schedule from './components/pages/Schedule';
import Terminal from './components/pages/Terminal';
import NotFoundpage from './components/pages/NotFoundpage';
class App extends Component {
  render(){
  return (
    
   
      <div>
      
         <Navbar/>
        <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route path="/Contactus" component={Contactus}/>
          <Route path="/Schedule" component={Schedule}/>
          <Route path="/Terminal" component={Terminal}/>
          <Route path="/Booking" component={Booking}/>
          <Route component={NotFoundpage}/>
        </Switch>
          <Footer/>
      </div>
    
  );
}
}
export default App;
