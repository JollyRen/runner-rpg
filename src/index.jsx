import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import RunnerProvider from './components/store/RunnerProvider.js'

ReactDOM.render(
  <React.StrictMode>
    <RunnerProvider>
      <App />
    </RunnerProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
