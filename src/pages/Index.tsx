import {
  Linkedin,
  Globe,
  Mail,
  Package,
  Users,
  Activity,
  Smartphone,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const links = [
    {
      title: "LinkedIn",
      description: "Connect with us professionally",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/afyaailab/",
      color: "hover:border-primary",
    },
    {
      title:
        "Our Product : Breathwise Diagnostic Tool (Chronic Obstructive Pulmonary Disease Detector)",
      description: "Explore our AI-powered solutions",
      icon: Package,
      url: "https://youtu.be/zMEDt7AZ418?si=lQNGBI2H1_SS-E1-",
      color: "hover:border-secondary",
    },
    {
      title: "Main Website",
      description: "Learn more about our services",
      icon: Globe,
      url: "https://www.afyaaitechnologies.com/",
      color: "hover:border-accent",
    },
    {
      title: "Download our Mobile App",
      description: "Get the Afya-ai Technologies App",
      icon: Smartphone,
      url: "https://drive.google.com/file/d/1QHfb5cRmNdC_w4I_3LWKgW6CqMepdCm1/view?usp=sharing",
      color: "hover:border-accent",
    },
    {
      title: "Doctor's Platform",
      description: "Access our platform for healthcare professionals",
      icon: Activity,
      url: "https://doctorspage.vercel.app/",
      color: "hover:border-accent",
    },
    {
      title: "Meet the Team",
      description: "Get to know the people behind Afya-ai Technologies",
      icon: Boxes,
      url: "https://drive.google.com/file/d/170J-1XpTYnbkElBbhetOT9DR-5bJGDiS/view?usp=sharing",
      color: "hover:border-accent",
    },
    {
      title: "Join our Waiting list",
      description: "Be part of our community",
      icon: Users,
      url: "https://chat.whatsapp.com/HTlUPORbxngGkmSgRW224b",
      color: "hover:border-primary",
    },
  ];

  const contactInfo = {
    email: "info@afyaaitechnologies.com",
    phone: "+233(0) 540 722 819",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-2xl">
        {/* Header Section */}
        <div className="mb-8 text-center animate-fade-in">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="rounded-full bg-card p-3 shadow-[var(--shadow-card)] hover-scale">
              <img
                src="./Logo.png"
                alt="Afya-ai Technologies Logo"
                className="w-[200px] h-[80px] object-contain"
              />
            </div>
          </div>

          {/* About Us Section */}
          <Card className="mb-8 bg-card/95 backdrop-blur-sm border-border/50 p-6 shadow-[var(--shadow-card)] animate-scale-in hover-scale">
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              About Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              AfyaAILab is pioneering the future of healthcare through
              artificial intelligence. We develop innovative AI-powered
              solutions that transform how healthcare providers deliver care and
              improve patient outcomes.
            </p>
          </Card>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                className={`
                group relative overflow-hidden 
                bg-card/95 backdrop-blur-sm border-2 border-border/50 
                transition-all duration-300 ease-out
                hover:shadow-[var(--shadow-hover)] hover:scale-[1.02]
                ${link.color}
              `}
              >
                <div className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Card>
            </a>
          ))}

          {/* Contact Us Section */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: `${links.length * 0.1}s` }}
          >
            <Card className="bg-card/95 backdrop-blur-sm border-2 border-border/50 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-foreground mb-2">
                    Contact Us
                  </h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Email:</span>{" "}
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary hover:underline transition-all hover-scale inline-block"
                      >
                        {contactInfo.email}
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Phone:</span>{" "}
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-primary hover:underline transition-all hover-scale inline-block"
                      >
                        {contactInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-12 text-center animate-fade-in"
          style={{ animationDelay: `${(links.length + 1) * 0.1}s` }}
        >
          <p className="text-sm text-card/80">
            © 2025 Afya-ai Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
