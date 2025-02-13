import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import type React from "react"; // Added import for React
import { AppLogo } from "./AppLogo";

interface FooterLink {
  label: string;
  href: string;
  newTab?: boolean;
}

interface SocialLink extends FooterLink {
  icon: React.ComponentType<{ className?: string }>;
}

const navigationLinks: FooterLink[] = [
  { label: "Hiring - Job board", href: "/hiring" },
  { label: "Bootcamp Free", href: "/bootcamp" },
  { label: "Documentation", href: "/docs" },
  { label: "Integrations", href: "/integrations" },
];

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    newTab: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    newTab: true,
  },
  {
    label: "Twitter",
    href: "https://x.com/catapulta_sh",
    icon: Twitter,
    newTab: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/catapulta-sh/",
    icon: Linkedin,
    newTab: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@catapulta_sh",
    icon: Youtube,
    newTab: true,
  },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="w-full py-8 text-sm">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <AppLogo />

          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                className="hover:text-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 items-center">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.newTab ? "_blank" : undefined}
                rel={social.newTab ? "noopener noreferrer" : undefined}
                aria-label={social.label}
              >
                <social.icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <p>© {new Date().getFullYear()} Catapulta. All rights reserved.</p>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.newTab ? "_blank" : undefined}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                  className="underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
