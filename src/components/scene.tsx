import React, { forwardRef } from 'react'
import styled from '../styled-components'
import { Button } from '../components/button'
import { PauseIcon, PlayIcon } from '../components/icons'

const S = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: calc(30px + 2vw);
    margin: 1rem 0;
    position: static !important;
  }

  p {
    font-size: calc(20px + 1vw);
    margin: 0;
    position: static !important;
  }
`

type TProps = {
  onClick: () => void
  playing: boolean
  id: number
}

export const Scene = forwardRef<HTMLDivElement, TProps>(
  ({ onClick, playing, id }, ref) => (
    <S ref={ref}>
      <div data-depth='0.6'>
        <Button onClick={onClick}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
      </div>
      <h1 data-depth='0.4'>
        {id === 0 ? 'Jack Stauber' : id === 1 ? 'Joji' : 'Amstergates'}
      </h1>

      <p data-depth='0.7'>
        {id === 0
          ? 'Buttercup'
          : id === 1
          ? 'Yeah Right'
          : "Can't get over you"}
      </p>
    </S>
  )
)
