import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function AppLogo() {
  return (
    <Link href="/">
      <Image
        priority
        src="/logo/catapulta_logo.svg"
        alt="Company Logo"
        width={163}
        height={36}
      />
    </Link>
  );
}

function NavigationItems() {
  const items = [
    { name: "Hiring - Job board", href: "" },
    { name: "Bootcamp Free", href: "" },
    { name: "Documentation", href: "" },
    { name: "Integrations", href: "" },
  ];

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-muted hover:text-primary/90"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}

function SocialMedia() {
  const items = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com" },
  ];

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-muted hover:text-primary/90"
        >
          {item.icon}
        </Link>
      ))}
    </>
  );
}

export default function Footer() {
  return (
    <>
      <footer className=" top-0 z-50 w-full max-w-[1140px] py-4 px-4 md:px-16 mx-auto md:mt-8 bg-red-400">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <AppLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <NavigationItems />
          </div>
          <div className="hidden md:flex">
            <SocialMedia />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>
                Access navigation links and dashboard
              </SheetDescription>
            </SheetHeader>

            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-4">
                <NavigationItems />
                <SocialMedia />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Catapulta. All rights reserved.
        </p>
      </footer>
    </>
  );
}
