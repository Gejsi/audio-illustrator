import * as React from 'react'
import styled from '../styled-components'
import Illustrator from 'react-audio-illustrator'
import smallImage from '../../static/astronaut-graphic-art-jl-540x960.jpg'
import bigImage from '../../static/astronaut-graphic-art-jl-1920x1080.jpg'
import localSong from '../../static/amstergates.mp3'
import { Container } from '../components/container'
import { FileInput } from '../components/fileInput'
import { AudioControls } from '../components/audioControls'
import { Visualizer } from '../components/visualizer'

interface IState {
  file: File
  song: string
  isPlaying: boolean
  duration: number
  timeValue: number
  muted: boolean
  volumeValue: number
}

const Main = styled.div`
  background-image: url(${smallImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.background};

  height: 100vh;

  @media (min-width: 540px) {
    background-image: url(${bigImage});
  }
`

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export class Demo extends React.Component<null, IState> {
  audio: HTMLAudioElement

  state = {
    file: {} as File,
    song: '',
    isPlaying: false,
    duration: 0,
    timeValue: 0,
    muted: false,
    volumeValue: 0.1
  }

  componentDidMount() {
    this.audio.volume = this.state.volumeValue

    this.setState({ song: localSong })
  }

  private setRef = e => (this.audio = e)

  private handleChange = (
    stopAnimation,
    { target }: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = target.files && target.files[0]
    const song = file && URL.createObjectURL(target.files![0])

    if (file) {
      this.setState({ file })
    }

    if (song) {
      stopAnimation()
      this.setState({ song })
    }
  }

  private handlePlay = startAnimation => {
    this.setState({ isPlaying: true })
    startAnimation()
  }

  private handlePause = stopAnimation => {
    this.setState({ isPlaying: false })
    stopAnimation()
  }

  private onButtonClick = () => {
    if (this.state.song) {
      if (this.state.isPlaying) this.audio.pause()
      else this.audio.play()
    }
  }

  private handleLoadedData = () => {
    if (this.state.song) this.setState({ duration: this.audio.duration })
  }

  private handleTimeUpdate = () => {
    this.setState({ timeValue: this.audio.currentTime })
  }

  private handleTimeInput = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.audio.currentTime = target.valueAsNumber
    this.setState({ muted: true })
  }

  private handleTimeChange = () => {
    this.setState({ muted: false })
  }

  private handleVolumeInput = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ volumeValue: target.valueAsNumber })

    this.audio.volume = target.valueAsNumber
  }

  render() {
    const {
      file,
      song,
      isPlaying,
      duration,
      timeValue,
      muted,
      volumeValue
    } = this.state

    return (
      <Main>
        <Wrapper>
          <Illustrator audioRef={this.audio}>
            {({ audioData, startAnimation, stopAnimation }) => (
              <React.Fragment>
                <FileInput
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.handleChange(stopAnimation, e)
                  }
                  text={file.name}
                />

                <audio
                  ref={this.setRef}
                  src={song ? song : undefined}
                  autoPlay
                  onPlay={() => this.handlePlay(startAnimation)}
                  onPause={() => this.handlePause(stopAnimation)}
                  onLoadedData={this.handleLoadedData}
                  onTimeUpdate={this.handleTimeUpdate}
                  muted={muted}
                />

                <Visualizer
                  isPlaying={isPlaying}
                  onButtonClick={this.onButtonClick}
                  audioData={audioData}
                />

                <AudioControls
                  duration={duration}
                  timeValue={timeValue}
                  onTimeInput={this.handleTimeInput}
                  onTimeChange={this.handleTimeChange}
                  onMute={() => this.setState({ muted: !muted })}
                  muted={muted}
                  volumeValue={volumeValue}
                  onVolumeInput={this.handleVolumeInput}
                />
              </React.Fragment>
            )}
          </Illustrator>
        </Wrapper>
      </Main>
    )
  }
}
