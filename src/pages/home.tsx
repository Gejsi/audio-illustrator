import React, { useRef, useState } from 'react'
import { Navbar } from '../components/navbar'
import { Main } from '../components/main'

export const Home = () => {
  const audioEl = useRef<HTMLAudioElement>(null)
  const [timeValue, setTimeValue] = useState(0)
  const [duration, setDuration] = useState(0)
  const [muted, setMuted] = useState(false)

  const handleTimeUpdate = () => {
    if (audioEl.current) setTimeValue(audioEl.current.currentTime)
  }

  const handleLoadedData = () => {
    if (audioEl.current) {
      setDuration(audioEl.current.duration)
      audioEl.current.volume = 0.2
    }
  }

  return (
    <>
      <audio
        src='https://r1---sn-hpa7zns6.googlevideo.com/videoplayback?expire=1602339078&ei=pmyBX4P2Gc-Pz7sPq9CRiAs&ip=168.80.27.211&id=o-AK-yrm0Yk8Q8uzNdz-g6vCrsheGXFK7_AsTZECm5yKiF&itag=140&source=youtube&requiressl=yes&vprv=1&mime=audio%2Fmp4&gir=yes&clen=2581162&dur=159.428&lmt=1579602851504929&fvip=1&keepalive=yes&fexp=23915654&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&avi=K1A%2FHwERIiwAVF8KVl1eH3IxAAYNET8AADcJFEtQUFYkUFNUR1hvJg0GDQFRZVteNQEdFwgEb18KAwkIDxNiXzELCBQMGCQRHSURBVdEQRFqHBwaCVhvMw0SAAtqX1RcBQAFPwsQKB1GTFVIAWhmUD8HBwIXDW9fCgMJCA8TYkE%2FChBUXxo4CQhaRylCSX9aPhYqGRAaORcdVF8KVl1eH3IxHAQXESMRMB8IAVBFU14gUFNUVEJ9V1dHUlAUCBBO&sig=AOq0QJ8wRQIhANr2PgOd8GfzODunPj5KBOXSF5jkqhtgukir3TSrvO3QAiA08OK_gt2-dOXJDwCSxcSUvt-V4T3KPKRCTdxHZXChEg%3D%3D&from_cache=False&title=Trevor%20Daniel%20-%20Falling%20(Official%20Music%20Video)&rm=sn-8vq54voxpo-cvhe7d,sn-cvhlk7d&req_id=f6c572beb342a3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=_9&mip=2.37.243.175&mm=30&mn=sn-hpa7zns6&ms=nxu&mt=1602317363&mv=m&mvi=1&pl=23&usequic=no&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl,usequic&lsig=AG3C_xAwRgIhAKIVbCzKSvZSKEPbI3sH-ls6QHQQDwPH8OtylMv4Ct4yAiEAirqNMWaZT5b0uq4M7wPnsyn5rM5nmvAo3QZWreFSHwQ%3D'
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
      <Main />
    </>
  )
}
