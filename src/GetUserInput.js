/* global appState */
import React from 'react'
import {handlePlayerInput, handleClick} from './Events.js'

function GetUserInput (state) {
  if (!state.showPlayerInputForm) return
  else {
    return (
      <div className='user-input-box'>
        <input name='player1' onChange={handlePlayerInput}
          value={state.yellowPlayerName} type='text' />
        <input name='player2' onChange={handlePlayerInput}
          value={state.redPlayerName} type='text' />
        <input type='submit' onClick={handleClick} value='Start Game' />
      </div>
    )
  }
}

export default GetUserInput
