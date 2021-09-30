/* eslint-disable react/button-has-type */
import './index.css'

const GameOver = props => {
  const {score} = props

  const playAgain = () => {
    const {play} = props
    play()
  }

  return (
    <div className="alp">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <button onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOver
