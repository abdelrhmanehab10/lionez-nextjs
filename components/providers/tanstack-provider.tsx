"use client";

import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface TanstackProviderProps {
  children: React.ReactNode;
}

const TanstackProvider: FC<TanstackProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
