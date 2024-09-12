import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const qc = new QueryClient();

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider
      client={qc}
      children={children}
    />
  );
};
