import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppFallback from './components/AppFallback.jsx'
import BootLoaderCleanup from './components/BootLoaderCleanup.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BootLoaderCleanup />
    <ErrorBoundary fallback={<AppFallback />}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
