/* global appState */
import React from 'react'

function handlePlayerInput (evt) {
  let player = evt.target
  console.log(player.value);
  if (player.name === 'player1') {
    if (player.value === '' || player.value === null) {
      appState.yellowPlayerName = 'Player 1'
    } else {
      appState.yellowPlayerName = player.value
      console.log('player1');
    }
  } else {
    if (player.value === '' || player.value === null) {
      appState.redPlayerName = 'Player 2'
    } else {
      appState.redPlayerName = player.value
      console.log('player2');
    }
  }
}

function handleClick () {
  appState.showPlayerInputForm = false
}

export {
  handlePlayerInput,
  handleClick
}
