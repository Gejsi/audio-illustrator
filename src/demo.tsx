import * as React from 'react'
import styled from 'styled-components'

import smallImage from '/static/astronaut-graphic-art-jl-540x960.jpg'
import bigImage from '/static/astronaut-graphic-art-jl-1920x1080.jpg'

const Main = styled.div`
  background-image: url(${smallImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.background};

  height: 100vh;

  @media (min-width: 540px) {
    background-image: url(${bigImage});
  }
`

export const Demo = () => <Main />
