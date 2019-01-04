export default class Illustrator {
  audioSrc: MediaElementAudioSourceNode
  analyser: AnalyserNode
  loopId: number
  isWaveform: boolean

  constructor(option?: { waveform: boolean }) {
    if (option === undefined || option.waveform !== true) {
      this.isWaveform = false
    } else {
      this.isWaveform = true
    }
  }

  connect = (audio: HTMLAudioElement | HTMLVideoElement) => {
    const ctx = new AudioContext()
    this.audioSrc = ctx.createMediaElementSource(audio)
    this.analyser = ctx.createAnalyser()

    this.audioSrc.connect(this.analyser)
    this.analyser.connect(ctx.destination)

    this.analyser.fftSize = this.isWaveform ? 2048 : 256
  }

  disconnect = () => {
    if (this.audioSrc) this.audioSrc.disconnect()

    if (this.analyser) this.analyser.disconnect()
  }

  getData = (items?: number) => {
    const bufferLength = this.analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const getAverage = (chunkSize: number) => {
      const results: Uint8Array[] = new Array(
        Math.ceil(dataArray.length / chunkSize)
      )
        .fill(0)
        .map((_, i) =>
          dataArray.slice(chunkSize * i, chunkSize * i + chunkSize)
        )

      return results.map(
        result => result.reduce((acc, cur) => acc + cur, 0) / result.length
      )
    }

    if (this.isWaveform) {
      this.analyser.getByteTimeDomainData(dataArray)
    } else {
      this.analyser.getByteFrequencyData(dataArray)
    }

    if (items === undefined) return dataArray

    return getAverage(bufferLength / items)
  }

  startLoop = (callback: FrameRequestCallback) => {
    this.loopId = requestAnimationFrame(callback)
  }

  stopLoop = () => {
    cancelAnimationFrame(this.loopId)
  }
}
