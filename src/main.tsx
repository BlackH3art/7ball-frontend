import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppContexProvider } from './context/AppContext'
import { ContractContexProvider } from './context/ContractContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContexProvider>
      <ContractContexProvider>
        <App />
      </ContractContexProvider>
    </AppContexProvider>
  </React.StrictMode>
)
