import React from 'react'

function Circles (column, indexRow) {
  let className = 'white-circle'
  let columnArray = column.map(function (gamepiece, index) {
    if (gamepiece === 'yellow') className = 'yellow-gamepiece'
    if (gamepiece === 'red') className = 'red-gamepiece'
    return (
      <div key={index} className={className} />
    )
  })
  return columnArray
}

export default Circles
