import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

interface ITheme {
  text: string
  background: string
}

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  withTheme,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>

export { css, keyframes, createGlobalStyle, withTheme, ThemeProvider }
export default styled
