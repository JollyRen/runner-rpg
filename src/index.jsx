import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import RunnerProvider from './components/store/RunnerProvider'

ReactDOM.render(
  <React.StrictMode>
    <RunnerProvider>
      {/* app gets passed */}
      <App />
    </RunnerProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
