import * as React from 'react'
import styled from '../styled-components'
import { rem, darken } from 'polished'
import { Container } from '../components/container'

const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 400;
    font-size: ${rem(96)};
    letter-spacing: ${rem(-1.5)};
    margin: 0;
    text-align: center;
  }

  h2 {
    font-weight: 400;
    font-size: ${rem(34)};
    letter-spacing: ${rem(0.25)};
    margin: 0;
  }

  span {
    color: ${({ theme }) => darken(0.2, theme.secondary)};
  }
`

export const NoMatch = () => (
  <Wrapper>
    <div>
      <h1>404</h1>
      <h2>
        Page <span>not</span> found
      </h2>
    </div>
  </Wrapper>
)
