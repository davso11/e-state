import { useMutation } from "@tanstack/react-query";
import * as actions from "./api";

export const useNewBooking = () => {
  return useMutation({
    mutationFn: actions.createBooking,
  });
};
