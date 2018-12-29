import * as React from 'react'
import styled, { css } from '../styled-components'
import { rgba } from 'polished'
import { humanizeTime } from '../utils'
import { IconButton } from './iconButton'
import { VolumeOff, VolumeOn } from '../icons'

const thumbStyles = css`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 0;
  background: ${({ theme }) => theme.secondary};
  transition: box-shadow 150ms;
`

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  height: 38px;
  cursor: pointer;

  &:focus {
    outline: none;
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 12px ${({ theme }) => rgba(theme.secondary, 0.16)};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 12px ${({ theme }) => rgba(theme.secondary, 0.16)};
    }
    &::-ms-thumb {
      box-shadow: 0 0 0 12px ${({ theme }) => rgba(theme.secondary, 0.16)};
    }
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -5.2px;
    ${thumbStyles};

    @supports (-ms-ime-align: auto) {
      margin-top: 0;
    }
  }

  &::-moz-range-thumb {
    ${thumbStyles}
  }

  &::-ms-thumb {
    ${thumbStyles}
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => rgba(theme.secondary, 0.24)};
  }

  &::-moz-range-track {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => rgba(theme.secondary, 0.24)};
  }

  &::-ms-track {
    width: 100%;
    height: 2px;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-upper,
  &::-ms-fill-lower {
    background: ${({ theme }) => rgba(theme.secondary, 0.24)};
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
  width: 80%;
  margin: 0 auto 32px auto;
  transition: width 150ms;

  @media (max-width: 540px) {
    width: 100%;
  }
`

const TimeSlider = styled.div`
  display: flex;
  flex: 2;

  span {
    align-self: center;
    padding: 0 10px;
  }
`

const VolumeSlider = styled.div`
  display: flex;
  flex: 1;

  svg {
    fill: currentColor;
    opacity: 0.87;
    align-self: center;
  }

  input {
    padding: 0 10px;
  }
`

interface IProps {
  duration: number
  timeValue: number
  onTimeInput: (event: React.FormEvent<HTMLInputElement>) => void
  onTimeChange: (
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
      | React.TouchEvent<HTMLInputElement>
  ) => void
  onMute: (event: React.MouseEvent<HTMLButtonElement>) => void
  muted: boolean
  volumeValue: number
  onVolumeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const AudioControls = ({
  duration,
  timeValue,
  onTimeInput,
  onTimeChange,
  onMute,
  muted,
  volumeValue,
  onVolumeInput,
  ...rest
}: IProps) => (
  <Container {...rest}>
    <TimeSlider>
      <span>{humanizeTime(timeValue)}</span>
      <Slider
        type='range'
        onInput={onTimeInput}
        onMouseUp={onTimeChange}
        onKeyUp={onTimeChange}
        onTouchEnd={onTimeChange}
        min='0'
        max={duration}
        value={timeValue}
        readOnly
      />
      <span>{humanizeTime(duration)}</span>
    </TimeSlider>
    <VolumeSlider>
      <IconButton onClick={onMute}>
        {muted ? <VolumeOff /> : <VolumeOn />}
      </IconButton>
      <Slider
        type='range'
        onChange={onVolumeInput}
        value={volumeValue}
        min='0'
        max='1'
        step='0.01'
      />
    </VolumeSlider>
  </Container>
)
