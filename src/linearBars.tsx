import * as React from 'react'
import { IBarsProps } from './types'

interface IProps extends IBarsProps {
  axis?: string
}

/**
 * Helper function to set values depending on the 'axis' prop
 * @param attr
 * @param axis
 * @returns Value of the wanted attribute
 */
const getAxis = (attr: string, axis: string | undefined) => (
  ...args: number[]
): number => {
  let newArgs: number[] = []

  /** Avoid repeating same arguments */
  switch (attr) {
    case 'width':
    case 'height':
      newArgs.push(args[0], args[0], args[1], args[1])
      break
    case 'x':
      newArgs.push(args[0], args[1], args[2], args[2])
      break
    case 'y':
      newArgs.push(args[0], args[0], args[1], args[2])
      break
  }

  switch (axis) {
    case 'x':
      return newArgs[0]
    case 'x-negative':
      return newArgs[1]
    case 'y-negative':
      return newArgs[2]
    default:
      return newArgs[3]
  }
}

export const LinearBars = ({
  bars,
  audioData,
  barsStyles,
  axis,
  ...rest
}: IProps) => {
  const barsArray: number[] = Array.from({ length: bars }, (v, k) => k)

  return (
    <svg width='100%' height='100%' {...rest}>
      {barsArray.map(n => (
        <rect
          key={n.toString()}
          width={
            audioData.length !== 0
              ? getAxis('width', axis)(
                  (audioData[n] / 255) * 100,
                  100 / barsArray.length
                ) + '%'
              : undefined
          }
          height={
            audioData.length !== 0
              ? getAxis('height', axis)(
                  100 / barsArray.length,
                  (audioData[n] / 255) * 100
                ) + '%'
              : undefined
          }
          x={
            audioData.length !== 0
              ? getAxis('x', axis)(
                  0,
                  100 - (audioData[n] / 255) * 100,
                  (100 / barsArray.length) * n
                ) + '%'
              : undefined
          }
          y={
            audioData.length !== 0
              ? getAxis('y', axis)(
                  (100 / barsArray.length) * n,
                  0,
                  100 - (audioData[n] / 255) * 100
                ) + '%'
              : undefined
          }
          style={barsStyles}
        />
      ))}
    </svg>
  )
}
