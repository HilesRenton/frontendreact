import React from 'react' ;
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom' ;
import Contact from './Contact' ;
import Home from './Home' ;
import About from './About' ;
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Link to = "/">Home</Link>{' '}
        <Link to ="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        
        <Switch>
          <Route exact path = "/" component = {Home}/>

          <Route path = "/about" component = {About}/>
          <Route path = "/contact" component = {Contact}/>
          
          <Route render={() => <h1>Page not found</h1>}/>


        </Switch>

      </div>
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
