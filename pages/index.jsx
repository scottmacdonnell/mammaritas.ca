import { useState, useEffect } from 'react' 

import * as Page from '../components/Page'
import * as Navbar from '../components/Navbar'
import * as Header from '../components/Header'

import * as Logo from '../components/Logo'
import * as Text from '../components/Text'

import Container from '../components/Container'

import headerImage from '../public/images/contact-header.jpg'

export default function ComingSoonPage() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    const difference = +new Date(`11/15/${year}`) - +new Date()
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }
  
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    )
  })

  return (
    <Page.Wrapper>
      {/* <header>
        <Navbar.OverlayWrapper>
          <Navbar.Logo>
            <Logo.Animated color="255, 255, 255" id="navbar" /> 
          </Navbar.Logo>
        </Navbar.OverlayWrapper>
      </header> */}
      
      <main>
        <Header.IndexWrapper>
          <Header.Background
            href={headerImage}
          />

          <Header.Overlay>
            <div
              style={{ position: 'relative', height: '100%', padding: '4rem 0 2rem 0' }}
            >
              <div style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
                <Container>
                  <div>
                    <Text.Heading1>
                      {timerComponents.length ? "Coming Soon" : "We're going live shortly!" }
                    </Text.Heading1>
                    <Text.SHeading>
                      {timerComponents.length ? timerComponents : "" }
                    </Text.SHeading>
                  </div>
                  <br />
                  <Text.SHeading>
                    {"For any questions, feel free to contact us at "}
                    <Text.Anchor
                      href="mailto:mammaritascucina@gmail.com"
                    >
                      mammaritascucina@gmail.com
                    </Text.Anchor>
                    .
                  </Text.SHeading>
                </Container>
              </div>
            </div>
          </Header.Overlay>
        </Header.IndexWrapper>
      </main>
    </Page.Wrapper>
  )
}