import CookieConsent from "@/components/custom/CookieConsent";
import React from "react";
import { cookies } from "next/headers";
import Footer from "@/components/structure/Footer";
import Header from "@/components/structure/Header";

const HomepageLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("cookies-consent-fcllc")?.value;

  return (
    <div>
      <CookieConsent cookieValue={cookieValue} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
