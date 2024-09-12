import ky from "ky";

export const http = ky.create({
  prefixUrl: import.meta.env.VITE_APP_API_BASE_URL,
  retry: 0,
});
