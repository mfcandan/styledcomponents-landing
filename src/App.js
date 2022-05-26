import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled.js";
import Header from "./components/Header.js";
import GlobalStyles from "./components/styles/Global.js";

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
          <h1>styled</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
