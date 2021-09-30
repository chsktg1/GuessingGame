/* eslint-disable react/destructuring-assignment */
import {Component} from 'react'

class Header extends Component {
  state = {time: 60}

  componentDidMount() {
    this.updateTime()
  }

  updateTime = () => {
    const {timeInApp} = this.props
    const id = setInterval(() => {
      this.setState(
        p => ({id, time: p.time - 1}),
        () => timeInApp(this.state.time),
      )
    }, 1000)
  }

  alpha = () => {
    const {id} = this.state
    const {timedOut} = this.props
    clearInterval(id)
    const {time} = this.state
    timedOut(time)
  }

  clearTimer() {
    const {id} = this.state
    clearInterval(id)
  }

  render() {
    const {score, lost} = this.props
    const {time} = this.state
    return time !== 0 || lost ? (
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
    ) : (
      <>
        {this.alpha()}
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
}

export default Header
