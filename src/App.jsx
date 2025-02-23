import './index.css' // Tailwind CSS import
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { Dashboard } from './components/Dashboard'

function App() {
  return (
    <div className='h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
