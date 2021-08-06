import React, { useState } from 'react'
import './App.css';
import Loading from './components/Loading';
import Upload from './pages/upload'
import Home from './pages/home'
import { Route, Switch } from 'react-router-dom'
import SequencesPage from './pages/sequences';

function App() {

  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 500)

  return (
    <div className="App">
      <Switch>
        <Route path="/about">
          This is the about page
        </Route>
        <Route path="/sequences">
          <SequencesPage />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/">
          {loading ? <Loading /> : <Home />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
