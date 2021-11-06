import * as Page from '../../components/Page'
import * as Navbar from '../../components/Navbar'
import * as Header from '../../components/Header'
import * as Footer from '../../components/Footer'

import Container from '../../components/Container'
import * as Logo from '../../components/Logo'
import * as Text from '../../components/Text'
import * as Input from '../../components/Input'

import headerImage from '../../public/images/contact-header.jpg'

export default function ContactPage() {
  return (
    <Page.Wrapper>
      <header>
        <Navbar.OverlayWrapper>
          <Navbar.Logo>
            <Logo.Animated color="255, 255, 255" id="navbar" /> 
          </Navbar.Logo>

          <Navbar.NavView>
            <Text.Anchor
              href="/"
            >
              Home
            </Text.Anchor>
            <Text.Anchor
              href="/about"
            >
              About
            </Text.Anchor>
            <Text.Anchor
              href="/dashboard"
            >
              Dashboard
            </Text.Anchor>
          </Navbar.NavView>
        </Navbar.OverlayWrapper>
      </header>

      <main>
        <Header.Wrapper>
          <Header.Background
            href={headerImage}
          />

          <Header.Overlay>
            <div
              style={{ height: '100%', padding: '4rem 0 2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <Text.Heading1>
                Contact Us
              </Text.Heading1>
            </div>
          </Header.Overlay>
        </Header.Wrapper>

        <Container>
          <div>
            <code>GMAPS HERE</code>
          </div>

          <div>
            <p>
              <strong>
                Address:
              </strong>
            </p>

            <p>
              50 McIntosh Drive, Suite 106, Markham, ON, L3R 9T3
            </p>

            <p>
              <strong>
                Telephone:
              </strong>
            </p>

            <p>
              N/A
            </p>

            <p>
              <strong>
                Email:
              </strong>
            </p>

            <p>
              mammaritascucina@gmail.com
            </p>
          </div>
        </Container>
        
        <hr />
        <div style={{ background: '#101010', color: '#d4c3b1', padding: '3rem 0' }}>
          <Container>
            <Text.Heading2>
              Send us a message
            </Text.Heading2>

            <form>
              <label htmlFor="name">
                Name
              </label>

              <Input.Text
                id="name"
                placeholder="Enter name"
                // onChange={handleChange}
                // value={inputs.name}
                aria-required
              />

              <Input.Spacer />

              <label htmlFor="email">
                Email
              </label>

              <Input.Email
                id="email"
                placeholder="Enter email"
                // onChange={handleChange}
                // value={inputs.email}
                aria-required
              />

              <Input.Spacer />

              <label htmlFor="message">
                Message
              </label>

              <Input.Textarea id="message" placeholder="Enter message" />
            </form>
          </Container>
        </div>
      </main>

      <footer>
        <Footer.Wrapper>
          <Footer.Directory>
            <Footer.Nav>
              <Footer.NavTitle>mammaritas.ca</Footer.NavTitle>
              <Footer.NavContent>
                <Footer.NavItem href="/dev">Homepage</Footer.NavItem>
                <Footer.NavItem href="/dev/menu">Menu</Footer.NavItem>
                <Footer.NavItem href="/dev/contact">Contact Us</Footer.NavItem>
              </Footer.NavContent>
            </Footer.Nav>

            <Footer.Nav>
              <Footer.NavTitle>
                Legal
              </Footer.NavTitle>

              <Footer.NavContent>
                <Footer.NavItem href="/legal/privacy">Privacy Policy</Footer.NavItem>
                <Footer.NavItem href="/legal/cookie">Cookie Policy</Footer.NavItem>
                <Footer.NavItem href="/legal/terms">Terms of Use</Footer.NavItem>
              </Footer.NavContent>
            </Footer.Nav>
          </Footer.Directory>

          <Footer.Info>
            <Footer.Tagline>
              <Footer.Organization>
                <Footer.OrganizationLogo>
                  <Logo.Default
                    color="102, 102, 102"
                    id="footer"
                  />
                </Footer.OrganizationLogo>
                <Footer.OrganizationName>
                  Mamma Rita&apos;s Cucina
                </Footer.OrganizationName>
              </Footer.Organization>

              <Footer.Copyright>
                © 2021 Mamma Rita&apos;s Cucina. All Rights Reserved.
              </Footer.Copyright>
            </Footer.Tagline>

            <Footer.SocialWrapper>
              {/* <Social.Wrapper>
                <Social.Twitter username="macdonnellscott" />
                <Social.GitHub username="scottmacdonnell" />
                <Social.Instagram username="scott.macdonnell" />
                <Social.LinkedIn username="scottsmacdonnell" />
              </Social.Wrapper> */}
            </Footer.SocialWrapper>
          </Footer.Info>
        </Footer.Wrapper>
      </footer>
    </Page.Wrapper>
  )
}