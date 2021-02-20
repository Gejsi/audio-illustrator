import React, { useEffect, useRef, useState } from 'react'
import { Holder } from '../components/holder'
import { Title } from '../components/title'
import { Vessel } from '../components/vessel'
import { Expande, Section } from '../components/section'

import eyePhoto from '../../static/eye-photo.png'
import skullPhoto from '../../static/skull-photo.png'
import controllerPhoto from '../../static/controller-photo.png'

export const Primary = () => {
  const [opened, setOpened] = useState(false)
  const [id, setId] = useState(-1)

  const handleClick = (i: number) => {
    setId(i)
    setOpened(!opened)
  }

  return (
    <Holder style={{ overflow: 'hidden' }}>
      <Title />

      <Vessel>
        <Section
          onClick={() => handleClick(0)}
          style={{
            backgroundImage: `url(${eyePhoto})`,
            zIndex: id == 0 ? 2 : 1,
          }}>
          Jack Stauber
          <Expande opened={id == 0 ? opened : false} />
        </Section>
        <Section
          onClick={() => handleClick(1)}
          style={{
            backgroundImage: `url(${skullPhoto})`,
            zIndex: id == 1 ? 2 : 1,
          }}>
          Joji
          <Expande opened={id == 1 ? opened : false} />
        </Section>
        <Section
          onClick={() => handleClick(2)}
          style={{
            backgroundImage: `url(${controllerPhoto})`,
            zIndex: id == 2 ? 2 : 1,
          }}>
          Amstergates
          <Expande opened={id == 2 ? opened : false} />
        </Section>
      </Vessel>
    </Holder>
  )
}
