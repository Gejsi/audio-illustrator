import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 72px);
  overflow: auto;
  transform: translateY(72px);

  @media (max-width: 960px) {
    height: calc(100vh - 64px);
    transform: translateY(64px);
  }
`
