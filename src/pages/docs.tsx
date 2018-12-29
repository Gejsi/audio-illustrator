import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-okaidia.css'
import styled from '../styled-components'
import { Container } from '../components/container'
import { rem, rgba, darken } from 'polished'

const Wrapper = styled.div`
  [align='center'] {
    display: none;
  }

  padding: 0 ${rem(16)};
  transition: padding 150ms;

  h2 {
    font-weight: 500;
    font-size: ${rem(34)};
    letter-spacing: ${rem(0.25)};
    margin: ${rem(24)} 0;
  }

  h3 {
    margin: ${rem(24)} 0;
  }

  h4 {
    font-weight: 500;
    font-size: ${rem(12)};
    letter-spacing: ${rem(1)};
    text-transform: uppercase;
  }

  p {
    font-weight: 400;
    margin: ${rem(16)} 0;
    font-size: ${rem(14)};
    letter-spacing: ${rem(0.25)};
  }

  ul {
    padding-left: ${rem(32)};
    font-size: ${rem(14)};
  }

  table {
    border-collapse: collapse;
    margin: ${rem(16)} 0;

    th {
      height: ${rem(48)};
      border-width: 0 ${rem(1)};
      border-style: solid;
      border-color: ${({ theme }) => rgba(theme.text, 0.12)};
      padding: 0 ${rem(16)};
      font-weight: 400;
      font-size: ${rem(12)};
      color: ${({ theme }) => rgba(theme.text, 0.6)};
    }

    td {
      height: ${rem(48)};
      border-width: 0 ${rem(1)};
      border-style: solid;
      border-color: ${({ theme }) => rgba(theme.text, 0.12)};
      padding: 0 ${rem(16)};
      font-size: ${rem(14)};
    }

    @media (max-width: 960px) {
      th,
      td {
        padding: ${rem(8)};
      }
    }
  }

  a:link {
    color: ${({ theme }) => theme.secondary};
  }

  a:visited {
    color: ${({ theme }) => darken(0.15, theme.secondary)};
  }

  code {
    background: #272822;
    padding: ${rem(2)} ${rem(4)};
  }

  @media (max-width: 960px) {
    padding: 0 ${rem(8)};
  }
`

export class Docs extends React.Component<any, any> {
  state = {
    content: ''
  }

  async componentDidMount() {
    const res = await fetch(
      'https://api.github.com/repos/gejsi/react-audio-illustrator/readme'
    )
    const json = await res.json()

    const content = atob(json.content)

    this.setState({ content })

    Prism.highlightAll()
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Markdown
            children={this.state.content}
            options={{
              overrides: {
                pre: {
                  props: {
                    className: 'line-numbers'
                  }
                }
              }
            }}
          />
        </Wrapper>
      </Container>
    )
  }
}
