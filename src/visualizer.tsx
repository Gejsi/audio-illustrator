import styled from 'styled-components'

export const Visualizer = styled.svg`
  height: 500px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotateX(180deg);
`

export const Rect = styled.rect`
  width: ${props => `calc(100% / ${props.length})`};
  fill: pink;
  height: 0;
`