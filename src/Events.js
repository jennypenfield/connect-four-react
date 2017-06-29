/* global appState */

function handlePlayerInput () {
  // set yellow player name
  if (appState.modalP1.length > 0) {
    appState.yellowPlayerName = appState.modalP1
  } else {
    appState.yellowPlayerName = 'Player 1'
  }
    // set red player name
  if (appState.modalP2.length > 0) {
    appState.redPlayerName = appState.modalP2
  } else {
    appState.redPlayerName = 'Player 2'
  }
}

function handleSubmit (evt) {
  evt.preventDefault()
  handlePlayerInput()
  appState.showPlayerInputForm = false
}

export {
  handlePlayerInput,
  handleSubmit
}
