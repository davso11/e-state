import { useQuery, useMutation } from "@tanstack/react-query";
import * as actions from "./api";

export const useRegister = () => {
  return useMutation({
    mutationFn: actions.signUp,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: actions.signIn,
  });
};

export const useUser = (
  options?: Partial<{
    enabled: boolean;
  }>,
) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: actions.getUser,
    enabled: options?.enabled ?? false,
  });
};
