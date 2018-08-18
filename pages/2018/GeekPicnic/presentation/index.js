import React from "react"

import styled from 'styled-components'

import chroma from 'chroma-js'
import { colors, Flex, Box } from 'ooni-components'
import {
  NettestGroupInstantMessaging,
  NettestGroupMiddleBoxes,
  NettestGroupPerformance,
  NettestGroupWebsites
} from 'ooni-components/dist/icons'

import 'prismjs/themes/prism.css'

import FaApple from 'react-icons/lib/fa/apple'
import FaAndroid from 'react-icons/lib/fa/android'
import MdLaptop from 'react-icons/lib/md/laptop'
import MdChatBubble from 'react-icons/lib/md/chat-bubble'

// Import Spectacle Core tags
import {
  Image,
  BlockQuote,
  Cite,
  Deck,
  CodePane,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
  Fill,
  Appear,
  Link,
  Notes
} from "spectacle"

import preload from "spectacle/lib/utils/preloader"

import Terminal from "spectacle-terminal"
import CodeSlide from 'spectacle-code-slide'

// Import theme
import theme from "../../../../components/themes/ooni/index.js";

import WorldDots from '../../../../components/WorldDots'
import PhoneCarousel from '../../../../components/PhoneCarousel'

const images = {
  Usher2Morze: require("../assets/usher2-morze.png"),
  FlagOfEgypt: require("../assets/Flag_of_Egypt.svg"),
  VKSelfCensorship: require("../assets/vk-self-censorship.jpg"),
  LSPYoutube: require("../assets/lsp-country-restriction.png"),
  LSPTor:require("../assets/lsp-tor-browser.png"), 
  LSPYandex:require("../assets/lsp-yandex-music.png"), 
  DDT: require("../assets/ddt-vs-kremlin.png"), 
  Quack: require("../assets/what-also-floats.jpg"), 
  RavingIran: require("../assets/raving-iran.jpg"), 
  NotEnoughBillboards: require("../assets/not-enough-billboards.jpg"),
  RKNTyan: require("../assets/aquam1ne-rkn-tyan-amazon.jpg"),
  OONIHorizontalColor: require("ooni-components/components/svgs/logos/OONI-HorizontalColor.svg"),
  OONIVerticalColor: require("ooni-components/components/svgs/logos/OONI-VerticalColor.svg"),
};

preload(images)

const GRID_HEIGHT = 400
const GRID_WIDTH = 300
const ECOSYSTEM_IMG_W = null
const ECOSYSTEM_IMG_H = 200

const Arrow = ({dir}) => {
  let transform
  let width
  let height
  let viewBox = '0 0 140 140'
  if (dir == 'down') {
    transform = 'rotate(90) translate(0 -40)'
    viewBox = '0 0 40 140'
    height = '200'
  } else if (dir == 'up') {
    transform = 'rotate(-90) translate(-140 0)'
    viewBox = '0 0 40 140'
    height = '200'
  } else if (dir == 'left') {
    transform = 'rotate(180) translate(-140 -40)'
    viewBox = '0 0 140 40'
    width = '200'
  } else {
    width = '200'
  }
  return (<svg viewBox={viewBox} width={width} height={height}>
  	<g transform={transform}><path d="M120,6.6L133.4,20L120,33.4l-2.3-2.4l9.3-9.4H6.6v-3.2H127L117.7,9L120,6.6z"/></g>
  </svg>
  )
}
const ooEcosystem = {
  ProbeVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Probe-VerticalMonochrome.svg"),
    top: 0,
    left: 0
  },
  SyncVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Sync-VerticalMonochrome.svg"),
    top: GRID_HEIGHT,
    left: 0
  },

  RunVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Run-VerticalMonochrome.svg"),
    top: 0,
    left: GRID_WIDTH
  },

  ExplorerVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Explorer-VerticalMonochrome.svg"),
    top: 0,
    left: GRID_WIDTH*2,
  },
  APIVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/API-VerticalMonochrome.svg"),
    top: GRID_HEIGHT,
    left: GRID_WIDTH*2,
  },

  ProteusVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Proteus-VerticalMonochrome.svg"),
    top: GRID_HEIGHT/2,
    left: GRID_WIDTH*3,
  },

  PipelineVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Pipeline-VerticalMonochrome.svg"),
    top: GRID_HEIGHT,
    left: GRID_WIDTH*3
  },
}

// Require CSS
require("normalize.css");

