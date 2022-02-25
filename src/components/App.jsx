import React from 'react'
import Nav from './Nav'
import RunnerConsole from './RunnerConsole'
import Footer from './Footer'
import Header from './Header'

const App = () => (
  <div className="app">
    <div className="nav">
      <Nav />
    </div>
    <div className="console">
      <RunnerConsole />
    </div>
    <Footer />
  </div>
)

export default App
