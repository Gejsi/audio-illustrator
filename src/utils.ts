import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import humanize from 'humanize-duration'

export const theme = {
  text: '#fff',
  background: '#303030',
  primary: '#1ba897',
  secondary: '#FA1C37',
  tertiary: '#12223e',
  textOnPrimary: '#000',
}

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Rubik', sans-serif;
    overflow: hidden;

    #root {
      height: 100vh;
    }
  }
`

const civilizeTime = (t: number): string[] => {
  const time: string = humanize(t * 1000, {
    delimiter: ':',
    units: ['h', 'm', 's'],
    round: true,
  })

  const str = time.split(':')

  const writeTime = (...args: (string | number)[]): string[] => {
    const baseArgs = [
      typeof args[0] === 'number'
        ? str[args[0]].replace(/[^0-9\.]+/g, '')
        : '00',
      typeof args[1] === 'number'
        ? str[args[1]].replace(/[^0-9\.]+/g, '')
        : '00',
    ]

    if (args.length === 2) return baseArgs

    return [
      ...baseArgs,
      typeof args[2] === 'number'
        ? str[args[2]].replace(/[^0-9\.]+/g, '')
        : '00',
    ]
  }

  if (str.length === 1) {
    if (str[0].includes('hour')) {
      return writeTime(0, '00', '00')
    } else if (str[0].includes('minute')) {
      return writeTime(0, '00')
    } else {
      return writeTime('00', 0)
    }
  } else if (str.length === 2) {
    if (str[0].includes('hour') && str[1].includes('minute')) {
      return writeTime(0, 1, '00')
    } else if (str[0].includes('hour') && str[1].includes('second')) {
      return writeTime(0, '00', 1)
    } else {
      return writeTime(0, 1)
    }
  }

  return str.map((s) => s.replace(/[^0-9\.]+/g, ''))
}

export const humanizeTime = (t: number): string =>
  civilizeTime(t)
    .map((s) => (s.length === 1 ? `0${s}` : s))
    .join(':')
