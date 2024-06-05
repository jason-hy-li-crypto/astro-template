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
    </div>
  );
};
