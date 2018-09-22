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
  ISPSelfCensorship: require("../assets/isp-self-censorship.png"),
  RavingIran: require("../assets/raving-iran.jpg"),
  NotEnoughBillboards: require("../assets/not-enough-billboards.jpg"),
  VMinakov: require("../assets/vminakov.png"),
  CDEKOrder: require("../assets/cdek-order.png"),
  CDEKVK: require("../assets/cdek-vk.png"),
  RKNTyan: require("../assets/aquam1ne-rkn-tyan-amazon.jpg"),
  OONIHorizontalColor: require("ooni-components/components/svgs/logos/OONI-HorizontalColor.svg"),
  OONIVerticalColor: require("ooni-components/components/svgs/logos/OONI-VerticalColor.svg"),
  Wikileaks: require("../assets/wikileaks.jpg"),
  WikileaksTweet: require("../assets/wikileaks-tweet-948320651407962112.png"),
  CloudflareDNS: require("../assets/1dot1dot1dot1.png"),
  BobukAWS: require("../assets/bobuk.png"),

  TermuxYotaRAS: require("../assets/termux-yota-ras.png"),
  DigiSecLabUA: require("../assets/digisec-lab-ua.png"),
  MTFreeSPbCTF: require("../assets/mt_free-spbctf.png"),
  TheFastestDraw: require("../assets/the_fastest_draw.png"),
};

preload(images)

