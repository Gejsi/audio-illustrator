import * as React from 'react'
import styled from '../styled-components'
import Illustrator from 'audio-illustrator'
import smallImage from '../../static/astronaut-graphic-art-jl-540x960.jpg'
import bigImage from '../../static/astronaut-graphic-art-jl-1920x1080.jpg'
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
  audioData: Uint8Array | number[]
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
  overflow: none;
`

export class Demo extends React.Component<null, IState> {
  audio: HTMLAudioElement
  illustrator: Illustrator

  state = {
    file: {} as File,
    song: '',
    isPlaying: false,
    duration: 0,
    timeValue: 0,
    muted: false,
    volumeValue: 0.1,
    audioData: new Uint8Array(0)
  }

  componentDidMount() {
    this.illustrator = new Illustrator()
    this.audio.volume = this.state.volumeValue
  }

  componentWillUnmount() {
    this.illustrator.disconnect()
  }

  private setRef = e => (this.audio = e)

  private handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    this.illustrator.connect(this.audio)
    const file = target.files && target.files[0]
    const song = file && URL.createObjectURL(target.files![0])

    if (file) {
      this.setState({ file })
    }

    if (song) {
      this.illustrator.stopLoop()
      this.setState({ song })
    }
  }

  private handlePlay = () => {
    this.illustrator.startLoop(this.handlePlay)
    this.setState({ isPlaying: true, audioData: this.illustrator.getData(22) })
  }

  private handlePause = () => {
    this.illustrator.stopLoop()
    this.setState({ isPlaying: false })
  }

  private handleButtonClick = () => {
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
      volumeValue,
      audioData
    } = this.state

    return (
      <Main>
        <Wrapper>
          <FileInput onChange={this.handleChange} text={file.name} />

          <audio
            ref={this.setRef}
            autoPlay
            src={song ? song : undefined}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onLoadedData={this.handleLoadedData}
            onTimeUpdate={this.handleTimeUpdate}
            muted={muted}
          />

          <Visualizer
            isPlaying={isPlaying}
            onButtonClick={this.handleButtonClick}
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
        </Wrapper>
      </Main>
    )
  }
}
