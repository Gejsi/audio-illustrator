import styled from 'styled-components'

export const Illustrator = styled.div`
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  transform: rotateX(180deg);
`

export const Bar = styled.div`
  width: ${props => `calc(100% / ${props.length})`};
  background: pink;
  height: 0;
`