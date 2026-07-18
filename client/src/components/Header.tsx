import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-amber-800 font-semibold flex items-center justify-evenly p-4 border-b">
      <h1>logo</h1>

      <button className="md:hidden">
        ☰
      </button>

      <nav className="hidden md:flex gap-6">
        <Link to="/">Home</Link>

        <Link to="/notes">Notes</Link>

        <Link to="/register">Register</Link>

        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default Header