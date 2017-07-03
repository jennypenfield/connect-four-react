import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board.js'
import DisplayGameOver from './DisplayGameOver.js'
import GetUserInput from './GetUserInput.js'
import Scoreboard from './Scoreboard.js'
import {StartOverBtn, getSavedState, saveState} from './Events.js'
import connect4Lib from 'connect4-lib'
import './index.css'

const INITIAL_STATE = {
  board: connect4Lib.EMPTY_BOARD,
  yellowPlayerName: '',
  redPlayerName: '',
  yellowTotalWins: 0,
  redTotalWins: 0,
  currentPlayer: 'y',
  isGameOver: false,
  showPlayerInputForm: true,
  modalP1: '',
  modalP2: ''
}

window.appState = INITIAL_STATE

function App (state) {
  let page = null
  if (state.showPlayerInputForm) page = GetUserInput(state)
  let displayGO = null
  if (state.isGameOver === true) displayGO = DisplayGameOver(state.board)
  return (
    <div className='app-container'>
      <h1>CONNECT FOUR</h1>
      {page}
      <div className='messages-board-scoreboard-container'>
        <div className='messages-container'>
          {displayGO}
        </div>
        {Board(state.board)}
        {Scoreboard(state.yellowPlayerName, state.redPlayerName, state.yellowTotalWins,
          state.redTotalWins)}
      </div>
      {StartOverBtn()}
      <h6>designed by <a className='link' href='https://github.com/jennypenfield'>jenny penfield</a></h6>
    </div>
  )
}

getSavedState()

console.log(window.localStorage.state)
console.log(window.appState.board)

// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  saveState()
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
