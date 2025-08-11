import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import appConfig from "@/app.config";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <img src={appConfig.logo.src} alt="logo" className="h-16" />
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl italic">
                Protect. Serve. Innovate.{" "}
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                We help organizations reduce risk, meet compliance, and
                strengthen security programs. From assessments and policies to
                vendor reviews and incident response, we deliver clear
                priorities your team can act on.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                asChild
                className="shadow-sm transition-shadow hover:shadow"
              >
                <Link href="/#contact-us">Get In Touch</Link>
              </Button>
              <Button variant="outline" className="group">
                <Link className="group flex items-center" href="/#about-us">
                  About Us{" "}
                  <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-5">
              <p className="font-medium text-muted-foreground lg:text-left">
                Where we help
              </p>
              <div className="flex flex-col flex-wrap items-center justify-center gap-4">
                <Button
                  className="group flex items-center justify-center p-2"
                  variant="outline"
                >
                  <span className="text-black/30 font-light text-sm group-hover:text-black">
                    Site Security Audits
                  </span>
                </Button>
                <Button
                  className="group flex items-center justify-center p-2"
                  variant="outline"
                >
                  <span className="text-black/30 font-light text-sm group-hover:text-black">
                    Incident Response
                  </span>
                </Button>
                <Button
                  className="group flex items-center justify-center p-2"
                  variant="outline"
                >
                  <span className="text-black/30 font-light text-sm group-hover:text-black">
                    Security Policy Development
                  </span>
                </Button>
                <Button
                  className="group flex items-center justify-center p-2"
                  variant="outline"
                >
                  <span className="text-black/30 font-light text-sm group-hover:text-black">
                    ... and SO much more!
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
