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
        <Text.Anchor href="/beta/">
          <Text.Heading3>Homepage</Text.Heading3>
        </Text.Anchor>

        <Text.Anchor href="/beta/menu">
          <Text.Heading3>Our Menu</Text.Heading3>
        </Text.Anchor>

        <Text.Anchor href="/beta/contact">
          <Text.Heading3>Contact Us</Text.Heading3>
        </Text.Anchor>
      </Navbar.NavView>
    </Navbar.OverlayWrapper>
  )
}