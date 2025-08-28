import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#" },
      { name: "eCommerce Platforms", href: "#" },
      { name: "WordPress Customization", href: "#" },
      { name: "Graphic Design", href: "#" },
    ],
  },
  {
    title: "Technologies",
    links: [
      { name: "React & JavaScript", href: "#" },
      { name: "PHP & CodeIgniter", href: "#" },
      { name: "Firebase & MySQL", href: "#" },
      { name: "Bootstrap & CSS", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Email", href: "mailto:maramawitdereje93@gmail.com" },
      { name: "Website", href: "https://maramawit.netlify.app" },
      { name: "Phone", href: "tel:+251939186449" },
      { name: "Location", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaTelegram className="size-5" />, href: "https://t.me/Maridebahiru", label: "Telegram" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/in/maramawit-dereje-b1a00b244", label: "LinkedIn" },
  { icon: <FaFacebook className="size-5" />, href: "https://web.facebook.com/marmawit.dereje", label: "Facebook" },
  { icon: <FaGithub className="size-5" />, href: "https://github.com/maramawitdereje", label: "GitHub" },
  { icon: <FaEnvelope className="size-5" />, href: "mailto:maramawitdereje93@gmail.com", label: "Email" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "#",
    src: "/lovable-uploads/3d7e116a-10a7-4e11-a4b0-503fe26cbaf4.png",
    alt: "Maramawit Dereje",
    title: "Maramawit Dereje",
  },
  sections = defaultSections,
  description = "Digital services specialist with expertise in web development, IT infrastructure, and graphic design. Creating user-centered, high-performing solutions that help organizations grow and thrive.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Maramawit Dereje. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8 w-8 rounded-full object-cover"
                />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};