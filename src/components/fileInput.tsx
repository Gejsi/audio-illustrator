import * as React from 'react'
import styled from '../styled-components'
import { rgba, darken } from 'polished'

const Label = styled.label.attrs({
  htmlFor: 'audio-upload'
})`
  cursor: pointer;
  outline: none;
  user-select: none;
  height: 48px;
  background: ${({ theme }) => darken(0.1, theme.secondary)};
  color: ${({ theme }) => rgba(theme.textOnPrimary, 0.87)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px 0 12px;
  margin-top: 32px;
  border-radius: 32px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.875rem;
  transition: box-shadow 150ms, background 150ms;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;

  svg {
    padding: 0 12px 0 8px;
  }

  @media (max-width: 540px) {
    padding: 0;
    height: 56px;
    width: 56px;

    span {
      display: none;
    }

    svg {
      padding: 0 12px;
    }
  }

  &:hover {
    background: ${({ theme }) => darken(0.15, theme.secondary)};
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px,
      rgba(0, 0, 0, 0.14) 0px 12px 17px 2px,
      rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
  }
`

const Input = styled.input.attrs({
  type: 'file',
  id: 'audio-upload',
  accept: 'audio/*'
})`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + label {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px,
      rgba(0, 0, 0, 0.14) 0px 12px 17px 2px,
      rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
  }
`

export const FileInput = ({ onChange, text }) => (
  <React.Fragment>
    <Input onChange={onChange} />
    <Label tabIndex={-1}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        width='24'
        height='24'
      >
        <path
          fill='currentColor'
          d='M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'
        />
      </svg>
      <span>{text || 'Upload a file'}</span>
    </Label>
  </React.Fragment>
)
