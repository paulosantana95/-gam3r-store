import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.png" width={60} height={60} alt="Logo" />
      <Image src="/logo-text.png" width={230} height={0} alt="Logo" />
    </Link>
  )
}
