import { useQuery } from "@tanstack/react-query";
export const useDemoQuery = () => {
  return useQuery({
    queryKey: ["aaa-aaa"],
    queryFn: async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      return data.results[0];
    },
  });
};
