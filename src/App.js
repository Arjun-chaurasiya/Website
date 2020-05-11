import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About/About';
import Practices from './Component/Pages/Practices/Practices';
import Ourlawyers from './Component/Pages/Ourlawyers/Ourlawyers';
import News from './Component/Pages/News/News';
import Contact from './Component/Pages/Contact/Contact'

import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';


function App() {
  return (
    
    <div className="App">
      <>
       
      

      <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact  />
            <Route path='/about' component={About} />
            <Route path='/practices' component={Practices} />
            <Route path='/ourlawyers' component={Ourlawyers} />
            <Route path='/news' component={News} />
            <Route path='/contact' component={Contact} />
          </Switch>
      </BrowserRouter>
     </>
    </div>
  );
}

export default App;
