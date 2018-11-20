import { Component, ReactNode } from 'react'
import { hasRender, hasChildren } from './types'

type IProps = { audioRef: HTMLAudioElement | null } & RenderProps

type RenderProps =
  | { children: (props: Data) => ReactNode }
  | { render: (props: Data) => ReactNode }

type Data = ReturnType<Illustrator['renderData']>

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
      const ctx: AudioContext = new (AudioContext || webkitAudioContext)()
      this.audioSrc = ctx.createMediaElementSource(this.props.audioRef!)
      this.analyser = ctx.createAnalyser()

      this.audioSrc.connect(this.analyser)
      this.analyser.connect(ctx.destination)
      this.analyser.fftSize = 256
    }
  }

  private startLoop = () => {
    this.id = requestAnimationFrame(this.startLoop)

    const bufferLength: number = this.analyser.frequencyBinCount
    const dataArray: Uint8Array = new Uint8Array(bufferLength)
    this.analyser.getByteFrequencyData(dataArray)

    this.setState({ audioData: dataArray })
  }

  private stopLoop = () => {
    cancelAnimationFrame(this.id)
  }

  private renderData = () => {
    return {
      audioData: this.state.audioData,
      startAnimation: this.startLoop,
      stopAnimation: this.stopLoop
    }
  }

  render() {
    if (hasRender(this.props)) {
      return this.props.render(this.renderData())
    }

    if (hasChildren(this.props)) {
      return this.props.children(this.renderData())
    }

    throw new Error(
      'Render prop or children are mandatory and they must be a function.'
    )
  }
}
