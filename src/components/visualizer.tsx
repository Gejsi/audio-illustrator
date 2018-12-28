import * as React from 'react'
import { LinearBars } from 'react-audio-illustrator'
import styled from '../styled-components'
import { IconButton } from './iconButton'
import { PauseIcon, PlayIcon } from '../icons'

const Container = styled.div`
  flex: 0.75;
  display: flex;
  align-items: center;
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
}

export const Visualizer = ({ isPlaying, onButtonClick, audioData }: IProps) => (
  <React.Fragment>
    <Container>
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
