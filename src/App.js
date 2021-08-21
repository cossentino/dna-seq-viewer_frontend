import React, { useState } from 'react'
import './App.css';
import Loading from './components/Loading';
import Upload from './pages/upload'
import Home from './pages/home'
import Login from './pages/login'
import { Route, Switch } from 'react-router-dom'
import SequencesPage from './pages/sequences';
import SequencePage from './pages/sequence';
import UserContext from './context/user';

function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  setTimeout(() => setLoading(false), 500)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App container mx-auto">
        <Switch>
          <Route path="/sequences/:sequenceId">
            <SequencePage />
          </Route>
          <Route path="/sequences">
            <SequencesPage />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            {loading ? <Loading /> : <Home />}
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
