import React from 'react'

function Scoreboard (yellowPlayerName, redPlayerName, yellowPlayerTotalWins, redPlayerTotalWins) {
  return (
    <div className='scoreboard-container'>
      <div className='inner-scoreboard-containers'>
        <div className='yellow-gamepiece' />
        <h2 className='player-fonts'>{yellowPlayerName}: {yellowPlayerTotalWins} wins</h2>
      </div>
      <div className='inner-scoreboard-containers'>
        <div className='red-gamepiece' />
        <h2 className='player-fonts'>{redPlayerName}: {redPlayerTotalWins} wins</h2>
      </div>
    </div>
  )
}

export default Scoreboard
