import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 1500)

  return (
    <div className="App">
      <Switch>
        <Route path="/about">
          This is text where the about page should go
        </Route>
        <Route path="/sequences">
          <h1>Sequences sequences sequences</h1>
        </Route>
        <Route path="/">
          {loading ? <Loading /> : <Home />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
