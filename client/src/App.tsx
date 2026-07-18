import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedRoute from './features/auth/components/ProtectedRoute'


function App() {
  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/notes" element={
    <ProtectedRoute>
      <Notes />
    </ProtectedRoute>
  }
/>

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App