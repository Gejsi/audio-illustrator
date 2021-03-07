import React, { useState, useRef, useEffect } from 'react'
import Illustrator from 'audio-illustrator'
import { Holder } from '../components/holder'
import { Title } from '../components/title'
import { Vessel } from '../components/vessel'
import { Box } from '../components/box'
import { Button } from '../components/button'
import { Canvas } from '../components/canvas'
import { CloseIcon, PauseIcon, PlayIcon } from '../components/icons'

import eye from '../../static/eye.gif'
import skull from '../../static/skull.gif'
import controller from '../../static/controller.gif'
import buttercup from '../../static/buttercup.mp3'
import yeahRight from '../../static/yeahRight.mp3'
import cantGetOverYou from '../../static/cantGetOverYou.mp3'

export const Primary = () => {
  const [id, setId] = useState(1)
  const [opened, setOpened] = useState(false)
  const [visible, setVisible] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<any>(null)
  const [data, setData] = useState<Uint8Array | number[] | undefined>(
    new Uint8Array(0)
  )
  let illustrator = useRef<Illustrator | null>(null)

  useEffect(() => {
    illustrator.current = new Illustrator({ waveform: true })
    illustrator.current.connect(audioRef.current)
    audioRef.current.volume = 0.7

    return () => illustrator.current?.disconnect()
  }, [])

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
    illustrator.current?.stopLoop()
    setData(new Uint8Array(0))
  }

  const handleClick = () => {
    setPlaying(!playing)

    if (playing) audioRef.current?.pause()
    else audioRef.current?.play()
  }

  const handlePlay = () => {
    //@ts-ignore
    illustrator.current?.analyser.context.resume().then(() => {
      illustrator.current?.startLoop(handlePlay)
      setData(illustrator.current?.getData())
    })
  }

  const handlePause = () => {
    illustrator.current?.stopLoop()
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
              ? 'Yeah Right'
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
              ? yeahRight
              : id === 2
              ? cantGetOverYou
              : null
          }
          ref={audioRef}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleClose}
        />

        <Canvas data={data} playing={playing} />
      </Box>
    </Holder>
  )
}
