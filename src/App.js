import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './Components/Home'
import {AddUser} from './Components/AddUser'
import {EditUser} from './Components/EditUser'

import { GlobalProvider } from './Context/GlobalState';


// import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <div style={{ maxWidth:"50%", margin:"40px"}} >
      <GlobalProvider>
      <Router>
        <h1>CURD Operation Application</h1>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser}/>
            <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </Router> 
      </GlobalProvider>
      
    
    </div>
  );
}

export default App;
