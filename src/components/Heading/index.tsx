import React, { FC } from 'react'
import * as S from './styles'

import { HeadingProps } from './types'

const Heading: FC<HeadingProps> = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false
}) => (
  <S.Heading color={color} lineBottom={lineBottom} lineLeft={lineLeft}>
    {children}
  </S.Heading>
)

export default Heading
