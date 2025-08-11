"use server";

import { cookies } from "next/headers";

export const setCookieTrue = async () => {
  const cookieStore = await cookies();
  console.log(cookieStore);
  cookieStore.delete("cookies-consent-fcllc");
  cookieStore.set("cookies-consent-fcllc", "true");
};

export const setCookieFalse = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("cookies-consent-fcllc");
  cookieStore.set("cookies-consent-fcllc", "false");
};

export const deleteAllCookies = async () => {
  const cookieStore = await cookies();
  const cookieNames = cookieStore.getAll().map((cookie) => cookie.name);

  for (const name of cookieNames) {
    cookieStore.delete(name);
  }
  cookieStore.set("cookies-consent-fcllc", "false");
};
