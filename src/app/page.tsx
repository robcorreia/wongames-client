import Home, { type HomeTemplateProps } from '../templates/Home'
import bannersMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'

async function getProps() {
  const props: HomeTemplateProps = {
    banners: bannersMock.map((banner) => ({
      ...banner,
      image: banner.img
    })),
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighlight: highlightMock,
    upcommingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighlight: highlightMock
  }

  return props
}

export default async function Index() {
  const data = await getProps()

  return <Home {...data} />
}
