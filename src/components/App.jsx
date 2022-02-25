import React from 'react'
import Header from './Header'
import RunnerConsole from './RunnerConsole'
import Footer from './Footer'

const App = () => (
  <div className="app">
    {/*
     * Header contains ice and programs list.
     * Ice will be exposed for async week and hidden for future versions.
     * Header program list will indicate which program is active for the next Ice encounter.
     * Header Ice list will indicate which ice is active for the next encounter.
     */}
    <Header />
    <div className="console">
      {/*
       * RunnerConsole will be fashioned after a terminal shell with css.
       * RunnerConsole is where the text will display information about the encounter. Essentially, printing a comment of a few lines of code showing the outcome of the encounter.
       */}
      <RunnerConsole />
    </div>
    {/*
     * Footer will contain the filters for the header.
     */}
    <Footer />
  </div>
)

export default App
