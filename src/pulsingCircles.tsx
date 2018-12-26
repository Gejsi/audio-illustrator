import * as React from 'react'
import { getAverage } from './utils'

interface IProps {
  circles: number
  audioData: Uint8Array
  circlesStyles?: object
  [rest: string]: any
}

export const PulsingCircles = ({
  circles,
  audioData,
  circlesStyles,
  ...rest
}: IProps) => {
  const circlesArray: number[] = Array.from({ length: circles }, (_, k) => k)
  const data = getAverage(audioData, 129 / circles)

  return (
    <svg width='100%' height='100%' {...rest}>
      {circlesArray.map(n => (
        <circle
          key={n.toString()}
          cx='50%'
          cy='50%'
          r={data.length !== 0 ? (data[n] / 255) * 50 + '%' : 0}
          fill='none'
          strokeWidth={2}
          stroke='black'
          style={circlesStyles}
        />
      ))}
    </svg>
  )
}
