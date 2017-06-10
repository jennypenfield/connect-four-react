import React from 'react'
import './index.css'
import Circles from './Circles.js'

function Column (board) {
  let arrColumns = board.map(function (column, index) {
    return (
      <div key={index} className='column'>
        {Circles(column)}
      </div>
    )
  })
  return arrColumns
}

export default Column
