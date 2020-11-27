import React, { FC } from 'react'
import * as S from './styles'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
