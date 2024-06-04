import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { queryClient } from "~/services/tanstackQuery";
import { GlobalHooks } from "./GlobalHooks";
export const GlobalComponents = ({}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalHooks />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
