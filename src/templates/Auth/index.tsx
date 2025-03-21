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
      <S.BannerContent>
        <Logo id="banner" />

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>

          <S.Subtitle>
            <strong>WOW</strong> is the best and most complete gaming plataform.
          </S.Subtitle>
        </div>

        <S.Footer>WON Games 2020 © All rights reserved.</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Logo id="content" color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
