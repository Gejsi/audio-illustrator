import styled, { css } from '../styled-components'
import { rgba } from 'polished'

export const Button = styled.button<{ small?: boolean }>`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background 150ms;
  color: ${({ theme }) => theme.text};
  fill: currentColor;

  ${(props) =>
    props.small &&
    css`
      position: fixed;
      top: 0;
      right: 0;
      margin: 1rem;
    `}

  svg {
    width: ${(props) =>
      props.small ? 'calc(20px + 3vw)' : 'calc(3rem + 20vw)'};
    height: ${(props) =>
      props.small ? 'calc(20px + 3vh)' : 'calc(3rem + 20vh)'};
  }

  &:hover {
    background: ${({ theme }) => rgba(theme.text, 0.08)};
  }

  &:focus {
    background: ${({ theme }) => rgba(theme.text, 0.14)};
  }

  &:active {
    background: ${({ theme }) => rgba(theme.text, 0.2)};
  }
`