const DefinitionTerm = styled(Text)`
font-size: 3.5rem !important;
text-align: left;
`

const DefinitionFonetics = styled(Text)`
  font-size: 2.5rem !important;
  color: ${colors.palette.gray4};
  display: inline;
`

const DefinitionItem = styled(ListItem)`
  text-align: left;
  padding-bottom: 20px;
  font-size: 2rem !important;
  text-indent: -30px;
  padding-left: 30px;
  color: ${colors.palette.gray2};
`

const Definition = styled.span`
  color: ${colors.palette.black};
`

const WorldDotsBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: '50%';
  transform: translateX(-50%) translateY(-20%);

  z-index: -1;
  opacity: 0.8;
  filter: blur(3px)
`

const CountryReportHeading = styled.div`
  background-color: ${colors.OONI_BLUE};
  color: ${colors.palette.white};
  font-size: 3rem;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const CountryReportDate = styled.div`
  background-color: ${colors.OONI_BLUE};
  color: ${colors.palette.white};
  font-size: 2rem;
  padding: 20px;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
`

const CountryReportFinding = styled.div`
  background-color: ${chroma(colors.palette.gray9).alpha(0.7).css()};
  color: ${colors.palette.white};
  padding: 20px;
  margin-top: 20px;
  text-align: left;
`
const WhiteImageContainer = styled.div`
  background-color: ${colors.palette.white};
`

const StyledFloatingLink = styled.div`
bottom: calc(-120vh - 50%);
left: calc(-50vw + 50%);
position: absolute;
width: 100vw;
height: 100vh;
`
const StyledFloatingLinkRight = styled.div`
bottom: calc(-120vh - 50%);
left: calc(50vw - 50%);
position: absolute;
width: 100vw;
height: 100vh;
`

const StyledPageLinkContainer = styled.div`
  text-align: left;
  padding-left: 100px;
  padding-top: 50px;
`

const StyledPageLink = styled(Link)`
  position: relative;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  background-color: ${colors.palette.white};
  border: 2px solid ${colors.palette.gray6};
  border-radius: 10px;
  box-shadow: 5px 10px 10px #888888;
`

// slightly better than UL/LI
const LI = styled.p`
  text-align: left;
`

const LHeading = styled(Heading)`
  text-align: left;
`
const FloatingLink = ({url}) => (
  <StyledFloatingLink>
    <StyledPageLinkContainer>
      <StyledPageLink href={url}>{url}</StyledPageLink>
    </StyledPageLinkContainer>
  </StyledFloatingLink>
)

const FloatingLinkRight = ({url}) => (
  <StyledFloatingLinkRight>
    <StyledPageLinkContainer>
      <StyledPageLink href={url}>{url}</StyledPageLink>
    </StyledPageLinkContainer>
  </StyledFloatingLinkRight>
)

const StyledFloatingQuote= styled.div`
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
`

const StyledFloatingQuoteContainer = styled.div`
bottom: calc(-100vh - 50%);
left: calc(-50vw + 50%);
position: absolute;
width: 100vw;
height: 100vh;
`

const FloatingQuote = ({children}) => (
  <StyledFloatingQuoteContainer>
    <StyledFloatingQuote>
      <Text>{children}</Text>
    </StyledFloatingQuote>
  </StyledFloatingQuoteContainer>
)

const NettestType = styled(Fill)`
  padding-bottom: 20px;
  h4 {
    font-size: 2rem;
    color: ${colors.palette.black}
  }
  svg {
    fill: ${colors.palette.blue5}
  }
`



