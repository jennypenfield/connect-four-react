import React from 'react'
import './index.css'

function Circles (column) {
  console.log(column)
  let columnArray = column.map(function (circle, index) {
    return (
      <div key={index} className='circles' />
    )
  })
  return columnArray
}

export default Circles
