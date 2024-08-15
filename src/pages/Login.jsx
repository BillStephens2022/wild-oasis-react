import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";  

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const P = styled.p`
  margin: auto;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
`

function Login() {
  return <LoginLayout>
    <Logo />
    <Heading as="h4">Log in to your account</Heading>
    <P>*** &apos;Login as Guest&apos; for one click access ***</P>
    <LoginForm />
  </LoginLayout>;
}

export default Login;
