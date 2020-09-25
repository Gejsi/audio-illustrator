import * as React from 'react'
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
  flex-wrap: wrap;
  align-items: center;
`

const SearchField = styled('input')`
  flex-basis: 25%;
  flex-grow: 1;
  height: 30%;
  border: none;
  background: white;
  border: none;
  border-radius: 1.5rem;
  padding: 0.75rem;
  outline: none;
  margin: 0.625rem;
  transition: transform 150ms;

  &:focus {
    transform: scale(1.03);
  }
`

const Wrapper = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  min-height: 4.5rem;
  min-width: 50%;
  display: flex;
  align-items: center;
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

const Nav = ({ theme }) => {
  return (
    <Bar>
      <SearchField type='text' placeholder='Put a YouTube url' />
      <Wrapper>
        <Button>
          <PauseIcon />
        </Button>
        <AudioControls
          duration={1000}
          muted={true}
          onMute={() => null}
          onTimeChange={() => null}
          onTimeInput={() => null}
          onVolumeInput={() => null}
          timeValue={0}
          volumeValue={0.5}
        />
      </Wrapper>
    </Bar>
  )
}

export const Navbar = withTheme(Nav)
