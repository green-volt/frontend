import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./input";
import { Button } from "./button";
import ConnectButton from "./connectButton";

const Navbar = ({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) => {
  return (
    <header
      className={`flex items-center justify-between p-4 md:px-10 md:py-6 `}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/static/logo.png"
          alt="GreenVolt Logo"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span className="text-lg font-semibold">GreenVolt</span>
      </Link>
      {children}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-atkinson">
            Home
          </Link>
          <Link href="/about" className="text-sm font-atkinson">
            About
          </Link>
          <Link href="/trade" className="text-sm font-atkinson">
            Trade
          </Link>
          <Link href="/contact" className="text-sm font-atkinson">
            Contact
          </Link>
          <Link href="/faq" className="text-sm font-atkinson">
            FAQ
          </Link>
          <ConnectButton />
        </div>

        {/* <Button>Connect to a wallet</Button> */}
      </div>
    </header>
  );
};

export default Navbar;
