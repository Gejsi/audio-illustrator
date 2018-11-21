<h1 align="center">React Audio Illustrator</h1>
<h4 align="center">
  Visualize audio easily by creating highly customizable illustrators. <br />
  If you are lazy, don't worry, I have already made a bunch of them 😉.
</h4>

## Basic Usage

Setting up an Illustrator is very quick:

```jsx
import Illustrator, { LinearBars } from 'react-audio-illustrator'
// Rest of the class
<Illustrator
  audioRef={this.audio}
  render={({ audioData, startAnimation, stopAnimation }) => (
    <React.Fragment>
      <audio
        ref={e => (this.audio = e)}
        src={this.state.song ? this.state.song : undefined}
        onPlay={this.state.song ? startAnimation : undefined}
        onPause={stopAnimation}
      />

      <LinearBars bars={52} audioData={audioData} />
    </React.Fragment>
  )}
/>
```

## Documentation

### `<Illustrator />`

This is the most important component: it provides the data got from the current playing audio. <br /> It uses the 'render prop' / 'facc' technique for sharing this data through props:

- props.audioData: array of numbers between 0 and 255
- props.startAnimation: function to start receiving data
- props.stopAnimation: function to stop receiving data

#### Available properties

| Props    |    Type     | Default |                     Description |
| -------- | :---------: | :-----: | ------------------------------: |
| audioRef | func/object |  null   | Passes the ref of the audio tag |
| render   |    func     |  null   |         function(props) => void |
| children |    func     |  null   |         function(props) => void |

### `<LinearBars />`

This is the most basic visualizer: it renders some straight bars.

#### Available properties

| Props      |    Type    |  Default  |                                                    Description |
| ---------- | :--------: | :-------: | -------------------------------------------------------------: |
| bars       |   number   |     0     |                  Sets the number of bars that will be rendered |
| audioData  | Uint8Array | undefined | Passes the audioData received by [Illustrator](#<illustrator>) |
| barsStyles |   object   |   null    |                             Sets the styles for the inner bars |

### `<RadialBars />`

This visualizer renders bars in a radial arrangement.

#### Available properties

| Props           |    Type    |  Default  |                                                    Description |
| --------------- | :--------: | :-------: | -------------------------------------------------------------: |
| bars            |   number   |     0     |                  Sets the number of bars that will be rendered |
| audioData       | Uint8Array | undefined | Passes the audioData received by [Illustrator](#<illustrator>) |
| barsStyles      |   object   |   null    |                             Sets the styles for the inner bars |
| maxHeight       |   number   |    10     |    Sets the max height of the inner bars to be this percentage |
| gap             |   number   |    20     |                                  Sets the gap between each bar |
| spaceFromCenter |   number   |     0     |                                Pushes the bars from the center |

### `<PulsingCircles />`

This visualizer renders circles from the center of the svg.

#### Available properties

| Props      |    Type    |  Default  |                                                    Description |
| ---------- | :--------: | :-------: | -------------------------------------------------------------: |
| circles    |   number   |     0     |               Sets the number of circles that will be rendered |
| audioData  | Uint8Array | undefined | Passes the audioData received by [Illustrator](#<illustrator>) |
| barsStyles |   object   |   null    |                          Sets the styles for the inner circles |
