import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.backgroundColor};
    color: ${theme.textColor};
  `}
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
export const Select = styled.select`
  ${({ theme }) => css`
    background: ${theme.buttonBackgroundColor};
    color: ${theme.buttonTextColor};
  `}
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
`
