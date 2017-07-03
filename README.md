# Connect Four

Build the classic game [Connect Four] using JavaScript and React.js.

<img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>

[View on Surge](http://connect4-react-app-jp.surge.sh/)

## Required Features

- Built using [React]
- Only [functional, stateless components] are used. Components only render based
  on their `props`. Components do not have any `state`.
- There is "one source of truth" for the game's state. ie: one state object
- You can to start a game, play to completion, and then begin a new
  game, etc. ie: it never "stops"
- The application detects when a game has been won or ends in a draw.
- Players can enter their names and they are displayed on the screen.
- The game works well on a mobile device.
- All game logic code has its own module.

## Bonus Features

- There is a running scoreboard of wins / loses.
- Players should not lose their game state when the browser is refreshed.
  (this is done using [localStorage] + JSON)

[Connect Four]:https://en.wikipedia.org/wiki/Connect_Four
[React]:https://facebook.github.io/react/
[functional, stateless components]:https://facebook.github.io/react/docs/components-and-props.html#props-are-read-only
[localStorage]:https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
