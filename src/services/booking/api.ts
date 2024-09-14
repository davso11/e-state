import { z } from "zod";
import { http } from "@/lib/http";
import { bookingSchema } from "./validation";
import { APIResponse, Booking } from "@/type";

const BASE_URL = `bookings`;

export const createBooking = async (data: z.infer<typeof bookingSchema>) => {
  const res = await http
    .post(BASE_URL, { json: data })
    .json<APIResponse<Booking>>();

  if ("error" in res) {
    throw new Error(res.error);
  }

  return res.data;
};
