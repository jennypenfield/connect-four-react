/* global appState */
import React from 'react'
import Column from './Column.js'

function Board (boardstate) {
  return (
    <div className='board-container'>
      {Column(boardstate)}
    </div>
  )
}

export default Board
