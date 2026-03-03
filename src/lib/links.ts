export const APP_URL =
  import.meta.env.VITE_APP_URL ||
  "https://bossflow.vercel.app"; // atualiza aqui depois

export function appLoginUrl() {
  return `${APP_URL}/login`;
}

export function appRegisterUrl() {
  return `${APP_URL}/register`;
}