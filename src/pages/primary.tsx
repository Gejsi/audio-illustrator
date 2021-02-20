import React, { useState } from 'react'
import { Holder } from '../components/holder'
import { Title } from '../components/title'
import { Vessel } from '../components/vessel'
import { Box } from '../components/box'
import { Button } from '../components/button'
import styled, { css } from '../styled-components'
import { CloseIcon, PauseIcon, PlayIcon } from '../components/icons'

import eye from '../../static/eye.gif'
import skull from '../../static/skull.gif'
import controller from '../../static/controller.gif'

export const Primary = () => {
  const [id, setId] = useState(1)

  return (
    <Holder style={{ overflow: 'hidden' }}>
      <Title />

      <Vessel onIdChange={(i) => setId(i)} />

      <Box
        style={{
          backgroundImage: `url(${
            id === 0 ? eye : id === 1 ? skull : controller
          })`,
        }}>
        <Button>
          <PlayIcon />
        </Button>
        <h1>Joji</h1>
        <p>Can't get over you</p>
        <Button small>
          <CloseIcon />
        </Button>
      </Box>
    </Holder>
  )
}
