import React, { useState } from "react";

import * as m from "../paraglide/messages.js";
import { Flex, Box } from "styled-system/jsx";
import { Button } from "~/components/ui/button.js";
import { FormLabel } from "~/components/ui/form-label.js";
import { Input } from "~/components/ui/input.js";
import { Text } from "~/components/ui/text.js";
import { Checkbox } from "~/components/ui/checkbox.js";
export const About = () => {
  return (
    <Box mx="auto" p={4} bg="bg.subtle">
      <Text as="h1" size="2xl">
        {m.test()}
      </Text>
      <Text as="h2" size="xl" fontWeight={"bold"}>
        This is my test app
      </Text>
      <Text size="sm">1123123</Text>
      <Counter />
      <LoginForm />
    </Box>
  );
};

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Flex gap={1} alignItems={"center"}>
      <Button
        variant={"outline"}
        colorPalette={"accent"}
        colorScheme={"light"}
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
      <Text size="sm">{count}</Text>
      <Button variant="jason" onClick={() => setCount(count + 1)}>
        +
      </Button>
    </Flex>
  );
};

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      `Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">email</FormLabel>
      <Input
        id="name"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Checkbox
        checked={rememberMe}
        onChange={(event) => {
          setRememberMe(event.target.checked);
        }}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Counter;
