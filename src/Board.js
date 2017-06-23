import React from 'react'
import Column from './Column.js'

function Board (board) {
  return (
    <div className='board-container'>
      {Column(board)}
    </div>
  )
}

export default Board
