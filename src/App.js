import React, { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import CommentForm from './components/comment-form/CommentForm'
import NavBar from './components/NavBar'
import CommentList from './components/CommentList'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/commentform' component={CommentForm}/>
          <Route exact path='/commentlist' component={CommentList}/>
        </Switch>


      </div>
    </Router>
  );
}

export default App