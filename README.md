<h1 align="center">Audio Illustrator</h1>
<h4 align="center">
  Visualize audio easily by creating highly customizable illustrators.
</h4>

## Install

```bash
npm install audio-illustrator
```

## Documentation

This package provides a simple class that helps receiving data from an audio, <br />
which can be used to create illustrators. There are a lot of packages that give <br />
pre-made components which aren't very customizable, because you can only modify <br />
them by changing some attributes but you can't create a new one.

```js
import Illustrator from 'audio-illustrator'

const illustrator = new Illustrator()

illustrator.connect(document.querySelector('#myAudio'))

const startDrawing = () => {
  illustrator.startLoop(draw)
  // Get data for 18 items
  const audioData = illustrator.getData(18)
  // draw on canvas...
}

const stopDrawing = () => illustrator.stopLoop()
```

#### `illustrator.connect(audioElement: HTMLAudioElement)`

Creates the objects which store the data.

#### `illustrator.disconnect()`

Dismantles the objects which store the data.

#### `illustrator.getData(items?: number)`

Stores the data for the amount of items you need (default is 128).

#### `illustrator.startLoop(callback: FrameRequestCallback)`

Starts the loop using `requestAnimationFrame()`

#### `illustrator.stopLoop()`

Stops the loop using `cancelAnimationFrame()`

## Usage with React

```jsx
import * as React from 'react'
import Illustrator from 'audio-illustrator'

const illustrator = new Illustrator()

class App extends React.Component {
  state = { audioData: new Uint8Array(0) }

  componentDidMount() {
    illustrator.connect(this.audioRef)
  }

  componentWillUnmount() {
    illustrator.disconnect()
  }

  handlePlay() {
    illustrator.startLoop()

    this.setState({ audioData: illustrator.getData(18) })
  }

  handlePause() {
    illustrator.stopLoop()
  }

  render() {
    return (
      <div>
        <audio
          ref={e => (this.audioRef = e)}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
        />
      </div>
    )
  }
}
```
