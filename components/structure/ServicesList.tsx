import { CogIcon } from "lucide-react";
import React from "react";

interface IServicesList {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

const ServicesList = () => {
  const services: IServicesList[] = [
    {
      icon: <CogIcon className="h-6 w-6" />,
      title: "Security Audits",
      description:
        "Comprehensive assessments to identify vulnerabilities and ensure compliance.",
      items: [
        "Vulnerability Scanning",
        "Penetration Testing",
        "Compliance Checks",
      ],
    },
    {
      icon: <CogIcon className="h-6 w-6" />,
      title: "Incident Response",
      description:
        "Rapid response and recovery services to mitigate the impact of security incidents.",
      items: [
        "Breach Investigation",
        "Forensic Analysis",
        "Remediation Planning",
      ],
    },
    {
      icon: <CogIcon className="h-6 w-6" />,
      title: "Policy Development",
      description:
        "Creation of security policies and procedures tailored to your organization's needs.",
      items: [
        "Security Policy Creation",
        "Risk Management Frameworks",
        "Compliance Documentation",
      ],
    },
    {
      icon: <CogIcon className="h-6 w-6" />,
      title: "Vendor Reviews",
      description:
        "Evaluation of third-party vendors to ensure they meet security standards.",
      items: [
        "Vendor Risk Assessments",
        "Contractual Security Requirements",
        "Ongoing Vendor Monitoring",
      ],
    },
  ];

  return (
    <section className="py-32 px-2">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services Preview
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              Check out a few of our initial offerings. We are constantly
              expanding our service list to meet the evolving needs of our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
