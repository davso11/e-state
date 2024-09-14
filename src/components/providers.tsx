import { AuthProvider } from "@/contexts/auth";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const qc = new QueryClient();

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AuthProvider>
      <QueryClientProvider
        client={qc}
        children={children}
      />
    </AuthProvider>
  );
};
