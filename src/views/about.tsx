import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React, { useState } from "react";

import * as m from "../lib/i18n/paraglide/messages.js";
import { useGlobalStore } from "~/store/globalstore.js";
import { StoreDemo } from "~/components/StoreDemo.js";
import { queryClient } from "~/services/tanstackQuery.js";
import { useDemoQuery } from "~/services/useDemoQuery.js";

export const About = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AboutComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export const AboutComponent = () => {
  const { data, isLoading } = useDemoQuery();

  return (
    <div>
      <div>
        {data && (
          <pre className="h-[300px] overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        {isLoading && <div className="skeleton w-full h-[300px]"></div>}
      </div>
      <StoreDemo />

      <p className="text-sm">{m.test()}</p>
      <p className="font-bold">This is my test app</p>
      <Counter />
      <LoginForm />
    </div>
  );
};

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="gap-1 items-center flex">
      <button className="btn btn-outline" onClick={() => setCount(count - 1)}>
        -
      </button>
      <p className="text-sm">{count}</p>
      <button className="btn btn-outline" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      `Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="label" htmlFor="email">
        email
      </label>
      <input
        id="email"
        type="email"
        className="input input-primary"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label className="label" htmlFor="password">
        password
      </label>
      <input
        id="password"
        type="password"
        className="input input-primary"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <input
        className="checkbox checkbox-primary"
        type="checkbox"
        checked={rememberMe}
        onChange={() => {
          setRememberMe((p) => !p);
        }}
      />
      <button className="btn btn-info" type="submit">
        Login
      </button>
    </form>
  );
};

export default Counter;
