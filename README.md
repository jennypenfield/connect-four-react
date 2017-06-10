# Connect Four

Build the classic game [Connect Four] using JavaScript and React.js.

## Required Features

- Built using [React]
- Use only [functional, stateless components]. Components should only render based
  on their `props`. Components should not have any `state`.
- There should be "one source of truth" for the game's state. ie: one state object
- You should be able to start a game, play to completion, and then begin a new
  game, etc. ie: it never "stops"
- The application should detect when a game has been won or ends in a draw.
- Players should be able to enter their names and have them displayed on the screen.
- The game should work well on a mobile device. Imagine two friends passing a phone
  back and forth while waiting in line for a concert or similar.
- Use plentiful `console.assert()` statements to unit test your game logic code.
- Put all game logic code into it's own module.

## Bonus Features

- Keep a running scoreboard of wins / loses.
- Players should not lose their game state when the browser is refreshed.
  - Hint: use [localStorage] + JSON
- Record a history of the games. Be able to "play back" old games.

[Connect Four]:https://en.wikipedia.org/wiki/Connect_Four
[React]:https://facebook.github.io/react/
[functional, stateless components]:https://facebook.github.io/react/docs/components-and-props.html#props-are-read-only
[localStorage]:https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
