import React, { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import CommentForm from './components/comment-form/CommentForm'
import NavBar from './components/NavBar'

// class App extends Component {

//     render( ) {
//         return (
//             <div className="App">
//             <Home />
//             </div>
//         );
//     }
// }

// export default App;


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/commentform' component={CommentForm}/>
        </Switch>


      </div>
    </Router>
  );
}

export default App;