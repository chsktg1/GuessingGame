/* eslint-disable react/destructuring-assignment */

import {Component} from 'react'

import './App.css'

import NewHeader from './components/NewHeader'

import Header from './components/Header'

import MainPage from './components/MainPage'

import GameOver from './components/GameOver'

// Replace your code here
class App extends Component {
  state = {score: 0, lost: false, time: 60}

  positive = c => {
    if (c === 1) {
      const {score} = this.state
      this.setState({score: score + 1})
    } else {
      this.setState({lost: true})
    }
  }

  timedOut = time => {
    this.setState({lost: true, time})
  }

  play = () => {
    this.setState({lost: false, score: 0})
  }

  timeInApp = a => {
    this.setState({time: a})
  }

  render() {
    const {score, lost, time} = this.state

    return lost ? (
      <>
        <NewHeader score={score} timedOut={this.timedOut} time={time} />
        <GameOver score={score} play={this.play} />
      </>
    ) : (
      <>
        <Header
          score={score}
          timedOut={this.timedOut}
          lost={lost}
          timeInApp={this.timeInApp}
        />
        <MainPage positive={this.positive} />
      </>
    )
  }
}
export default App
