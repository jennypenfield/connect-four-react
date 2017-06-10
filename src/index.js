import React from 'react'
import ReactDOM from 'react-dom'
import Column from './Column'
import './index.css'

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

const emptyBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

const initialState = {
  turn: true,
  board: emptyBoard
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
      {ConnectFour(state)}
      {stateExplorerComponent}
      <h6>designed by jenny penfield</h6>
    </div>
  )
}

function ConnectFour (state) {
  return (
    <section id='gameContainer'>
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

// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
