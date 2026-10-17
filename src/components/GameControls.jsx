function GameControls({ onNewGame, onResetScores, onPlayAgain, gameOver }) {
  return (
    <div className="controls">
      <button type="button" className="btn btn-primary" onClick={onNewGame}>
        New Game
      </button>

      {gameOver && (
        <button type="button" className="btn btn-secondary" onClick={onPlayAgain}>
          Play Again
        </button>
      )}

      <button type="button" className="btn btn-ghost" onClick={onResetScores}>
        Reset Scores
      </button>
    </div>
  )
}

export default GameControls
