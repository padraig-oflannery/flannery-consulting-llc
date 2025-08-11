"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface Banner2Props {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  defaultVisible?: boolean;
}

const Banner = ({
  title,
  description,
  linkText,
  linkUrl,
  defaultVisible = true,
}: Banner2Props) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="bg-muted w-full px-4 py-3">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <span className="text-sm">
              <span className="font-medium">{title}</span>{" "}
              <span className="text-muted-foreground">
                {description}{" "}
                <a
                  href={linkUrl}
                  className="hover:text-foreground underline underline-offset-2"
                >
                  {linkText}
                </a>
                .
              </span>
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="-mr-2 h-8 w-8 flex-none"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
