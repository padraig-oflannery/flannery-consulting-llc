import appConfig from "@/app.config";
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-accent py-10 border-t-[1px] border-t-black/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-2 px-2 md:px-8">
        <div className="flex items-start justify-center sm:justify-start">
          <div className="flex flex-col sm:flex-row items-center justify-start gap-1 sm:gap-4">
            <Image
              src={appConfig.logo.src}
              alt={appConfig.logo.alt}
              width={50}
              height={50}
            />
            <span className="hidden sm:flex text-black/30 font-extralight text-2xl">
              |
            </span>
            <span className="text-black italic font-base text-xl">
              Protect. Serve. Innovate.
            </span>
          </div>
        </div>
        <div className="flex items-end justify-center space-x-10 space-y-6">
          <ul className="w-full space-y-2 text-center sm:text-right">
            <li className="text-black font-base text-lg">Company</li>
            <li>
              <Link
                href="/#contact-us"
                className="text-black/50 hover:text-black/80 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 flex items-center justify-center flex-col py-10 sm:mb-10">
          <span className="text-[50px] sm:text-[110px] lg:text-[190px] tracking-tight leading-none font-semibold text-black/5">
            FLANNERY
          </span>
          <span className="text-[30px] sm:text-[60px] lg:text-[90px] tracking-tight leading-[.5] font-semibold text-black/5">
            CONSULTING LLC
          </span>
        </div>
        <span className="text-black/50 font-base text-lg text-center sm:text-left">
          © 2025. All rights reserved.
        </span>
        <div className="flex items-center justify-center sm:justify-end flex-row gap-4">
          <Link href={appConfig.links.linkedin} target="_blank">
            <LinkedinIcon className="w-6 h-6 text-black/50 cursor-pointer hover:text-black transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
