import React from 'react'
import ReactDOM from 'react-dom'
import Column from './Column'
import connect4Lib from 'connect4-lib'
import './index.css'

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

const initialState = {
  board: connect4Lib.EMPTY_BOARD,
  player1: '',
  player2: '',
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

window.appState = initialState

function App (state) {
  let stateExplorerComponent = null
  if (showStateExplorer) stateExplorerComponent = StateExplorer(state)

  return (
    <div id='appContainer'>
      <h1>CONNECT FOUR</h1>
      {Screen(state)}
      {stateExplorerComponent}
      <h6>designed by jenny penfield</h6>
    </div>
  )
}

function Screen (state) {
  return (
    <section className='game-container'>
      {Board(state.board)}
    </section>
  )
}

function Board (state) {
  return (
    <div className='board-container'>
      {Column(state)}
    </div>
  )
}

function highlightWinner (board) {
  if (connect4Lib.gameStatus(board) === 'tie') {}
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
