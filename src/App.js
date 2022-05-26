import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled.js";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import GlobalStyles from "./components/styles/Global.js";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
