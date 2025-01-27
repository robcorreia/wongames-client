'use client'
import Heading from '../../components/Heading'
import Logo from '../../components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />

      <Heading>All your favorite games in one place</Heading>

      <S.SubTittle>
        <strong>WOW</strong> is the best and most complete gaming plataform.
      </S.SubTittle>

      <S.Footer>WON Games 2020 © All rights reserved.</S.Footer>
    </S.BannerBlock>

    <S.Content>
      <Logo color="black" size="large" />
      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
