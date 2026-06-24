function Header() {
  return (
    <header className="bg-amber-800 font-semibold flex items-center justify-evenly p-4 border-b">
        <h1>logo</h1>
      {/* mobile menu icon */}
      <button className="md:hidden">☰</button>

      {/* desktop menu */}
      <nav className="hidden md:flex gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;