const GRID_HEIGHT = 400
const GRID_WIDTH = 300

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
          <Notes>
            Добрый день.
            Сегодня мы опять поговорим о том, как же весело и страшно нам с РКН жить.
            И о том, как это больно и смешно.
          </Notes>
          <Image style={{paddingBottom: '30px'}} width="600px" src={images.OONIHorizontalColor} />
          <Heading size={2}>Ркн-тян</Heading>
          <Heading size={4}>болячки и побочки</Heading>
          <hr/>
          <Heading size={6}>Леонид Евдокимов</Heading>
          <Heading size={6}>
              CryptoInstallFest 5<br/>
              Москва, 22 сентября 2018
          </Heading>
          <Link href="https://slides.ooni.io/2018/CIF">slides.ooni.io/2018/CIF</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            Представлюсь.<br/>
            Вообще &mdash; я бывший яндексоид.
            Теперь я работаю на контору под названием Tor Project Inc., которая делает одноимённую сеть и браузер.<br/>
            А ещё я тот чел с морзянкой, который не положил интернет. И папка про настройку mesh-сетей не пригодилась.<br/>
            Но поздравить несколько сотен тысяч человек с днём радио получилось, и это прекрасно.
          </Notes>
          <CountryReportFinding>Бывший darkk@yandex-team.ru</CountryReportFinding>
          <CountryReportFinding>Ныне darkk@torproject.org</CountryReportFinding>
          <Image width='920px' src={images.Usher2Morze} />
          <p>Почётный клоун <Link href="https://usher2.club/">usher2.club</Link>.</p>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
          <Notes><p>
            В tor я не занимаюсь ни сетью, ни браузером, а проектом под названием OONI.
            </p><p>
            OONI расшифровывается как &quot;Открытая обсерватория сетевых помех&quot;. Это проект
            направленный на повышение прозрачности в области Интернет-цензуры по
            всему миру.
            </p><p>
            Прокт с открытыми методологиями, исходным кодом и открытыми данными.<br/>
            </p><p>
            Нужен и полезен он по той причине, что многие страны чёрные списки блокировок скрывают, да и вцелом ситуация описывается словам &quot;бардак и хаос&quot;.<br/>
            </p><p>
            Многое из этого можно сказать и про проект Эшер-2 неугомонного Фила Кулина.
            </p></Notes>
          <Image width="300px" src={images.OONIVerticalColor} align='right'/>
          <Heading size={3} textColor="primary">The Open Observatory<br/>of Network Interference</Heading>
          <WorldDotsBg>
            <WorldDots primaryColor={colors.palette.blue5} highlightColor={colors.palette.blue9}/>
          </WorldDotsBg>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.Wikileaks} bgDarken={0.7} bgSize='100%'>
          <Notes><p>
            Но сразу оговорюсь, я на ничего не буду говорить про политику.
            </p><p>
            The Tor Project &mdash; американская некоммерческая организация, а
            у Wikileaks есть замечательная утечка, которая рассказывает про &quot;методичку госдепа&quot;
            про всякие права человека и свободы у &quot;союзников&quot; и &quot;противников&quot;.
            </p><p>
            Все, о чём я буду говорить, либо подтверждается данными напрямую, либо ссылается на кого-либо ещё,
            либо является моим частным мнением.
          </p></Notes>
          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.WikileaksTweet} />
            </WhiteImageContainer>
            <Link href='https://twitter.com/wikileaks/status/948320651407962112'>twitter/wikileaks</Link>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes><p>
            Так вот. Если попытаться ужать презентацию в один слайд, то получится примерно такой.
            Но я расскажу подробнее несколько баечек и новостей на тему.
            И, надеюсь, ответить на какие-нибудь интересные вам вопросы.
            </p><p>
            А про политику и приминение законов спросите Мишу Климарёва и Саркиса Дарбиняна.
            Они тоже будут выступать сегодня.
          </p></Notes>
          <Heading fit size={2}>БУДЕТ</Heading>
          <Heading fit size={2}>ХУЖЕ</Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfEgypt} bgDarken={0.7} bgSize='120%'>
          <Notes><p>
            Я приведу пример и расскажу чуть подробнее о том, какими исследованиями занимается OONI.
            Мой любимый пример из всех тех стран, на которые получилось
            посмотреть подробно, это Египет.
            </p><p>
            Там были и запрет HTTPS и SSH. И OpenVPN. И на сети в конфигурации фильтрующего
            оборудования там наблюдается некоторый бардак.
            И повсеместная вставка рекламы &mdash; т.е. не от одного конкретного провайдера, а на магистрали.
            </p><p>
            Но там был и смешной кейс эффективности &quot;гражданского давления&quot;.
            Канадские исследователи из CitizenLab опубликовали отчёт с деталями
            реализации вставки рекламы 9 марта. В тот же день вставки рекламы прекратились.
            Ну или по крайней мере их перестали замечать.
            </p><p>
            А ещё, если верить БиБиСи, в Египте летом приняли закон, позволяющий в целях борьбы
            с нестабильностью и терроризмом штрафовать граждан за посещение заблокированных сайтов.
          </p></Notes>
          <CountryReportFinding>В 2016 &mdash; временный запрет HTTPS, SSH.<br/>В 2018 &mdash; OpenVPN.</CountryReportFinding>
          <CountryReportFinding>Каскадное нагромождение разных фильтров.<br/>
          По-разному работающего, по-разному настроеного.<br/>
          Эшелонированная оборона от контента?
          </CountryReportFinding>
          <CountryReportFinding>Врезка рекламных редиректов, в т.ч. раздающих малварь.<br/>
          Прекратилась после публикации отчёта CitizenLab.</CountryReportFinding>
          <CountryReportHeading>Состояние Интернет-цензуры в Египте</CountryReportHeading>
          <CountryReportDate>Июль 2018</CountryReportDate>
          <Link href='https://ooni.io/post/egypt-internet-censorship/'>ooni.io/post/egypt-internet-censorship</Link>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
            <Notes><p>
              Помните, в марте кто-то нарисовал смешную картинку?
              Я говорю про март после истории с проблемами у одного из крупнейших
              российских провайдеров. Когда Транстелеком немного упал 14 марта
              из-за, скажем так, в том числе и несовершенства
              администрирования чёрных списков Роскомнадзора.
              </p><p>
              Никто в марте вокруг меня не думал, что РКН всерьёз начнёт
              блокировать Амазон и прочих облачных хостинг-провайдеров
              подсетями, закрывая доступ к миллионам веб-сайтов и
              онлайн-сервисов в попытке заблокировать Telegram.
            </p></Notes>
            <Image src={images.RKNTyan} height="600px"/>
            <Link href='https://twitter.com/aquam1ne/status/977509063562072065'>автор: @aquam1ne</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
            <Notes><p>
                Я тогда в конце марта думал, что интересной темой для исследования будет то, как
                одна из многочисленных вариаций DNS-атак влияет на ping до &quot;атакуемых&quot;
                серверов.
                </p><p>
                Геймеры, трейдеры... Кому ещё пинг важен?
                </p><p>
                Но буквально следующая пара недель изменили представление о том,
                что является &quot;интересным&quot; в блокировках в России.
                </p><p>
                Кажется, впервые из-за блокировок онлайн-сервисов люди вышли на улицы.
                На протестный митинг, который объединил даже весьма холодно относившихся
                друг к другу политические движения.
                </p><p>
                Не то что бы общественное давление имело грандиозный успех.
                Но в прошлом прецеденты такого успеха были и отголоски их видны до сих пор.
                </p><p>
                Кстати, я августе наконец-то аккуратно измерил повторно прирост
                задержки от потенциальной DNS-атаки на паре
                провайдеров: он был мизерный.
                </p><p>
                И ещё. Если верить цифрам Неугомонного Фила, то число протухших доменов в выгрузке
                РКН уже не исчисляется тысячами. После нашей шалости с морзянкой оно стабильно держится
                на цифре порядка ста доменов.
                </p><p>
                Т.е. вся эта возня, кажется, имеет какой-то эффект.
                </p>
            </Notes>
            <Heading fit size={2}>ping: 38ms &rarr; 61ms</Heading>
            <Heading fit size={5}>
              Квартили &quot;дополнительных&quot; задержек (25/50/75%):
            </Heading>
            <CountryReportFinding>Омск, Дом.ру: −0.9 / +0.4 / +1.5 ms</CountryReportFinding>
            <CountryReportFinding>СПб, Ростелеком: −2 / +5 / +18 ms</CountryReportFinding>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>Но вернёмся на четыре года назад. Кто-нибудь пользуется VPN на смартфоне с Yota?</p>
            <hr/>
            <p>Возможно, вы помните замечательную историю гражданского давления на хабре.
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

          <Appear fid="2"><div>
            <LI>26 сентября 2014, &quot;<Link href="https://habr.com/company/yota/blog/238297/">VPN в мобильном интернете от Yota</Link>&quot;<br/>
            ... VPN-трафик никак не ограничивается ... VPN также относится к высокоприоритетным сервисам ...
            </LI>
            <LI>17 сентября 2015, &quot;<Link href="https://habr.com/company/yota/blog/267071/">Уже год создаём оператора вместе</Link>&quot;<br/>
            ... изначально мы не планировали внедрять такой функционал, но выяснилось, что VPN на смартфонах очень востребован ...
            </LI>
          </div></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            А потом в апреле началась, как её назвали, первая гражданская кибер-война за Телеграм.
            Знакомые слова?
          </Notes>
          <CountryReportFinding>
            Как же начинает надоедать. Сейчас клиент 10 минут жаловался коллеге, что не может играть в world of trucks. Ещё и извинений требует от нас лично!
          </CountryReportFinding>
          <CountryReportFinding>
            У нас клиенты воют! Гугл не работает, ютуб не работает, инстаграм не работает, твитч не работает, стим не работает. на некоторых сайтах просто белый экран.
          </CountryReportFinding>
          <CountryReportFinding>
            Слушайте, а что там про инстаграм?
          </CountryReportFinding>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
              Кто-нибудь пользуется Telegram на смартфоне с Yota? Картинки и стикеры тормозят?<br/>

              [&#x1f5b0;] Если у вас тормозят картинки &mdash; попробуйте использовать Socks5
              Proxy вместо прямого подключения и MTProto Proxy.  Тогда, видимо,
              соединение будет классифицировано как VPN и ограничения на скорость
              передачи не будут столь жёсткими.  По крайней мере &mdash; пока.<br/>

              А MTProto Proxy, видимо, классифицируется
              как p2p или как &quot;всё остальное&quot;, что намекает
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
          <Notes><p>
            Ну и конечно же подобным образом настроенные фильтры сказываются не
            только на Telegram, но и на Tor.
            </p><p>
            Один мой знакомый без устали повторяет мантру &quot;у меня приватный obfs4-мост, мне не страшен РКН&quot;.
            Очевидно, он не пользуется услугами Yota.
            </p><p>
            Можно прогнать Speedtest на разных настройках.<br/>
            И получить прекрасные цифры.
          </p></Notes>
          <Heading size={2}>Yota vs. Tor</Heading>
          <LI>
            <em>Видимо</em>, Speedtest получает приоритет.<br/>
            Скорость ~57 мбит/с
          </LI><LI>
            <em>Видимо</em>, Speedtest через Tor красится DPI как &quot;белый&quot; VPN.<br/>
            Скорость ~7 мбит/с
          </LI><LI>
            <em>Видимо</em>, Speedtest через Tor + obfs4 красится DPI как p2p.<br/>
            Скорость неизвестна, Tor зависает на bootstrap 10%<br/>
            ¯\_(ツ)_/¯
          </LI>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes><p>
            Кстати. Два года назад тоже был CIF. Мне он запомнился встречей подписей ключей PGP,
            где я обменялся ключами в том числе и с Димой Богатовым и Таней Фёдоровой. И ещё &mdash; несколькими презентациями.
            </p><p>
            Криптоэнтузиаст Вартан Хачатуров интересно рассказывал про отечественную криптографию.<br/>
            Я даже проникся и потестил ГОСТовые подписи и хэш-суммы в своём проекте.
            </p><p>
            А Сергей Матвеев рассказывал про свою программу GoVPN. И там был вот примерно вот такой слайд.
            </p><p>
            Сергей говорил примерно следующие слова:
            </p><p>
            Если у трафика нет никаких отличительных признаков, то как мы можем что-то явно заблокировать? Никак.
            Или мы ничего не блокируем, потому что по-честному мы это не можем сделать.
            Или блокируем просто рандомом. Или блокируем всё.
            </p><p>
            Т.е. либо всё, либо ничего: шум этим и хорош.
            Шум это такая лакмусовая бумажка, которая показывает границу между whitelist блокировками и blacklist.
            </p><p>
            Whitelist &mdash; это не Интернет, это удалённый доступ до чётко заданных ресурсов.
            </p><p>
            Конец цитаты.
          </p></Notes>
          <Heading size={2}>GoVPN: готовимся к Великому Российскому Firewall</Heading>
          <LI><tt>cat /dev/urandom | nc host port ?</tt></LI>
          <LI><tt>cat radiotelescope.raw | nc host port ?</tt></LI>
          <LI><tt>govpn -iface tap3 ... -remote host:port ?</tt></LI>
          <Link href="https://www.youtube.com/watch?v=Civ3CKW71pA">CIF3 — Сергей Матвеев — GoVPN</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="black">
          <Notes><p>
          Собственно, в терминологии Сергея Матвеева, Yota &mdash; уже не про Интернет.
          </p><p>
          Только не поймите меня неверно. Я не говорю, что Yota &mdash; негодяи.
          Наоборот, я не без удовольствия пользуюсь их услугами.
          Я лишь ссылаюсь на них, как на людей внедривших и эксплуатирующих технологию
          классификации трафика на промышленных объёмах трафика.
          </p><p>
          Ну а практическое следствие: если подобный классификатор трафика
          развёрнут в Yota, то он может быть развёрнут и в любом другом
          операторе сотовой связи. Если ещё не.
          </p><p>
          Не понятно, насколько эти рассуждения применимы к операторам
          &quot;фиксы&quot;, предоставляющим широкополосный доступ по проводам.
          </p><p>
          Судя по регулярно встречающимся <tt>/32</tt> маршрутам &mdash; в проводе до сих
          пор вопрос экономии ресурсов DPI актуален и, наверное, можно надеяться на Интернет.
          </p><p>
          Но в воздухе &mdash; на Интернет рассчитывать не приходится.
          </p></Notes>
          <Image src={images.TermuxYotaRAS} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes><p>
            Ну и, конечно, Yota не уникальный пример тут.
            </p><p>
            Я уже рассказывал в июне,
            как ростовский Ростелеком пытается блокировать Telegram опираясь на
            пакеты характерного размера.
            </p><p>
            Сообщения о попытках подобных блокировок
            приходили из Ростова и в августе.
            </p><p>
            Но мы знаем достоверно, что подобные эксперименты на живом трафике не прекратились.
          </p></Notes>
          <Heading fit size={2}>Poor man’s MTProto</Heading>
          <LI>О том, как Ростовский Ростелеком MTProto блокировал.</LI>
          <Link href="https://github.com/darkk/poormansmtproto/">github/poormansmtproto</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes><p>
            Спонсор следующего слайда: CTF в Петербурге.
            </p><p>
            Эти славные люди рассказали следующую историю про сеть MT_FREE, про
            тот самый Wi-Fi в московском метро.
            </p><p>
            При использовании Socks5 для соединения с Telegram из сети MT_FREE
            (провайдер Максима Телеком) через полчаса-час на адрес Socks5
            приходит сканер с адреса из &quot;клиентской&quot; <a href="https://dnslytics.com/bgp/as25159">сети датацентра</a> Мегафона,
            судя по PTR записям вида <a href="https://stat.ripe.net/178.176.30.221">clients-221.30.176.178.misp.ru</a>.
            Как миниум с августа IP адрес этого сканера не меняется.
            </p><p>
            А если это делать с автобусной остановки, которую обслуживает
            Net-By-Net, то сканер не приходит...
            </p><p>
            Т.е. Максима Телеком или аплинки (МТС? Мегафон?) слушают трафик в
            поисках Socks5 проксей.
            </p><p>
            Затем сканер проверят доступность TCP порта полу-открытым
            сканированием (SYN, SYN-ACK, RST). После успешной проверки сканер
            пытается установить Socks5 соединение с сервером из подсети
            Telegram и произвести обмен данными с ним.
            </p><p>
            Фил считает, что в этой истории снифер &mdash; это бомба.<br/>
            Но на мой вкус самое интересное &mdash; дальше.
          </p></Notes>
          <Image src={images.MTFreeSPbCTF} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes><p>
          Через час-полтора после прихода сканера <em>НЕКОТОРЫЕ</em> провайдеры
          начинают блокировать доступ к просканированному серверу: МГТС, МТС,
          Мегафон, Yota, Билайн и др.
          </p><p>
          Ещё через час-полтора IP адрес появляется в &quot;выгрузке&quot; и
          &quot;дельтах&quot;, при этом отметка времени ts у IP-адреса
          соответствует времени появления в выгрузке и &quot;отстаёт&quot; от
          времени начала блокировки на выделенных провайдерах.
          </p><p>
          Ну и таймштамп из выгрузки совпадает с временем начала блокировки
          сервера <em>ОСТАЛЬНЫМИ</em> провайдерами. Т.е. ts не совсем с потолка.
          </p><p>
          На графике время отсчитывается по вертикали, снизу вверх.<br/>
          Красными точками отмечены засечки, когда Socks5 сервер перестал быть доступен
          с конкретного зонда ботнета RIPE Atlas.<br/>
          Чёрная пунктирная черта &mdash; время прихода сканера.<br/>
          Синяя горизонтальная линяя &mdash; таймштамп времени блокировки IP адреса согласно блоклиста РосКомНадзора.
          </p><p>
          Т.е. на графике явно видно, что провайдеры разделяются на блокировщиков первой и второй гильдии.<br/>
          Я не знаю, как это интерпретировать. И не знаю, легально ли это вообще.
          </p></Notes>
          <Image width='920px' src={images.TheFastestDraw} />
          <Link href="https://github.com/darkk/rkn-git-flow/">github/rkn-git-flow</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="black">
          <Notes><p>
            Но вообще наличие нескольких &quot;бранчей&quot; блоклиста &mdash; это некоторая новая для меня данность.
            </p><p>
            Digital Security Lab Украина на этой неделе опубликовали прекрасное исследование про Крым.
            Насколько я понял, из собраных ими данных следует, что <em>В ДОПОЛНЕНИЕ</em> к Российском блоклисту у Крымчан есть некоторые &quot;дополнительные&quot; ограничения,
            некоторые дополнительные Украинские сайты отдают провайдерские заглушки.
            </p><p>
            Т.е. если мы предположим что Крым &mdash; российский, то окажется, что у блоклиста
            есть бранчи по времени, когда разные провайдеры блокируют одно и то же в разное время,
            и бранчи по пространству, когда в разных географических локациях блоклист разный.
            </p><p>
            Т.е. учитывая одномерную списочную структуру блоклиста мы получаем,
            что полноценное представление блоклиста становится как минимум трёхмерным.
            </p><p>
            Т.е. мы заслужили вот такой вот киберпанк.
            </p><hr/><p>
            Этот коллектив опубликовал также исследования про Луганск и Донецк, но эти тексты я ещё не успел прочитать.
          </p></Notes>
          <Image width='600px' src={images.DigiSecLabUA} />
          <Link href="https://medium.com/@cyberlabukraine/crimea-has-a-website-ban-list-additional-to-russia-wide-list-a-research-proves-4f20fa6fc762">medium/@cyberlabukraine</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes><p>
            Вообще, конечно, очень обидно во всём этом блокировочном угаре
            за цифровые образовательные проекты.
            </p><p>
            Особенно обидно на фоне декларируемой федеральным законом &quot;О Связи&quot;
            борьбы с цифровым неравенством.
            </p><p>
            Вот и получается, что раньше неравенство было в том, у кого есть
            широкополосный доступ в Интернет, то теперь добавляется новый
            водораздел: умение использовать методы обхода интернет-цензуры
            и, что сложнее, уменее вовремя их включать, при обнаружении сбоя в сети.
            </p><p>
            Процитирую комментарий со Степика:

            Этот курс [по Python] отчпокал меня как последнюю <em>самочку</em>.
            Иногда я замечал, что это мне даже нравится. Курс сложный. Иногда
            меня не устраивала полнота условия задачи. Плюсы: *) Бесплатно *)
            Харизматичный лектор *) Много интересного материала<br/>
            Минусы: *) Последняя задача в теме API.
            Она не решается без установки VPN из-за нашего славного
            роскомнадзора, который блокирует все ip без разбора в погоне за
            телеграм.
          </p></Notes>
          <Heading size={2}>Образование, РКН, неравенство</Heading>
          <LI>stepik <Link href="https://stepik.org/course/512/reviews/8060">:-(</Link></LI>
          <LI>Coursera :-(</LI>
          <LI>SkyEng <Link href="https://www.vedomosti.ru/technology/articles/2018/04/17/766923-kto-postradal">:-(</Link></LI>
          <LI>TED <Link href="https://atlas.ripe.net/measurements/15725863/?filter=&show_only=Failed#!map">:-(</Link></LI>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes><p>
            Но, конечно, всякая инфраструктура тоже пострадала. Слышали, например, что Firefox интегрировал DNS-over-HTTPS
            от Cloudflare? Ну вот он, например, у Ростелекома и ряда других провайдеров не доступен. Причина?
            Та же самая &quot;DNS-атака&quot;. А если точнее &mdash; фильтры, которые убивают попытки HTTPS соединения
            без отправленного открытым текстом SNI заголовка.
            </p><p>
            SNI не используется не только при запросах к DNS-over-HTTPS, но и, например, при работе с рядом встроенных сервисов
            браузера <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=765064">Firefox</a>.
            </p><p>
            Ну вы поняли...
          </p></Notes>
          <Image width='920px' src={images.CloudflareDNS} />
          <Link href="https://1.1.1.1/help">1.1.1.1/help</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Вся эта блокировка Амазона, Хецнера, Digital Ocean с мощным API огорчает и тех, кому блокировку обойти не сложно.
          Тех, кто делает сервисы для людей.<br/>
          Фигурное вырезание по сетям облачных хостеров становится дополнительной, никому не нужной работой, которую на ровном месте создал РКН.
          </Notes>
          <Image src={images.BobukAWS} />
          <Link href="https://twitter.com/bobuk/status/1032926031538270209">twitter/bobuk</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          В июле я ещё допускал мысль, что Роскомнадзор в каком-то смысле не в курсе того, сколько полезных ресурсов всё ещё находится
          в заблокированных подсетях.
          Что РКН не в курсе, что они даже anus.com сдуру заблокировали.<br/>
          И я написал открытое письмо на этот счёт.
          </Notes>
          <Heading size={2}>Блокировка anus.com</Heading>
          <Link href="https://usher2.club/articles/open-letter-darkk-net/">Открытое письмо об избыточных блокировках</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          А неугомонный Фил отправил набор из полудюжины вопросов по мотивам этого открытого письма в Министерство Цифрового Развития (сокращённо &mdash; минцирк).
          Ответ? Отписка, где ни на один вопросов из шести ответа по существу не дано.
          </Notes>
          <Image src={images.NotEnoughBillboards} />
          <Link href="https://usher2.club/articles/open-letter-darkk-net/">Открытое письмо об избыточных блокировках</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes><p>
          Дополняет картину высказанное 16 июля неофицальное мнение Владислава Минакова, сотрудника Радиочастотного центра, занимающегося автоматизированной системой &quot;Ревизор&quot;.
          </p><p>
          Если кто не знает, Ревизор занимается отслеживанием того, что все провайдеры всё-всё-всё блокируют.<br/>
          </p><p>
          Ну вы поняли, драка закончена, кулаками махать поздно. Пора привязывать к Socks5-серверу хранение учётных записей в MySQL.
          </p></Notes>
          <Image width='920px' src={images.VMinakov} />
          <Link href="https://t.me/i_love_auditor/156725">@i_love_auditor</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Или вот ещё замечательная история про персональные данные и всё такое. Я в магазине Медиазоны купил футболку &quot;Будет Хуже&quot;.
          С доставкой до пункта самовывоза. На номер телефона даже пришло пара SMS-сообщений о том, что заказ отправлен СДЭКом...
          </Notes>
          <Image src={images.CDEKOrder} />
          <Link href='https://shop.zona.media/'>shop.zona.media</Link>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.CDEKVK} bgColor="white" bgSize="100% auto" bgRepeat="no-repeat">
          <Notes>
          Да вот только СДЭК, который доставлял пакет, прислал уведомление о доставке не в электронную почту, и не в SMS.
          Он прислал его ВКонтакте. Т.е., конечно, да, у меня на странице указан этот номер. Но всё же как-то это...
          Я не уверен на все 100%, давал ли я согласие на такую обработку персональных данных.
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            И всё веселье происходит на фоне подобных цифр относительно
            преследований &quot;за слова&quot;.<br/>

            Но интересны не только эти цифры. Интересно ещё, сколько людей включило
            самоцензуру и побоялось лишний раз лайкнуть сатирическую картинку.<br/>

            К сожалению, ни одного подобного открытого исследования мне не известно.
          </Notes>
          <Image src={images.VKSelfCensorship} />
          <Link href='https://twitter.com/max_katz/status/1030507640026214400'>автор: @max_katz</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            Единственное, что я знаю про самоцензуру &mdash; это история, когда я сделал исследование о том, как
            провайдеры сабботируют исполнение ковровой блокировки РосКомНадзора.
            Исследование я сделал и оно даже минут десять провисело в сети.
            После этого Фил убрал его из фейсбука. И меня попросил убрать.
            Со словами о том, что его об этом попросили провайдеры.
            Такая вот самоцензура.
          </Notes>
          <Image src={images.ISPSelfCensorship} />
          <Heading size={4}>Увы, без подробностей</Heading>
        </Slide>

        <Slide bgImage={images.RavingIran} transition={["fade"]} bgColor="white" bgSize="auto 100%" bgRepeat="no-repeat">
          <Notes><p>
            К слоу о цензуре и самоцензуре.
            </p><p>
            Хочу порекомендовать фильм &quot;Рейв в Иране&quot;.
            Нарезка документальных кадров очень красиво описывает жизнь двух
            ди-джеев, играющих электронную музыку на подпольных рейвах в Иране.
            </p><p>
            Ну и то, как они в итоге собрали вертушки и завели красный трактор.
            </p><p>
            Отдельно где-то между строк в фильме звучит одна из возможных причин запрета
            Телеграма в Иране &mdash; стикеры. Они позволяют каждому смеяться над какой-нибудь
            нелепостью властей и распространяются как мемесы. Ничего не напоминает?
          </p></Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes><p>
            Что делать? Я, если честно, уже не знаю.
            Уровень абсурда за последние месяцы превысил разумные пределы, а состояние предсказуемости связи через Интернет в России
            стало всё больше напоминать сети Ирана. Ну т.е. уровень сложности приближается к &quot;счастливой отладки&quot;.
            </p><p>
            Например, мне месяц назад написали о подозрении, что Википедию блокируют в Чечне.
            Может быть намеренно, может быть из-за того, что провайдер гоняет рафик через Иран/Турцию…
            Попросили помочь разобраться… Разобраться, увы, не получилось, т.к. добровольца для измерений в Чечне не нашлось.
            Но суть в том, что и протечка цензуры из соседних стран и целенаправленная блокировка &mdash; оба варианта меня уже не особо удивят.
            </p><p>
            Но есть люди, которые пока ещё знают, и что-то делают.
            Можно им жертвовать, если вам нравится, что они делают.
            </p><p>
            Я бы хотел упомянуть двоих: Медиазону и РосКомСвободу.
            И, конечно, если вам понравился цирк с морзянкой на графиках, то ещё
            насыпьте на кофе неугомонному Щорсу, который Фил.
            Без него и того, кто во всём виноват,
            этих графиков бы не было и морзянку рисовать было бы негде.
          </p></Notes>
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
            И я хотел бы попросить прощения у тех, кто пришёл послушать про
            диагностику сетевых проблем с границы сети.<br/>
            К сожалению, вместо подготовки слайдов про возможные вариации
            traceroute, reverse traceroute, parasitic traceroute, про различные
            пакеты с данными к traceroute, вместо всего этого я катался по
            кольцевой линии московского метро. Но если кому-то интересно, и
            кто-то пришёл именно за этим, могу рассказать или ответить на
            вопросы: вцелом там ничего особо сложного.
            </p><p>
            Давайте что-нибудь обсудим. Какие у вас есть вопросы?
            </p>
          </Notes>
          <Heading size={3}>
          <em>Спаси тебя Иисус,<br/>спаси тебя Аллах<br/>от центра «Э»<br/>и перегибов на местах.</em>
          </Heading>
          <hr/>
          <Link href="https://www.youtube.com/watch?v=YccwFWiSryY">... и гнева Роскомнадзора</Link>
          <hr/>
          <Link href="https://slides.ooni.io/2018/CIF">slides.ooni.io/2018/CIF</Link>
        </Slide>
      </Deck>
    );
  }
}
