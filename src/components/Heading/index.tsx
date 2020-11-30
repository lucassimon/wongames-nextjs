import React, { FC } from 'react'
import * as S from './styles'

import { HeadingProps } from './types'

const Heading: FC<HeadingProps> = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}) => (
  <S.Heading
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Heading>
)

export default Heading
