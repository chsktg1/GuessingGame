const NewHeader = props => {
  console.log(props)

  const {score, time} = props
  return (
    <>
      <ul style={{backgroundColor: '#cf60c8', display: 'flex'}}>
        <img
          style={{height: '80px'}}
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <p>Score:</p>
        <p>{score}</p>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
        </div>
        <p>{time} sec</p>
      </ul>
    </>
  )
}

export default NewHeader
