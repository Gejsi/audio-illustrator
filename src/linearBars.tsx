import * as React from 'react'

interface IProps {
  bars: number
  audioData: Uint8Array
  barsStyles?: object
  [rest: string]: any
}

export const LinearBars = ({
  bars,
  audioData,
  barsStyles,
  ...rest
}: IProps) => {
  const barsArray: number[] = Array.from({ length: bars }, (v, k) => k)

  return (
    <svg width='100%' {...rest}>
      {barsArray.map(n => (
        <rect
          key={n.toString()}
          width={100 / barsArray.length + '%'}
          height={
            audioData.length !== 0 ? (audioData[n] / 255) * 100 + '%' : 0
          }
          x={(100 / barsArray.length) * n + '%'}
          y={
            audioData.length !== 0
              ? 100 - (audioData[n] / 255) * 100 + '%'
              : 0
          }
          style={barsStyles}
        />
      ))}
    </svg>
  )
}
