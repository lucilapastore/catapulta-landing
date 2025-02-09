import Image from "next/image";

export function AppLogo() {
  return (
    <Image
      priority
      src="/logo/catapulta_logo.svg"
      alt="Company Logo"
      width={163}
      height={36}
    />
  );
}
