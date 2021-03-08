import React, { useRef } from 'react'
import styled from '../styled-components'

const C = styled.canvas`
  width: 100vw;
  height: 25vh;
  background-color: transparent;
`

type TProps = {
  data: Uint8Array | number[] | undefined
  playing: boolean
}

export const Canvas = ({ data, playing }: TProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasCtx = canvasRef.current?.getContext('2d')

  if (canvasCtx && canvasRef.current) {
    canvasCtx.lineWidth = 2
    canvasCtx.strokeStyle = 'white'
    canvasCtx.beginPath()
    canvasCtx.moveTo(0, canvasRef.current.height / 2)

    if (playing && data) {
      canvasRef.current.width = canvasRef.current.clientWidth
      canvasRef.current.height = canvasRef.current.clientHeight

      canvasCtx.lineWidth = 2
      canvasCtx.strokeStyle = 'white'

      const sliceWidth = (window.innerWidth * 1.0) / data.length
      let x = 0.0

      for (const dataPiece of data) {
        const y = (dataPiece / 255.0) * canvasRef.current.height
        canvasCtx.lineTo(x, y)
        x += sliceWidth
      }

      canvasCtx.lineTo(x, canvasRef.current.height / 2)
    } else {
      canvasCtx.clearRect(0, 0, window.innerWidth, canvasRef.current.height)
      canvasCtx.lineTo(window.innerWidth, canvasRef.current.height / 2)
    }
    canvasCtx.stroke()
  }

  return <C ref={canvasRef} />
}
