import styled from '../styled-components'
import { rgba, darken } from 'polished'

export const FileLabel = styled.label.attrs({
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
  border-radius: 32px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.875rem;
  position: relative;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  transition: box-shadow 150ms, background 150ms;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;

  svg {
    padding-right: 12px;
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

export const FileInput = styled.input.attrs({
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
