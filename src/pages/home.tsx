import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/navbar'
import { Main } from '../components/main'
import audioSrc from '../../static/Cradles.mp3'
import Illustrator from 'audio-illustrator'

export const Home = () => {
  const audioEl = useRef<HTMLAudioElement>(null)
  const [audioData, setAudioData] = useState(new Uint8Array(0))
  const [timeValue, setTimeValue] = useState(0)
  const [duration, setDuration] = useState(0)
  const [muted, setMuted] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  let illustrator: any = new Illustrator({ waveform: true })

  // useEffect(() => {
  //   if (audioEl.current) {
  //     illustrator.connect(audioEl.current)
  //     setIsConnected(true)
  //   }
  //   return () => {
  //     illustrator.disconnect()
  //     setIsConnected(false)
  //   }
  // }, [])

  const handleTimeUpdate = () => {
    if (audioEl.current) setTimeValue(audioEl.current.currentTime)
  }

  const handleLoadedData = () => {
    if (audioEl.current) {
      setDuration(audioEl.current.duration)
      audioEl.current.volume = 0.2
      setIsConnected(true)
      if (!isConnected) {
        illustrator.connect(audioEl.current)
      }
    }
  }

  const handlePlay = () => {
    illustrator.startLoop(handlePlay)
    const data = illustrator.getData()

    setAudioData(data as Uint8Array)

    console.log(illustrator)
  }

  const handlePause = () => {
    illustrator.stopLoop()
  }

  return (
    <>
      <audio
        src={audioSrc}
        ref={audioEl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        muted={muted}
      />
      <Navbar
        audioEl={audioEl}
        timeValue={timeValue}
        duration={duration}
        handleMute={() => setMuted(!muted)}
        muted={muted}
      />
      <Main audioEl={audioEl} />
    </>
  )
}
