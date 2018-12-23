import * as React from 'react'
import { LinearBars } from 'react-audio-illustrator'
import styled from '../styled-components'
import { IconButton } from './iconButton'
import { PauseIcon, PlayIcon } from '../icons'

const Container = styled.div<{ visible: boolean }>`
  flex: 0.75;
  display: flex;
  align-items: center;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 400ms;
`

const Bars = styled(LinearBars)`
  height: 40%;
  width: 80%;
  fill: ${({ theme }) => theme.secondary};
  fill-opacity: 0.5;

  @media (max-width: 540px) {
    width: 100%;
  }
`

interface IProps {
  isPlaying: boolean
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  audioData: Uint8Array
  visible: boolean
}

export const Visualizer = ({
  isPlaying,
  onButtonClick,
  audioData,
  visible
}: IProps) => (
  <React.Fragment>
    <Container visible={visible}>
      <IconButton
        style={{
          border: '2px solid currentColor',
          transform: 'translateY(-38px)'
        }}
        onClick={onButtonClick}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
    </Container>
    <Bars bars={32} audioData={audioData} />
  </React.Fragment>
)
