import styled from "styled-components";
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import Input from "./ui/Input";
import GlobalStyles from "./styles/GlobalStyles";
import Row from "./ui/Row";

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check In and Out</Heading>
              <Button onClick={() => alert("Check In!!")}>Check In</Button>
              <Button variation="secondary" size="small" onClick={() => alert("Check Out!!")}>Check Out</Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
