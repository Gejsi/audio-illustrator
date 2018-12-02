import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { rgba, lighten } from 'polished'

export const Bar = styled.nav`
  height: 72px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => rgba(theme.textOnPrimary, 0.87)};
  transition: height 150ms;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  @media (max-width: 960px) {
    height: 64px;
  }
`

const GHLink = styled.a`
  display: flex;

  h3 {
    text-decoration: underline dotted;
    margin: 0;
    font-weight: 500;
    font-size: 1.25rem;
    padding: 0 12px;
  }

  &:before,
  &:after {
    content: '•';
    align-self: center;
    padding: 0 6px;
    font-size: 1.5rem;
  }
`

const RouterLink = styled(Link)`
  height: 60%;
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  padding: 2px 12px 0 12px;
  transition: background-color 150ms, color 150ms;
  font-size: 0.875rem;

  &:hover,
  &:focus {
    background: ${({ theme }) => rgba(theme.text, 0.2)};
  }

  &:active {
    background: ${({ theme }) => lighten(0.1, theme.primary)};
  }
`

export const Navbar = props => (
  <Bar {...props}>
    <RouterLink to='/'>Demo</RouterLink>
    <GHLink
      href='https://github.com/Gejsi/react-audio-illustrator/'
      target='_blank'
      rel='external'
      title='Go to GitHub page'
    >
      <h3>react-audio-illustrator</h3>
    </GHLink>
    <RouterLink to='/docs'>Docs</RouterLink>
  </Bar>
)
