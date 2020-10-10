import React, { RefObject, useState } from 'react'
import styled, { withTheme } from '../styled-components'
import { AudioControls } from './audioControls'
import { IconButton } from './iconButton'
import { PauseIcon, PlayIcon } from './icons'
import { size } from 'polished'

export const Bar = styled.nav`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  min-height: 4.5rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  padding: 0 0.625rem;
`

const Button = styled(IconButton)`
  border: 2px solid currentColor;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  ${size(38)};

  svg {
    ${size(24)}
  }
`

type Props = {
  audioEl: RefObject<HTMLAudioElement>
  timeValue: number
  duration: number
  handleMute: any
  muted: boolean
}

const Nav = ({ audioEl, timeValue, duration, handleMute, muted }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volumeValue, setVolumeValue] = useState(0.2)

  const handleClick = () => {
    setIsPlaying(!isPlaying)

    if (isPlaying) audioEl.current?.pause()
    else audioEl.current?.play()
  }

  const handleTimeInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (audioEl.current) {
      audioEl.current.currentTime = target.valueAsNumber
      audioEl.current.volume = 0
    }
  }

  const handleVolumeInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setVolumeValue(target.valueAsNumber)

    if (audioEl.current) audioEl.current.volume = target.valueAsNumber
  }

  const handleTimeChange = () => {
    if (audioEl.current) audioEl.current.volume = volumeValue
  }

  return (
    <Bar>
      <Button onClick={handleClick}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>
      <AudioControls
        duration={duration}
        muted={muted}
        onMute={handleMute}
        onTimeChange={handleTimeChange}
        onTimeInput={handleTimeInput}
        timeValue={timeValue}
        onVolumeInput={handleVolumeInput}
        volumeValue={volumeValue}
      />
    </Bar>
  )
}

export const Navbar = withTheme(Nav)
