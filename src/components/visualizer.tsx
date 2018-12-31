import * as React from 'react'
import styled from '../styled-components'
import { IconButton } from './iconButton'
import { PauseIcon, PlayIcon } from '../icons'
import { size } from 'polished'

const Container = styled.div`
  flex: 0.75;
  display: flex;
  align-items: center;
`

const Button = styled(IconButton)`
  border: 2px solid currentColor;
  transform: translateY(-38px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  ${size(64)}

  @media (max-width: 540px) {
    ${size(48)}
    transform: translateY(-24px);

    svg {
      ${size(24)}
    }
  }
`

const Bars = styled.svg`
  height: 40%;
  width: 80%;
  fill: ${({ theme }) => theme.secondary};
  fill-opacity: 0.5;

  @media (max-width: 540px) {
    width: 100%;
  }
`

const LinearBars = ({ bars, audioData }) => {
  const barsArray: number[] = Array.from({ length: bars }, (_, k) => k)

  return (
    <Bars>
      {barsArray.map(n => (
        <rect
          key={n.toString()}
          width={100 / barsArray.length + '%'}
          height={audioData.length !== 0 ? (audioData[n] / 255) * 100 + '%' : 0}
          x={(100 / barsArray.length) * n + '%'}
          y={
            audioData.length !== 0 ? 100 - (audioData[n] / 255) * 100 + '%' : 0
          }
        />
      ))}
    </Bars>
  )
}

interface IProps {
  isPlaying: boolean
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  audioData: Uint8Array
}

export const Visualizer = ({ isPlaying, onButtonClick, audioData }: IProps) => (
  <React.Fragment>
    <Container>
      <Button onClick={onButtonClick}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>
    </Container>
    <LinearBars bars={22} audioData={audioData} />
  </React.Fragment>
)
