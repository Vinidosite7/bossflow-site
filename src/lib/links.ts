export const APP_URL =
  import.meta.env.VITE_APP_URL ||
  "https://app.bossflow.pro"; // atualiza aqui depois

export function appLoginUrl() {
  return `${APP_URL}/login`;
}

export function appRegisterUrl() {
  return `${APP_URL}/register`;
}