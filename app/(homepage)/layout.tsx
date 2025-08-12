import React from "react";
import Footer from "@/components/structure/Footer";
import Header from "@/components/structure/Header";

const HomepageLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
