import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-okaidia.css'
import styled from '../styled-components'
import { Container } from '../components/container'
import { rem, darken, lighten } from 'polished'

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
    margin: ${rem(20)} 0;

    code {
      background: #272822;
      line-height: 2.5;
      padding: ${rem(8)};
      text-transform: initial;
      font-size: ${rem(14)};
    }
  }

  p {
    font-weight: 400;
    margin: ${rem(16)} 0;
    font-size: ${rem(14)};
    letter-spacing: ${rem(0.25)};

    code {
      background: ${lighten(0.1, '#272822')};
      line-height: 2;
      padding: ${rem(4)};
      font-size: ${rem(14)};
    }
  }

  a:link {
    color: ${({ theme }) => theme.secondary};
  }

  a:visited {
    color: ${({ theme }) => darken(0.15, theme.secondary)};
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

    const content = atob(json.content).replace(
      '[waveform parameter](#illustrator-waveform-boolean-)',
      '`waveform parameter`'
    )

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
