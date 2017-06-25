/* global appState */
import React from 'react'

function GetUserInput () {
  if (appState.getUserInput === true) {
    appState.getUserInput = false
    return (
      <div className='user-input-box'>
        <form>
          <input type='text' placeholder='Player 1 Name' />
          <input type='text' placeholder='Player 2 Name' />
          <input type='submit' value='Play!' />
        </form>
      </div>
    )
  }
}

// onload alerts to enter player 1 and player 2 names
// window.onload = function () {
//   // yellow (player 1) input
//   let yellowPlayerInput = window.prompt('Enter Player 1 Name')
//   if (yellowPlayerInput !== '') {
//     appState.yellowPlayerName = yellowPlayerInput
//   }
//   if (yellowPlayerInput === null) {
//     appState.yellowPlayerName = 'Player 1'
//   }
//   // red (player 2) input
//   let redPlayerInput = window.prompt('Enter Player 2 Name')
//   if (redPlayerInput !== '') {
//     appState.redPlayerName = redPlayerInput
//   }
//   if (redPlayerInput === null) {
//     appState.redPlayerName = 'Player 2'
//   }
//   // window.alert('Have Fun!')
// }

export default GetUserInput
