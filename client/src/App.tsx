import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Notes from './pages/Notes'

function App() {
  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  )
}

export default App