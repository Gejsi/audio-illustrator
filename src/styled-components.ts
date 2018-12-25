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
  createGlobalStyle,
  withTheme,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ITheme>

export { css, keyframes, createGlobalStyle, withTheme, ThemeProvider }
export default styled
