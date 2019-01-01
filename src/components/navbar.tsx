import * as React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styled, { withTheme, css } from '../styled-components'
import { rgba } from 'polished'

export const Bar = styled.nav`
  padding: 0 24px;
  height: 72px;
  background: ${({ theme }) => rgba(theme.tertiary, 0.8)};
  color: ${({ theme }) => rgba(theme.text, 0.87)};
  transition: height 150ms, min-width 150ms, background 150ms;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 40%;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  box-shadow: ${({ theme }) => rgba(theme.tertiary, 0.2)} 0px 2px 4px -1px,
    ${({ theme }) => rgba(theme.tertiary, 0.14)} 0px 4px 5px 0px,
    ${({ theme }) => rgba(theme.tertiary, 0.12)} 0px 1px 10px 0px;

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  ${({ location, theme }) =>
    location.pathname === '/docs' &&
    css`
      min-width: 100%;
      background: ${theme.primary};
    `}

  @media (max-width: 960px) {
    height: 64px;
    min-width: 100%;
    padding: 0;
  }
`

const GHLink = styled.a`
  display: flex;
  align-items: center;

  h3 {
    text-decoration: underline dotted;
    text-align: center;
    margin: 0;
    font-weight: 500;
    font-size: 1.25rem;
    padding: 0 12px;

    @media (max-width: 960px) {
      font-size: 1rem;
    }
  }

  &:before,
  &:after {
    content: '•';
    padding: 0 6px;
    font-size: 1.5rem;
  }
`

const RouterLink = styled(NavLink)`
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
    background: ${({ theme }) => rgba(theme.text, 0.14)};
  }

  &:active {
    background: ${({ theme }) => rgba(theme.secondary, 0.4)};
  }
`

const Nav = ({ location, theme }) => (
  <Bar location={location}>
    <RouterLink exact to='/' activeStyle={{ color: theme.secondary }}>
      Demo
    </RouterLink>
    <GHLink
      href='https://github.com/Gejsi/audio-illustrator/'
      target='_blank'
      rel='external'
      title='Go to GitHub page'
    >
      <h3>audio-illustrator</h3>
    </GHLink>
    <RouterLink exact to='/docs' activeStyle={{ color: theme.secondary }}>
      Docs
    </RouterLink>
  </Bar>
)

export const Navbar = withTheme(withRouter(Nav))
