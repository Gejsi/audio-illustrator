import React, { useState, useRef, useEffect } from 'react'
import Illustrator from 'audio-illustrator'
import { Holder } from '../components/holder'
import { Title } from '../components/title'
import { Vessel } from '../components/vessel'
import { Box } from '../components/box'
import { Button } from '../components/button'
import { Canvas } from '../components/canvas'
import styled, { css } from '../styled-components'
import { CloseIcon, PauseIcon, PlayIcon } from '../components/icons'

import eye from '../../static/eye.gif'
import skull from '../../static/skull.gif'
import controller from '../../static/controller.gif'
import buttercup from '../../static/buttercup.mp3'
import testDrive from '../../static/testDrive.mp3'
import cantGetOverYou from '../../static/cantGetOverYou.mp3'

export const Primary = () => {
  const [id, setId] = useState(1)
  const [opened, setOpened] = useState(false)
  const [visible, setVisible] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | HTMLVideoElement>(null)

  const handleIdChange = (i) => {
    setId(i)
    setOpened(true)

    setTimeout(() => {
      setVisible(true)
    }, 500)
  }

  const handleClose = () => {
    setVisible(false)

    setTimeout(() => {
      setOpened(false)
    }, 200)

    setPlaying(false)
    audioRef.current?.pause()
  }

  const handleClick = () => {
    setPlaying(!playing)

    if (playing) audioRef.current?.pause()
    else audioRef.current?.play()
  }

  const handlePlay = () => {
    console.log('playing')
  }

  const handlePause = () => {
    console.log('paused')
  }

  return (
    <Holder style={{ overflow: 'hidden' }}>
      <Title />

      <Vessel onIdChange={handleIdChange} opened={opened} />

      <Box
        visible={visible}
        opened={opened}
        style={{
          backgroundImage: `url(${
            id === 0 ? eye : id === 1 ? skull : controller
          })`,
        }}
      >
        <div>
          <Button onClick={handleClick}>
            {playing ? <PauseIcon /> : <PlayIcon />}
          </Button>

          <h1>
            {id === 0 ? 'Jack Stauber' : id === 1 ? 'Joji' : 'Amstergates'}
          </h1>

          <p>
            {id === 0
              ? 'Buttercup'
              : id === 1
              ? 'Test Drive'
              : "Can't get over you"}
          </p>

          <Button small onClick={handleClose}>
            <CloseIcon />
          </Button>
        </div>

        <audio
          src={
            id === 0
              ? buttercup
              : id === 1
              ? testDrive
              : id === 2
              ? cantGetOverYou
              : null
          }
          ref={audioRef}
          onPlay={handlePlay}
          onPause={handlePause}
        />

        <Canvas />
      </Box>
    </Holder>
  )
}
