import { Component } from 'react'

interface IProps {
  audioRef: HTMLMediaElement
  children: any
}

export class Illustrator extends Component<IProps, { audioData: Uint8Array }> {
  private audioSrc: MediaElementAudioSourceNode
  private analyser: AnalyserNode
  private id: number

  state = { audioData: new Uint8Array(0) }

  componentWillUnmount() {
    this.stopLoop()
    if (this.audioSrc) this.audioSrc.disconnect()
    
    if (this.analyser) this.analyser.disconnect()
  }

  componentDidUpdate(prevProps) {
    if (this.props.audioRef !== prevProps.audioRef) {
      const ctx = new (AudioContext || webkitAudioContext)()
      this.audioSrc = ctx.createMediaElementSource(this.props.audioRef)
      this.analyser = ctx.createAnalyser()

      this.audioSrc.connect(this.analyser)
      this.analyser.connect(ctx.destination)
      this.analyser.fftSize = 256
    }
  }

  startLoop = () => {
    this.id = requestAnimationFrame(this.startLoop)

    const bufferLength = this.analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)
    this.analyser.getByteFrequencyData(dataArray)

    this.setState({ audioData: dataArray })
  }

  stopLoop = () => {
    cancelAnimationFrame(this.id)
  }

  render() {
    return this.props.children({
      audioData: this.state.audioData,
      startLoop: this.startLoop,
      stopLoop: this.stopLoop
    })
  }
}