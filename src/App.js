import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Home from './pages/home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 2000)

  return (
    <div className="App">
      <Router>
        {loading ? <Loading />
          : (
            <div>
              <Header />
              <Home />
            </div>
          )}
      </Router>
    </div>
  );
}

export default App;
