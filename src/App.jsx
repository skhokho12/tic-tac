import { useState } from 'react'
import Header from './components/Header'
import Scoreboard from './components/Scoreboard'
import GameBoard from './components/GameBoard'
import GameStatus from './components/GameStatus'
import GameControls from './components/GameControls'
import './App.css'

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const createEmptyBoard = () => Array(9).fill('')

function getWinnerState(board) {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: combo, draw: false }
    }
  }

  if (board.every(Boolean)) {
    return { winner: null, line: [], draw: true }
  }

  return { winner: null, line: [], draw: false }
}

function App() {
  const [board, setBoard] = useState(createEmptyBoard)
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [winner, setWinner] = useState(null)
  const [winningCombo, setWinningCombo] = useState([])
  const [isDraw, setIsDraw] = useState(false)
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 })
  const [gameOver, setGameOver] = useState(false)

  const resetRound = () => {
    setBoard(createEmptyBoard())
    setCurrentPlayer('X')
    setWinner(null)
    setWinningCombo([])
    setIsDraw(false)
    setGameOver(false)
  }

  const handleSquareClick = (index) => {
    if (board[index] || gameOver) {
      return
    }

    const nextBoard = [...board]
    nextBoard[index] = currentPlayer
    const result = getWinnerState(nextBoard)

    setBoard(nextBoard)

    if (result.winner) {
      setWinner(result.winner)
      setWinningCombo(result.line)
      setScores((previous) => ({
        ...previous,
        [result.winner]: previous[result.winner] + 1,
      }))
      setGameOver(true)
      return
    }

    if (result.draw) {
      setIsDraw(true)
      setScores((previous) => ({
        ...previous,
        draws: previous.draws + 1,
      }))
      setGameOver(true)
      return
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  const handleNewGame = () => {
    resetRound()
  }

  const handlePlayAgain = () => {
    resetRound()
  }

  const handleResetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 })
    resetRound()
  }

  const statusMessage = winner
    ? `Player ${winner} wins!`
    : isDraw
      ? "It's a draw!"
      : `Player ${currentPlayer}'s turn`

  return (
    <div className="app-shell">
      <div className="game-card">
        <Header />
        <Scoreboard scores={scores} currentPlayer={currentPlayer} gameOver={gameOver} />
        <GameStatus message={statusMessage} isWinner={Boolean(winner)} isDraw={isDraw} />
        <GameBoard board={board} onSquareClick={handleSquareClick} winningCombo={winningCombo} />
        <GameControls
          onNewGame={handleNewGame}
          onResetScores={handleResetScores}
          onPlayAgain={handlePlayAgain}
          gameOver={gameOver}
        />
      </div>
    </div>
  )
}

export default App
