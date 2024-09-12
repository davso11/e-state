import { http } from "@/lib/http";
import { APIResponse, Property, TQueryParams } from "@/type";

export const getProperties = async (params?: TQueryParams) => {
  const res = await http
    .get("properties", { searchParams: params })
    .json<APIResponse<Property[]>>();
  if ("error" in res) throw Error(res.error);
  return res.data;
};

export const getProperty = async (id: number, params?: TQueryParams) => {
  const res = await http
    .get(`properties/${id}`, {
      searchParams: params,
    })
    .json<APIResponse<Property>>();
  if ("error" in res) throw Error(res.error);
  return res.data;
};
