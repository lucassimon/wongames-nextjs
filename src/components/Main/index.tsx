import * as S from './styles'
import { useTheme } from '../../contexts/ThemeContext'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  const { mode, changeTheme } = useTheme()
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
      <p>
        <S.Select onChange={changeTheme} value={mode}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="accessibility">Accessibility</option>
        </S.Select>
      </p>
    </S.Wrapper>
  )
}

export default Main
