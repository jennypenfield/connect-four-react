/* global appState */
import React from 'react'
import {handleSubmit} from './Events.js'

function handleChange (evt) {
  if (evt.target.name === 'player1') appState.modalP1 = evt.target.value
  if (evt.target.name === 'player2') appState.modalP2 = evt.target.value
}

function GetUserInput (state) {
  return (
    <div className='user-input-box'>
      <h2>Enter player names:</h2>
      <form onSubmit={handleSubmit}>
        <input name='player1' className='player-box'
          value={state.modalP1} onChange={handleChange} placeholder='Player 1' type='text' />
        <input name='player2' className='player-box'
          value={state.modalP2} onChange={handleChange} placeholder='Player 2' type='text' />
        <input type='submit' className='start-game-btn' value='Start Game' />
      </form>
    </div>
  )
}

export default GetUserInput
