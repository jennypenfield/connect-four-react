import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board.js'
import Scoreboard from './Scoreboard.js'
import connect4Lib from 'connect4-lib'
import './index.css'

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

const INITIAL_STATE = {
  board: connect4Lib.EMPTY_BOARD,
  gameStatus: connect4Lib.gameStatus,
  yellowPlayerName: '',
  RedPlayerName: '',
  yellowTotalWins: 0,
  redTotalWins: 0,
  currentPlayer: 'yellow',
  gameOver: false,
  winnerCoord: null
}

function StateExplorer (state) {
  const stateJSON = JSON.stringify(state, null, 2)

  return (
    <section id='explorerContainer'>
      <h1>State Explorer</h1>
      <textarea value={stateJSON} />
    </section>
  )
}

window.appState = INITIAL_STATE

function App (state) {
  let stateExplorerComponent = null
  if (showStateExplorer) stateExplorerComponent = StateExplorer(state)

  return (
    <div className='app-container'>
      <h1>CONNECT FOUR</h1>
      <div className='buttons-board-scoreboard-container'>
        <div className='left-container' />
        {Board(state.board)}
        {Scoreboard(state.yellowPlayerName, state.redPlayerName, state.yellowTotalWins,
          state.redTotalWins)}
      </div>
      <button className='game-btn' onClick={startOverBtn}>Start Over</button>
      {stateExplorerComponent}
      <h6>designed by jenny penfield</h6>
    </div>
  )
}

function startOverBtn () {
  return (
    window.appState = INITIAL_STATE
  )
}

// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
