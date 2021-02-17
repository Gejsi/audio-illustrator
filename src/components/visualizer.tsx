import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styled from '../styled-components'
import Illustrator from 'audio-illustrator'

const Canvas = styled.canvas`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 20vh;
`

export const Visualizer = ({ audioEl }) => {
  const canvasEl = useRef(null)
  const WIDTH = 821
  const HEIGHT = 300

  return <Canvas ref={canvasEl} />
}
