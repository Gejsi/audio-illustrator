import * as React from 'react'
import styled, { css } from '../styled-components'
import { rgba } from 'polished'

const thumbStyles = css`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 0;
  background: ${({ theme }) => theme.secondary};
  transition: box-shadow 150ms;
`

export const Slider = styled.input.attrs({
  type: 'range',
  defaultValue: '0'
})`
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
    padding-left: 8px;
  }

  input {
    padding: 0 10px;
  }
`

export const AudioControls = ({ ...rest }) => (
  <Container {...rest}>
    <TimeSlider>
      <span>0:00</span>
      <Slider />
      <span>2:38</span>
    </TimeSlider>
    <VolumeSlider>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' />
      </svg>
      <Slider />
    </VolumeSlider>
  </Container>
)
