import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

const queryCache = new QueryCache({
  onError: (_error, q) => {
    if (q.meta?.omitErrorReport) {
      return;
    }

    const errString = `error at query: ${JSON.stringify(q.queryKey)}`;

    if (process.env.APP_ENV !== "prod") {
      console.group(errString);
      console.error(_error);
      console.groupEnd();
    }
  },
});
const mutationCache = new MutationCache({
  onError(e, variables, _, mutation) {
    const errString = `error at mutation: ${JSON.stringify({
      mutationKey: mutation.options.mutationKey,
      variables,
    })}`;
    if (process.env.APP_ENV !== "prod") {
      console.group(errString);
      console.error(e);
      console.groupEnd();
    }
  },
});
export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      retry: (failCount) => failCount < 1,
      refetchOnWindowFocus: true,
    },
  },
});
