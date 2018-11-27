import React, { Component } from 'react'
import { render } from 'react-dom'
import Illustrator, { LinearBars } from 'react-audio-illustrator'

class App extends Component<any, any> {
  audio: HTMLAudioElement | null
  state = {
    song: '',
    rotate: 0
  }

  handleChange = ({ target }) => {
    const song = target.files[0] && URL.createObjectURL(target.files[0])

    if (song) this.setState({ song })
    else if (this.audio) this.audio.play()
  }

  handleClick = () => {
    if (this.audio) this.audio.pause()
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <input
          type='file'
          accept='audio/*'
          onChange={this.handleChange}
          onClick={this.handleClick}
        />

        <Illustrator
          audioRef={this.audio}
          render={({ audioData, startAnimation, stopAnimation }) => (
            <React.Fragment>
              <audio
                ref={e => (this.audio = e)}
                controls
                src={this.state.song ? this.state.song : undefined}
                autoPlay={true}
                onPlay={this.state.song ? startAnimation : undefined}
                onPause={stopAnimation}
              />

              <LinearBars bars={52} audioData={audioData} axis='y-negative' />
            </React.Fragment>
          )}
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
