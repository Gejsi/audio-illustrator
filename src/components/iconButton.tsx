import styled from '../styled-components'
import { rgba } from 'polished'

export const IconButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  transition: background 150ms;
  color: ${({ theme }) => theme.text};
  fill: currentColor;

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
