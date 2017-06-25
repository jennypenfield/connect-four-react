import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board.js'
import DisplayGameOver from './DisplayGameOver.js'
import GetUserInput from './GetUserInput.js'
import Scoreboard from './Scoreboard.js'
import StartOverBtn from './StartOverBtn.js'
import connect4Lib from 'connect4-lib'
import './index.css'

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

const INITIAL_STATE = {
  board: connect4Lib.EMPTY_BOARD,
  yellowPlayerName: 'Player 1',
  redPlayerName: 'Player 2',
  yellowTotalWins: 0,
  redTotalWins: 0,
  currentPlayer: 'y',
  isGameOver: false,
  getUserInput: true
}

let appState = INITIAL_STATE

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
      {GetUserInput()}
      <div className='messages-board-scoreboard-container'>
        <div className='messages-container'>
          {DisplayGameOver(state)}
        </div>
        {Board(state.board)}
        {Scoreboard(state.yellowPlayerName, state.redPlayerName, state.yellowTotalWins,
          state.redTotalWins)}
      </div>
      {StartOverBtn()}
      {stateExplorerComponent}
      <h6>designed by <a className='link' href='https://github.com/jennypenfield'>jenny penfield</a></h6>
    </div>
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
