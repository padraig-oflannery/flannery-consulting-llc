"use client";

import useScroll from "@/hooks/useScroll";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import appConfig from "@/app.config";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const Header = () => {
  const scrollPosition = useScroll();
  const mobile = useIsMobile();

  if (mobile) {
    return (
      <div className="fixed top-0 w-screen bg-white border-b-[1px] border-b-black/30 z-50 h-[80px] flex items-center justify-center px-4">
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
          <Link href="/">
            <Image
              src={appConfig.logo.src}
              alt={appConfig.logo.alt}
              width={50}
              height={50}
            />
          </Link>
          <Button
            variant="outline"
            className="text-sm font-light text-black/"
            asChild
          >
            <Link
              className="flex items-center justify-center space-x-2"
              href="/#contact-us"
            >
              Contact Us <ArrowRightIcon className="w-5 h-5" strokeWidth={1} />
            </Link>
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {scrollPosition > 50 && (
          <motion.div
            key="header"
            className="fixed top-0 w-screen bg-white border-b-[1px] border-b-black/30 z-50 h-[80px] flex items-center justify-center px-8"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ y: -80 }}
          >
            <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
              <Link href="/">
                <Image
                  src={appConfig.logo.src}
                  alt={appConfig.logo.alt}
                  width={50}
                  height={50}
                />
              </Link>
              {/* <div className="flex items-center justify-center space-x-4">
                <Link
                  className="text-sm font-light text-black/80 hover:text-black/30 transition-all ease-linear duration-150"
                  href="#"
                >
                  About Us
                </Link>
                <Link
                  className="text-sm font-light text-black/80 hover:text-black/30 transition-all ease-linear duration-150"
                  href="#"
                >
                  Our Team
                </Link>
                <Link
                  className="text-sm font-light text-black/80 hover:text-black/30 transition-all ease-linear duration-150"
                  href="#"
                >
                  Services
                </Link>
              </div> */}
              <Button
                variant="outline"
                className="text-sm font-light text-black/"
                asChild
              >
                <Link
                  className="flex items-center justify-center space-x-2"
                  href="/#contact-us"
                >
                  Contact Us{" "}
                  <ArrowRightIcon className="w-5 h-5" strokeWidth={1} />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </>
    );
  }
};
export default Header;
