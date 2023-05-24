import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ReactQueryProvider from './providers/ReactQueryProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ReactQueryProvider>
    <App />
  </ReactQueryProvider>,
)
