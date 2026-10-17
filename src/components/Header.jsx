function Header() {
  return (
    <header className="app-header">
      <div className="brand-mark" aria-hidden="true">
        <span className="mark x-mark">X</span>
        <span className="mark o-mark">O</span>
      </div>

      <div className="header-copy">
        <p className="eyebrow">Classic strategy board</p>
        <h1>Tic Tac Toe Arena</h1>
        <p className="subtitle">Challenge a friend. Make your move.</p>
      </div>
    </header>
  )
}

export default Header
