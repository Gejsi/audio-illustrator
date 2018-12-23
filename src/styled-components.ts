import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

interface ITheme {
  text: string
  background: string
  primary: string
  secondary: string
  tertiary: string
  textOnPrimary: string
}

const {
  default: styled,
  css,
  keyframes,
  withTheme,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ITheme>

export { css, keyframes, withTheme, ThemeProvider }
export default styled
