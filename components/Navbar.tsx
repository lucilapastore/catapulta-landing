import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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

function CTA() {
  return <Button>Dashboard</Button>;
}

function NavigationItems() {
  const items = [
    { name: "Documentation", href: "#documentation" },
    { name: "Integrations", href: "#integrations" },
    { name: "Blog", href: "#blog" },
    // { name: "Pricing", href: "/" },
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

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm w-full border-b border-primary max-w-[1140px] py-4 px-4 md:px-16 mx-auto rounded-lg md:mt-8">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <AppLogo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <NavigationItems />
        </div>

        <div className="hidden md:flex">
          <CTA />
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
              <CTA />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
