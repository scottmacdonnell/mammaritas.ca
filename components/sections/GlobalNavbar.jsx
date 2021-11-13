import * as Navbar from '../Navbar'
import * as Logo from '../Logo'
import * as Text from '../Text'

export default function GlobalNavbar() {
  return (
    <Navbar.OverlayWrapper>
      <Navbar.Logo>
        <Logo.Animated colorOne="210, 195, 174" colorTwo="190, 24, 12" colorStrokeOne="210, 195, 174" colorStrokeTwo="190, 24, 12" idOne="navbarOne" idTwo="navbarTwo" /> 
      </Navbar.Logo>

      <Navbar.NavView>
        <Text.Anchor href="/">
          <Text.Heading3>Homepage</Text.Heading3>
        </Text.Anchor>

        <Text.Anchor href="/menu">
          <Text.Heading3>Our Menu</Text.Heading3>
        </Text.Anchor>

        <Text.Anchor href="/contact">
          <Text.Heading3>Contact Us</Text.Heading3>
        </Text.Anchor>
      </Navbar.NavView>
    </Navbar.OverlayWrapper>
  )
}