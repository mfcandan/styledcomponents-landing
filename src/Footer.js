import SocialIcons from "./components/SocialIcons";
import { Container } from "./components/styles/Container.styled";
import { Flex } from "./components/styles/Flex.styled";
import { StyledFooter } from "./components/styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-234-567-8900</li>
            <li>example@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 Fatih Candan</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
