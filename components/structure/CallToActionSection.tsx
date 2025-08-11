import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface CallToActionSectionProps {
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonHref?: string;
}
const CallToActionSection = ({
  heading,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
}: CallToActionSectionProps) => {
  return (
    <section className="w-screen py-32">
      <div className="max-w-7xl w-full mx-auto">
        <div className="bg-accent flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h3>
            <p className="text-muted-foreground max-w-xl lg:text-lg">
              {description}
            </p>
            <Button asChild className="mt-6">
              <Link href={buttonHref ?? "/#contact-us"}>{buttonText}</Link>
            </Button>
          </div>
          <div className="shrink-0">
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-lg sm:h-40 sm:w-40">
                <img src={imageSrc} alt={imageAlt} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
