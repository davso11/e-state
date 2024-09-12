import { useQuery } from "@tanstack/react-query";
import { TQueryParams } from "@/type";
import * as actions from "./api";

export const useAllProperties = (
  options?: Partial<{
    enabled: boolean;
    q: TQueryParams;
  }>,
) => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: () => actions.getProperties(options?.q),
    enabled: options?.enabled ?? true,
  });
};

export const useProperty = (
  id: number,
  options?: Partial<{
    enabled: boolean;
    q: TQueryParams;
  }>,
) => {
  return useQuery({
    queryKey: ["property", id],
    queryFn: () => actions.getProperty(id, options?.q),
    enabled: options?.enabled ?? true,
  });
};
