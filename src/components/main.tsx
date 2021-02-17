import React from 'react'
import styled, { keyframes } from '../styled-components'
import { rgba } from 'polished'
import { Visualizer } from './visualizer'

const rotateToCenter = keyframes`
  0% {
		transform: translate(-50%, -100%) rotate(-180deg) scale(0.1);
		opacity: 0;
	}
`

const showBars = keyframes`
  100% {
		opacity: 1;
	}
`

const Outer = styled.div`
  position: relative;
  max-width: 50vh;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  box-shadow: ${rgba('#FA1B37', 0.2)} 0px 11px 15px -7px,
    ${rgba('#FA1B37', 0.14)} 0px 24px 38px 3px,
    ${rgba('#FA1B37', 0.12)} 0px 9px 46px 8px;

  animation: ${rotateToCenter} 1.5s none;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  &:before,
  &:after {
    content: '';
    transition: all 150ms;
    position: absolute;
    width: 15%;
    height: 75%;
    background: ${rgba('#FA1B37', 0.8)};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    z-index: -1;
    animation: ${showBars} 300ms 1.5s forwards;
    opacity: 0;
  }
  &:before {
    transform: skew(-45deg) translate(45%, -15%);
  }
  &:after {
    transform: skew(-45deg) translate(-15%, 45%);
  }
`

export const Main = (props) => (
  <div style={{ width: '100vw', height: '100vh', background: '#303030' }}>
    <Outer>
      <Inner>
        <img
          src='https://images.genius.com/af70545ba1257fca94c9958f9797aa34.1000x1000x1.jpg'
          alt='Carbonated Water cover'
        />
      </Inner>
    </Outer>
    <Visualizer audioEl={props.audioEl} />
  </div>
)
