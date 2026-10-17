function Square({ value, onClick, isWinning }) {
  const classes = ['square']

  if (value) {
    classes.push(value === 'X' ? 'x' : 'o')
  }

  if (isWinning) {
    classes.push('winning')
  }

  return (
    <button
      type="button"
      className={classes.join(' ')}
      onClick={onClick}
      aria-label={value ? `Cell marked ${value}` : 'Empty cell'}
      disabled={Boolean(value)}
    >
      {value}
    </button>
  )
}

export default Square
