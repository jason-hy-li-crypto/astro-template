import { Container } from "styled-system/jsx";
import { Button } from "~/components/ui/button";
import { m } from "~/i18n/m";

export const Home = () => {
  return (
    <Container>
      <h1>{m.test()}</h1>
      <p>This is the landing page.</p>
      <Button onClick={()=>{
        alert("clcik")
      }}>Get Started</Button>
    </Container>
  );
};
