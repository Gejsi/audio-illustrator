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
  const [opened, setOpened] = useState(false)
  const [visible, setVisible] = useState(false)

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
        <Button>
          <PlayIcon />
        </Button>
        <h1>{id === 0 ? 'Jack Stauber' : id === 1 ? 'Joji' : 'Amstergates'}</h1>
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
      </Box>
    </Holder>
  )
}
