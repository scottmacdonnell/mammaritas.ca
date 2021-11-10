import * as Footer from '../Footer'
import * as Logo from '../Logo'

export default function GlobalFooter() {
  return (
    <Footer.Wrapper>
      <Footer.Directory>
        <Footer.Nav>
          <Footer.NavTitle>mammaritas.ca</Footer.NavTitle>
          <Footer.NavContent>
            <Footer.NavItem href="/beta">Homepage</Footer.NavItem>
            <Footer.NavItem href="/beta/menu">Menu</Footer.NavItem>
            <Footer.NavItem href="/beta/contact">Contact Us</Footer.NavItem>
          </Footer.NavContent>
        </Footer.Nav>

        {/* <Footer.Nav>
          <Footer.NavTitle>
            Legal
          </Footer.NavTitle>

          <Footer.NavContent>
            <Footer.NavItem href="/legal/privacy">Privacy Policy</Footer.NavItem>
            <Footer.NavItem href="/legal/cookie">Cookie Policy</Footer.NavItem>
            <Footer.NavItem href="/legal/terms">Terms of Use</Footer.NavItem>
          </Footer.NavContent>
        </Footer.Nav> */}
      </Footer.Directory>

      <Footer.Info>
        <Footer.Tagline>
          <Footer.Organization>
            <Footer.OrganizationLogo>
              <Logo.Default
                color="208, 195, 186"
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
  )
}