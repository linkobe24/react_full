import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image
        src="/logo.png"
        height="60"
        width="60"
        alt="The Hotel Website App logo"
      /> */}
      <Image
        src={logo}
        alt="The Hotel Website App logo"
        height="60"
        width="60"
        quality={100}
      />
      <span className="text-xl font-semibold text-primary-100">
        The Hotel Website App
      </span>
    </Link>
  );
}

export default Logo;
