/* global appState */
import React from 'react'

function handlePlayerInput (evt) {
  console.log('handleplayerinput')
  let player = evt.target
  if (player.name === 'player1') appState.yellowPlayerName = player.value
  if (player.name === 'player2') appState.redPlayerName = player.value
}

function handleClick () {
  appState.showPlayerInputForm = false
  console.log(appState.showPlayerInputForm)
}

export {
  handlePlayerInput,
  handleClick
}
