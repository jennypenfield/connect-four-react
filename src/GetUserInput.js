import React from 'react'
import {handlePlayerInput, handleClick} from './Events.js'

function GetUserInput (state) {
  return (
    <div className='user-input-box'>
      <h6>Enter player names:</h6>
      <input name='player1' onChange={handlePlayerInput} className='player-box'
        value={state.yellowPlayerName} placeholder='Player 1' type='text' />
      <input name='player2' onChange={handlePlayerInput} className='player-box'
        value={state.redPlayerName} placeholder='Player 2' type='text' />
      <input type='submit' onClick={handleClick} className='start-game-btn' value='Start Game' />
    </div>
  )
}

export default GetUserInput
