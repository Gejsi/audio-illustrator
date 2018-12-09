import * as React from 'react'
import styled from 'styled-components'
import smallImage from '/static/astronaut-graphic-art-jl-540x960.jpg'
import bigImage from '/static/astronaut-graphic-art-jl-1920x1080.jpg'
import { Container } from './container'
import { FileInput, FileLabel } from './fileInput'

const Main = styled.div`
  background-image: url(${smallImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.background};

  height: 100vh;

  @media (min-width: 540px) {
    background-image: url(${bigImage});
  }
`

export class Demo extends React.Component<any, { song: File }> {
  state = {
    song: {} as File
  }

  handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const song = target.files && target.files[0]

    if (song) this.setState({ song: song })
  }

  render() {
    const { song } = this.state

    return (
      <Main>
        <Container>
          <FileInput onChange={this.handleChange} />
          <FileLabel tabIndex={-1}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              width='24'
              height='24'
            >
              <path
                fill='currentColor'
                d='M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'
              />
            </svg>
            <span>{song.name || 'Upload a file'}</span>
          </FileLabel>
        </Container>
      </Main>
    )
  }
}