const BlueNumber = styled.span`
  color: ${colors.palette.blue5};
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="white">
          <Image style={{paddingBottom: '30px'}} width="600px" src={images.OONIHorizontalColor} />
          <Heading fit size={2}>Роль интернет-цензуры</Heading>
          <Heading fit size={5}>в развитии человека будущего</Heading>
          <Heading size={6}>Леонид Евдокимов</Heading>
          <Heading size={6}>
              Geek Picnic<br/>
              Петербург, 18 августа 2018
          </Heading>
          <Link href="https://slides.ooni.io/2018/GeekPicnic">slides.ooni.io/2018/GeekPicnic</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          <p>
            На этом слайде, если честно, хотелось бы и закончить.
            Сил уже нет обсуждать эту роскомнадзоровскую бессмыслицу.
            Но, думаю, это бы огорчило пришедших...
          </p><p>
            Если вы ещё недостаточно удручены, у меня есть ещё один слайд.
          </p>
          </Notes>
          <Heading fit size={2}>Роль интернет-цензуры</Heading>
          <Heading fit size={2}>в развитии человека будущего</Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="primary">
              УДРУЧАЕТ
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            Конечно, у меня есть ещё несколько. Но скажу сразу, они не очень
            про техническую часть. Какие-то технические истории я планировал
            рассказывать на Chaos Construction через неделю.
            А пока &mdash; рассказать несколько баечек и новостей на тему.
            И, надеюсь, ответить на какие-нибудь интересные вам вопросы.
          </Notes>
          <Heading fit size={2}>БУДЕТ</Heading>
          <Heading fit size={2}>ХУЖЕ</Heading>
        </Slide>

        <Slide bgColor="white">
          <Notes>
            Представлюсь.
          </Notes>
          <CountryReportFinding>Бывший darkk@yandex-team.ru</CountryReportFinding>
          <CountryReportFinding>Ныне darkk@torproject.org</CountryReportFinding>
          <Appear fid="2" order={2}>
          <div>
            <Image width='920px' src={images.Usher2Morze} />
            <p>Почётный клоун <Link href="https://usher2.club/">usher2.club</Link>.</p>
          </div>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
          <Notes>
          OONI расшифровывается как "Открытая обсерватория сетевых помех". Это проект
          направленный на повышение прозрачности в области Интернет-цензуры по
          всему миру.

          Прокт с открытыми методологиями, исходным кодом и открытыми данными.

          Всё то же самое можно сказать и про проект Эшер-2 неугомонного Фила Кулина.
          </Notes>
          <Image width="300px" src={images.OONIVerticalColor} align='right'/>
          <Heading size={3} textColor="primary">The Open Observatory of Network Interference</Heading>
          <WorldDotsBg>
            <WorldDots primaryColor={colors.palette.blue5} highlightColor={colors.palette.blue9}/>
          </WorldDotsBg>
        </Slide>


        <Slide transition={["fade"]} bgImage={images.FlagOfEgypt} bgDarken={0.7} bgSize='120%'>
          <Notes>
            <p>
            Чем занимается OONI.
            Мой любимый пример из всех тех стран, на которые получилось
            посмотреть подробно, это Египет.
            </p><p>
            [&#x1f5b0;] Там были и запрет HTTPS и SSH. И OpenVPN. [&#x1f5b0;] И на сети в конфигурации фильтрующего
            оборудования там наблюдается некоторый бардак.
            [&#x1f5b0;] 
            И повсеместная врезка рекламы &mdash; не от одного провайдера, а на магистрали.
            </p><p>
            Но там был и смешной кейс эффективности &quot;гражданского давления&quot;.
            Канадские исследователи из CitizenLab опубликовали отчёт с деталями
            реализации врезки рекламы 9 марта. В тот же день врезки рекламы прекратились.
            Ну или по крайней мере их перестали замечать.
            </p>
          </Notes>
          <Appear fid="2" order={2}>
            <CountryReportFinding>В 2016 &mdash; временный запрет HTTPS, SSH. В 2018 &mdash; OpenVPN.</CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>Каскадное нагромождение разного фильтрующего оборудования.<br/>
            По-разному работающего, по-разному настроеного.<br/>
            Эшелонированная оборона?
            </CountryReportFinding>
          </Appear>
          <Appear fid="4" order={4}>
            <CountryReportFinding>Врезка рекламных редиректов, в т.ч. раздающих малварь.<br/>
            Прекратилась после публикации отчёта CitizenLab.</CountryReportFinding>
          </Appear>
          <div>
            <CountryReportHeading>Состояние Интернет-цензуры в Египте</CountryReportHeading>
            <CountryReportDate>Июль 2018</CountryReportDate>
            <Link href='https://ooni.io/post/egypt-internet-censorship/'>ooni.io/post/egypt-internet-censorship</Link>
          </div>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
            <Notes>
                <p>Помните, в марте кто-то нарисовал смешную картинку?
                В тот март после истории с проблемами у одного из крупнейших
                российских провайдеров. Когда Транстелеком немного упал 14 марта 
                из-за, скажем так, в том числе и несовершенства
                администрирования чёрных списков Роскомнадзора.</p>

                <p>Никто в марте не думал, что РКН всерьёз начнёт блокировать
                Амазон и прочих облачных хостинг-провайдеров подсетями,
                закрывая доступ к миллионам веб-сайтов и онлайн-сервисов в попытке
                заблокировать Telegram.</p>
            </Notes>
            <Image src={images.RKNTyan} height="600px"/>
            <Link href='https://twitter.com/aquam1ne/status/977509063562072065'>автор: @aquam1ne</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
            <Notes>
                Я тогда в конце марта думал, что интересной темой для исследования будет то, как
                одна из многочисленных вариаций DNS-атак влияет на ping до &quot;атакуемых&quot;
                серверов.

                Геймеры, трейдеры... Кому ещё пинг важен?

                Но буквально следующая пара недель изменили представление о том,
                что является &quot;интересным&quot; в блокировках в России.

                Кажется, впервые из-за блокировок онлайн-сервисов люди вышли на улицы.
                На протестный митинг, который объединил даже весьма холодно относившихся
                друг к другу политические движения.

                Не то что бы общественное давление имело грандиозный успех.
                Но в прошлом прецеденты такого успеха были и отголоски их видны до сих пор.
            </Notes>
            <Heading size={2}>
              ping: 38ms &rarr; 61ms
            </Heading>
            <Heading size={5}>
              Из-за вариаций на тему DNS-атаки
            </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>Кто-нибудь пользуется VPN на смартфоне с Yota?</p>
            <hr/>
            <p>можно, вы помните замечательную историю гражданского давления на хабре.
            В конце мая четырнадцатого года Yota анонсировали, что они хотят ограничить на телефонных тарифках
            не только p2p трафик, но и VPN. При том совершенно драконовской скоростью 32 кбит/с.</p>

            <p>Это примерно соответствует скорость модема на хорошей телефонной
            линии из тех времён, когда в браузере отключали картинки, чтоб
            сёрфинг по интертену был быстрее.

            Это примерно в триста раз медленее чем минимальный стомегабитный GPON тариф.

            Это примерно как скорость мобильного интернета,
            когда пресловутое `G` было ещё без циферки.</p>
            <hr/>
            <p>Так вот довольно много шума на эту тему было поднято и довольно много помоев
            на Yota было вылито. И, что для меня до сих пор немного удивительно, эти
            драконовские ограничения по скорости с VPN трафика были сняты, и остались только на p2p.
            И даже через год Yota преподносила эту историю как некоторый успех.</p>
          </Notes>

          <Heading size={2}>Yota vs. VPN</Heading>
          <LI>19 мая 2014, &quot;<Link href="https://habr.com/company/yota/blog/223305/">Об ограничениях р2р-трафика</Link>&quot;<br/>
          ... p2p и <u>VPN</u> ограничиваются в 32 кбит/с ...</LI>

          <Appear fid="2">
            <LI>26 сентября 2014, &quot;<Link href="https://habr.com/company/yota/blog/238297/">VPN в мобильном интернете от Yota</Link>&quot;<br/>
            ... VPN-трафик никак не ограничивается ... VPN также относится к высокоприоритетным сервисам ...
            </LI>
          </Appear>
          <Appear fid="3">
            <LI>17 сентября 2015, &quot;<Link href="https://habr.com/company/yota/blog/267071/">Уже год создаём оператора вместе</Link>&quot;<br/>
            ... изначально мы не планировали внедрять такой функционал, но выяснилось, что VPN на смартфонах очень востребован ...
            </LI>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
              Кто-нибудь пользуется Telegram на смартфоне с Yota? Картинки и стикеры тормозят?<br/>

              [&#x1f5b0;] Если у вас тормозят картинки &mdash; попробуйте использовать Socks5
              Proxy вместо прямого подключения и MTProto Proxy.  Тогда, видимо,
              соединение будет классифицировано как VPN и ограничения на скорость
              передачи не будут столь жёсткими.<br/>

              По крайней мере &mdash; пока. А MTProto Proxy, видимо, классифицируется либо
              как p2p (что не очень хорошо попадает на слова Павла Дурова),
              либо как &quot;всё остальное&quot;, что в каком-то смысле намекает
              на реализацию &quot;белого списка&quot; протоколов у Yota.<br/>

              Ну и проблема в Socks5 в том, что он передаётся открытым текстом.
              Т.е. телегу внутри Socks5 теоретически не намного сложнее забанить, чем без Socks5.
              И, если имя пользователя на Socks5 сервере уникально, то на СОРМ можно будет
              связать одно устройство в разных сетях. Но это и так не проблема.<br/>

              [&#x1f5b0;] Про СОРМ во всей этой тележной вакханалии тоже была смешная побочная сюжетная линия.
              Где-то к майским праздникам, когда многие подозревали Mail.Ru
              Group в сканировании интернета в поисках прокси-серверов, а
              сотовых операторов в прослушивании эфира в поисках Socks5 прокси
              &mdash; в это прекрасное время кто-то накопал и принёс в провайдерские
              чатики историю, как сервера, издали напоминающие
              СОРМовские съёмники, светят в открытый интернет без какой-либо
              авторизации статистикой по гигабитам обработанного трафика, по посещённым
              пользователями интернет-адресам, логинам с телефонами и
              аппаратными MAC-адресами оборудования.
          </Notes>
          <Heading size={2}>Yota vs. Telegram</Heading>
          <LI>Тормозит?</LI>
          <Appear fid="2">
          <div><LI>
            <em>Видимо</em>, MTProtoProxy классифицируется DPI как p2p.<br/>
            Скорость ~21 кбит/с
          </LI><LI>
            <em>Видимо</em>, Socks5 классифицируются DPI как &quot;белый&quot; VPN.<br/>
            Скорость ~7500 кбит/с ¯\_(ツ)_/¯
          </LI></div>
          </Appear>
          <Appear fid="3"><LI>
            Socks5 не шифрован! При подключении к Wi-Fi СОРМ <Link href="http://archive.fo/RG9Lj#selection-505.32083-505.32358"><em>будет</em></Link> знать, что это тот же пользователь Socks5, что и в мобильной сети!
          </LI></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            Вообще, конечно, очень обидно во всём этом блокировочном угаре
            за цифровые образовательные проекты.

            Особенно обидно на фоне декларируемой федеральным законом &quot;О Связи&quot;
            борьбы с цифровым неравенством.

            Вот и получается, что раньше неравенство было в том, у кого есть
            широкополосный доступ в Интернет, то теперь добавляется новый
            водораздел: умение использовать методы обхода интернет-цензуры
            и, что сложнее, уменее вовремя их включать, при обнаружении сбоя в сети.
          </Notes>
          <Heading size={2}>Образование, РКН, неравенство</Heading>
          <LI>stepik <Link href="https://stepik.org/course/512/reviews/8060">:-(</Link></LI>
          <LI>Coursera :-(</LI>
          <LI>SkyEng <Link href="https://www.vedomosti.ru/technology/articles/2018/04/17/766923-kto-postradal">:-(</Link></LI>
          <LI>TED <Link href="https://atlas.ripe.net/measurements/15725863/?filter=&show_only=Failed#!map">:-(</Link></LI>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            И всё веселье происходит на фоне подобных цифр относительно
            преследований &quot;за слова&quot;.

            Но интересны не только эти цифры. Интересно ещё, сколько людей включило
            самоцензуру и побоялось лишний раз лайкнуть сатирическую картинку.

            К сожалению, ни одного подобного открытого исследования мне не известно.
          </Notes>
          <Image src={images.VKSelfCensorship} />
          <Link href='https://twitter.com/max_katz/status/1030507640026214400'>автор: @max_katz</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            А ещё у нас снова запрещают музыку. На этот раз песню LSP, "Монетка".
            Не стоит путать с Монеточкой.
          </Notes>
          <Image src={images.LSPYoutube} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>
            Конечно, может быть это PR-акиця LSP. Ну так, хайпануть на Роскомнадзоре.
            Благо что у трека уже 40 милионов просмотров. И полмилиона лайков.
            И трек сам прошлого года...
            </p><p>
            Заодно, кстати, я узнал, что Tor Browser вполне может показывать видео
            с Youtube в HD качестве...
            </p>
          </Notes>
          <Image src={images.LSPTor} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            И видимо, кстати, претензия к самому клипу. Т.е. даже не к тексту, где
            описывается что-то похожее на способ суицида.

            Текст и песня вполне доступны на Яндекс.Музыке.
          </Notes>
          <Image src={images.LSPYandex} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>
            Так-то, конечно, руководствуюясь той же логикой, не мешало бы запретить
            песню группы ДДТ &quot;Чёрно-белые танцы&quot;, где поётся, что &quot;Выход
            есть &mdash; как всегда в окно&quot;. Пусть даже песня и описывает незавидную
            жизнь наркоманов.
            </p><p>
            И заодно клип на песню Одноразовая жизнь, где Юрий Шевчук смотрит на полуразрушенную
            Спасскую башню и разбитые стены Кремля...
            </p>
          </Notes>
          <Image src={images.DDT} />
          <Link href='https://www.youtube.com/watch?v=OlTK3QgTa5Y'>youtu.be/OlTK3QgTa5Y</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>
            Теперь включаем классическую британскую логику!
            </p><p>
            Какие ещё страны блокируют Телеграм и запрещают музыку?
            </p>
          </Notes>
          <Image src={images.Quack} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>
            Конечно же Иран!
            </p><p>
            Хочу порекомендовать фильм &quot;Рейв в Иране&quot;.
            Нарезка документальных кадров очень красиво описывает жизнь двух
            ди-джеев, играющих электронную музыку на подпольных рейвах в Иране.
            </p><p>
            Ну и то, как они в итоге собрали вертушки и завели трактор.
            </p><p>
            Отдельно где-то между строк в фильме звучит одна из возможных причин запрета
            Телеграма в Иране &mdash; стикеры. Они позволяют каждому смеяться над какой-нибудь
            нелепостью властей и распространяются как мемесы. Ничего не напоминает?
            </p><p>
            Ну хорошо. А какая страна ещё запрещает фильмы?
            </p>
          </Notes>
          <Image src={images.RavingIran} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>
            Смерть Сталина? Матильда? Нет, я не про это.
            </p><p>
            Тут Госдума опять рассмотрела и опять приняла закон. На этот раз про фестивали кино.
            Как раз после завершения чемпионата.
            Я не очень разбираюсь в кинонидустрии, поэтому просто процитирую человека, который
            к ней несколько ближе.
            </p><p>
            ММКФ &mdash; Московский Международный кинофестиваль.
            </p>
          </Notes>
          <LHeading size={5}>Госдума <Link href="http://seance.ru/news/gosduma-vs-festivali/">рассмотрела в третьем чтении и приняла</Link> законопроект ограничивающий фестивальные показы фильмов</LHeading>
          <LHeading size={6}><Link href="https://www.facebook.com/yury.saprykin.77/posts/10157651374154867">Что это значит</Link> в переводе на русский. Не будет больше ретроспектив. [...] Не будет Beat Film, Eat Film и фестиваля Стрелки.<br/>Не будет американского и британского фестивалей и вообще никаких фестивалей никаких стран. Только один большой ММКФ, а в Петербурге — «Послание к человеку». Больше ничего. Совсем.</LHeading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>
            Что делать? Я, если честно, уже не знаю.
            </p><p>
            Но есть люди, которые пока ещё знают, и что-то делают. Можно им
            жертвовать деньги, если вам нравится, что они делают.
            </p><p>
            Я бы хотел упомянуть двоих: Медиазону и РосКомСвободу.
            И, конечно, если вам понравился цирк с морзянкой на графиках, то ещё 
            насыпьте на кофе неугомонному Щорсу, который Фил. Без него и того, кто во всём виноват,
            этих графиков бы не было и морзянку рисовать было бы негде.
            </p>
          </Notes>
          <Heading size={4}>Что делать?</Heading>
          <LI><Link href="https://donate.zona.media/">donate.zona.media</Link></LI>
          <LI><Link href="https://roskomsvoboda.org/donate/">roskomsvoboda.org/donate</Link></LI>
          <LI><Link href="https://usher2.club/">usher2.club</Link></LI>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>
            Ну а закончить хотелось бы молитвой. Фил открывал молитвой своё выступление на встрече
            PiterPy: Боже, избави нас от ярости Роскомнадзора.
            Встреча, как вы догадываетесь, была посвящена не столько программированию на Python,
            сколько блокировкам. Она так и называлась «Как я перестал бояться и полюбил блокировки».
            </p><p>
            Спасибо!
            </p><p>
            Давайте что-нибудь обсудим.
            </p>
          </Notes>
          <Text>
          <em>Спаси тебя Иисус, спаси тебя Аллах<br/>от центра «Э» и перегибов на местах.</em>
          </Text>
          <Link href="https://www.youtube.com/watch?v=YccwFWiSryY">... и гнева Роскомнадзора</Link>
          <hr/>
          <Link href="https://slides.ooni.io/2018/GeekPicnic">slides.ooni.io/2018/GeekPicnic</Link>
        </Slide>
      </Deck>
    );
  }
}
