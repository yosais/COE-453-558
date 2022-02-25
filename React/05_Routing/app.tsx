import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
       return( <h1> Home </h1> );
    }
}

class CV extends React.Component {
    render() {
       return( <h1> CV </h1> );
    }
}

class Courses extends React.Component {
    render() {
       return( <h1> Courses </h1> );
    }
}

class App extends React.Component {
  render() {
     return(
        <HashRouter>
           <div>
             <h1> Single-Page Application (SPA) </h1>
             <ul>
                 <li><Link to="/">Home</Link></li>      
                 <li><Link to="/cv">CV</Link></li> 
                 <li><Link to="/courses">Courses</Link></li>
             </ul>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/cv" component={CV}/> 
                <Route path="/courses" component={Courses}/>
            </div>
           </div>
        </HashRouter>
     );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));