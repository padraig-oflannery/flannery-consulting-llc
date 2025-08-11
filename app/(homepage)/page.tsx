import Banner from "@/components/structure/Banner";
import CallToActionSection from "@/components/structure/CallToActionSection";
import ContactUsSection from "@/components/structure/ContactUsSection";
import Hero from "@/components/structure/Hero";
import ServicesList from "@/components/structure/ServicesList";
import ValuesAndPrincipals from "@/components/structure/ValuesAndPrincipals";
import { Separator } from "@/components/ui/separator";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Banner
        title="Our Full Site Launches Soon!"
        description="We are glad to have you here. Explore our landing page while we prepare our full site for launch date."
        linkText="Contact Us"
        linkUrl="/#contact-us"
      />
      <Hero />
      <CallToActionSection
        heading="Ready to Get Started?"
        description="Our firm is currently accepting new client inquiries. Whether you need a consultation, project assistance, or have questions about our services, we are here to help."
        imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
        imageAlt="Placeholder Image"
        buttonText="Contact Us Today"
        buttonHref="/#contact-us"
      />
      <ServicesList />
      <ValuesAndPrincipals />
      <Separator />
      <ContactUsSection
        title="Contact Us"
        description="We would love to hear from you! Reach out to us via phone, email, or through our website."
        email="flanneryconsulting@outlook.com"
      />
    </div>
  );
};

export default Homepage;
