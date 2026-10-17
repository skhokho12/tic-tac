function Scoreboard({ scores, currentPlayer, gameOver }) {
  const players = [
    { label: 'X', score: scores.X, accent: 'x' },
    { label: 'O', score: scores.O, accent: 'o' },
    { label: 'Draws', score: scores.draws, accent: 'draw' },
  ]

  return (
    <section className="scoreboard" aria-label="Scoreboard">
      {players.map((player) => {
        const isActive = !gameOver && currentPlayer === player.label

        return (
          <div
            key={player.label}
            className={`score-card ${player.accent} ${isActive ? 'active' : ''}`}
            aria-live="polite"
          >
            <span className="score-label">{player.label}</span>
            <strong className="score-value">{player.score}</strong>
          </div>
        )
      })}
    </section>
  )
}

export default Scoreboard
