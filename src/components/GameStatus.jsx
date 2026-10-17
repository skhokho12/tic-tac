function GameStatus({ message, isWinner, isDraw }) {
  const statusClass = isWinner ? 'status winner' : isDraw ? 'status draw' : 'status active'

  return (
    <div className={statusClass} aria-live="polite">
      {message}
    </div>
  )
}

export default GameStatus
