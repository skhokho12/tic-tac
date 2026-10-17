import Square from './Square'

function GameBoard({ board, onSquareClick, winningCombo }) {
  return (
    <div className="game-board" role="grid" aria-label="Tic Tac Toe board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinning={winningCombo.includes(index)}
        />
      ))}
    </div>
  )
}

export default GameBoard
