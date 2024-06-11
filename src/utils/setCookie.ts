import Cookies from "js-cookie";

export function setCookie(token: string, remember: boolean) {
  const inOneDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  if (remember) {
    Cookies.set(process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string, token, {
      expires: inOneDay,
      secure: true,
    });
  } else {
    Cookies.set(process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string, token, {
      secure: true,
    });
  }
}
