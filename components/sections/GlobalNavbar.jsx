import * as Navbar from '../Navbar'
import * as Logo from '../Logo'
import * as Text from '../Text'

export default function GlobalNavbar() {
  return (
    <Navbar.OverlayWrapper>
      <Navbar.Logo>
        <Logo.Animated color="210, 195, 174" id="navbar" /> 
      </Navbar.Logo>

      <Navbar.NavView>
        <Text.Anchor href="/">
          Home
        </Text.Anchor>

        <Text.Anchor href="/menu">
          Our Menu
        </Text.Anchor>

        <Text.Anchor href="/contact">
          Contact Us
        </Text.Anchor>
      </Navbar.NavView>
    </Navbar.OverlayWrapper>
  )
}