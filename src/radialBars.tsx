import React, { Component } from 'react'
import { IBarsProps } from './types'

interface IProps extends IBarsProps {
  maxHeight?: number
  gap?: number
  spaceFromCenter?: number
}

interface IState {
  width: number
  height: number
}

export class RadialBars extends Component<IProps, IState> {
  private container: SVGSVGElement

  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    this.handleResize()

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  private handleResize = () => {
    const { clientWidth: width } = this.container
    const { clientHeight: height } = this.container

    this.setState({ width, height })
  }

  private setRef = el => (this.container = el)

  render() {
    const {
      bars,
      audioData,
      maxHeight,
      gap,
      spaceFromCenter,
      barsStyles,
      ...rest
    } = this.props

    const { width, height } = this.state

    const barsArray: number[] = Array.from({ length: bars }, (v, k) => k)

    return (
      <svg width='100%' height='100%' ref={this.setRef} {...rest}>
        {barsArray.map(n => {
          return (
            <rect
              key={n.toString()}
              width={(100 - (gap || 20)) / barsArray.length + '%'}
              height={
                audioData.length !== 0
                  ? (audioData[n] / 255) * (maxHeight || 10) + '%'
                  : 0
              }
              x={50 - 100 / barsArray.length / 2 + '%'}
              y={50 + 100 / barsArray.length / 2 + (spaceFromCenter || 0) + '%'}
              transform={`rotate(${(n * 360) / barsArray.length + 180},
                ${width / 2}, ${height / 2})`}
              style={barsStyles}
            />
          )
        })}
      </svg>
    )
  }
}
