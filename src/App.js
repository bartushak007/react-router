import React from 'react';
import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Users from './components/Users';
import Error from './components/Error';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {  
  return ((
    <BrowserRouter>
      <div >
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/users" component={Users}/>
          <Route path="*" component={Error}/>
        </Switch>
      </div>
    </BrowserRouter>)
  );  
}

export default App;

