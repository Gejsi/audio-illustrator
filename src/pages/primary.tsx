import React, { useEffect, useRef, useState } from 'react'
import { Holder } from '../components/holder'
import { Title } from '../components/title'
import { Vessel } from '../components/vessel'
import { Section } from '../components/section'
import styled from '../styled-components'

import eyePhoto from '../../static/eye-photo.png'
import skullPhoto from '../../static/skull-photo.png'
import controllerPhoto from '../../static/controller-photo.png'

export const Primary = () => {
  return (
    <Holder>
      <Title>
        <h1>VISUALIZE</h1>
        <p>(choose between these artists to visualize their music)</p>
      </Title>

      <Vessel>
        <Section
          style={{
            backgroundImage: `url(${eyePhoto})`,
          }}>
          Jack Stauber
        </Section>
        <Section
          style={{
            backgroundImage: `url(${skullPhoto})`,
          }}>
          Joji
        </Section>
        <Section
          style={{
            backgroundImage: `url(${controllerPhoto})`,
          }}>
          Amstergates
        </Section>
      </Vessel>
    </Holder>
  )
}
