import { z } from "zod";
import { http } from "@/lib/http";
import { signInSchema, signUpSchema } from "./validation";
import { APIResponse, AuthData, User } from "@/type";

const BASE_URL = `auth`;

export const signUp = async (data: z.infer<typeof signUpSchema>) => {
  const res = await http
    .post(`${BASE_URL}/register`, { json: data })
    .json<APIResponse<User>>();

  if ("error" in res) {
    throw new Error(res.error);
  }

  return res.data;
};

export const signIn = async (data: z.infer<typeof signInSchema>) => {
  const res = await http
    .post(`${BASE_URL}/login`, { json: data })
    .json<APIResponse<AuthData>>();

  if ("error" in res) {
    throw new Error(res.error);
  }

  return res.data;
};

export const getUser = async () => {
  const res = await http.get(`${BASE_URL}/me`).json<APIResponse<AuthData>>();

  if ("error" in res) {
    throw new Error(res.error);
  }

  return res.data;
};
