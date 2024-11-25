import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-8 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Image
              src="/static/logo.png"
              alt="GreenVolt Logo"
              width={40}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-gray-500">
              © 2023 GreenVolt, Inc.
              <br />
              All rights reserved
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
