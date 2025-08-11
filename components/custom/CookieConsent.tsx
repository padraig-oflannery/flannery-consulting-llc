"use client";

import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Cookie } from "lucide-react";
import { deleteAllCookies, setCookieTrue } from "./CookieConsent.actions";

interface CookieConsentProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string;
  learnMoreHref?: string;
  cookieValue?: string | undefined;
}

const CookieConsent = ({
  description,
  learnMoreHref,
  cookieValue,
}: CookieConsentProps) => {
  const [show, setShow] = React.useState(false);
  const [variant, setVariant] = React.useState<"default" | "manage">("default");

  const handleShow = () => {
    setVariant("default");
  };
  const handleClose = () => {
    setVariant("manage");
  };

  useEffect(() => {
    if (cookieValue) {
      setVariant("manage");
    } else {
      setVariant("default");
    }
    setShow(true);
  }, [cookieValue]);

  if (variant === "default") {
    return (
      <>
        {show && (
          <div className="fixed bottom-2 z-50 w-full sm:w-[400px]">
            <Card className="mx-3 p-0 py-3 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 py-2 pb-2 px-4">
                <CardTitle className="text-base font-bold">
                  We use Cookies
                </CardTitle>
                <Cookie className="w-5 h-5" />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardDescription className="text-xs">
                  {description}
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  We use cookies to ensure you get the best experience on our
                  website. For more information on how we use cookies, please
                  see our cookie policy.
                </p>
                <p className="text-xs text-muted-foreground">
                  By clicking <span className="font-medium">"Accept"</span>, you
                  agree to our use of cookies.
                </p>
                <a
                  href={learnMoreHref}
                  className="text-xs text-primary underline uynderline-offset-4 hover:no-underline"
                >
                  {" "}
                  Learn More{" "}
                </a>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <form className="w-full flex space-x-2">
                  <Button
                    disabled={cookieValue === "false"}
                    formAction={deleteAllCookies}
                    className="flex-1"
                    variant={cookieValue === "true" ? "default" : "secondary"}
                  >
                    {cookieValue && cookieValue === "false"
                      ? "Currently Declined"
                      : "Decline"}
                  </Button>
                  <Button
                    formAction={setCookieTrue}
                    className="flex-1"
                    disabled={cookieValue === "true"}
                  >
                    {cookieValue && cookieValue === "true"
                      ? "Currently Accepted"
                      : "Accept"}
                  </Button>
                </form>
                {cookieValue && (
                  <Button
                    onClick={handleClose}
                    variant="ghost"
                    className="flex-1 w-full"
                  >
                    Close
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        )}
      </>
    );
  }
  if (variant === "manage") {
    return (
      <>
        {show && (
          <Card
            onClick={handleShow}
            className="text-xs cursor-pointer flex items-center justify-center px-4 py-2 rounded-b-none rounded-top-sm fixed left-2 bottom-0"
          >
            Manage Cookies
          </Card>
        )}
      </>
    );
  }
};

export default CookieConsent;
