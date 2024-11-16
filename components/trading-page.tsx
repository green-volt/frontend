'use client'

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ExternalLink } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export function TradingPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f4]">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg"
            alt="GreenVolt Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-lg font-semibold">GreenVolt</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm">
            Home
          </Link>
          <Link href="/about" className="text-sm">
            About
          </Link>
          <Link href="/trade" className="text-sm">
            Trade
          </Link>
          <Link href="/contact" className="text-sm">
            Contact
          </Link>
          <Link href="/faq" className="text-sm">
            FAQ
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-800 p-6">
                <h1 className="text-2xl font-bold text-white">
                  UNLOCK
                  <br />
                  EV CHARGING
                  <br />
                  POWER!
                </h1>
              </div>
              <h2 className="text-2xl font-bold">Welcome to GreenVolt Energy Trading....</h2>
              <p className="text-xl">Connect your wallet to continue</p>
              <Button className="bg-green-800 text-white hover:bg-green-700">
                Connect Wallet
              </Button>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/placeholder.svg"
                alt="Electric Car Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trading Cards Grid */}
      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-medium">USERREgpT78</p>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500">Total Bid</span>
                      <div className="h-4 w-4 rounded-full bg-gray-200" />
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="rounded bg-gray-100 px-2 py-1 text-xs">
                      30 days
                    </span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">$478.88</span>
                    <span className="text-sm">/1000</span>
                  </div>
                  <div className="h-2 rounded bg-gray-200">
                    <div className="h-full w-1/2 rounded bg-green-800" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Total buy per user</span>
                    <span className="text-sm">2500 KWh</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-red-500">ProofsNFT 15 days</span>
                  <Button variant="link" size="sm" className="text-green-800">
                    View contract <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <Button className="w-full bg-green-800 text-white hover:bg-green-700">
                  Approve Buy
                </Button>
                <p className="mt-2 text-xs text-center text-gray-500">
                  30% unlocking fee if withdrawn within 30d
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-8 md:px-6 md:py-12 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              "Does the trade have period of 30,45, and 90 days period after each additional trade?",
              "Can I cancel the total or partial amount from the pool?",
              "How much time does it take to make harvest?",
              "When can I receive the profit?",
              "Do will pools continue to function after the 30/45/90 days of lock term?",
              "What is Energy Trading on GreenVolt?",
              "What Energy Trading pools are available on GreenVolt?",
              "Is there any requirement loss in GreenVolt?",
              "Is there any fee for early withdrawal from the Trade?",
              "When can I make harvest from the Trade?",
            ].map((question, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                  voluptates rerum ea amet totam nulla.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Terms of use</h2>
          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-4">
              Revised: December 8, 2023
            </p>
            <p className="mb-4">
              Please read the terms carefully as they govern
              your use of GreenVolt "Energy Trading" services.
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-sm text-gray-600">
                By approving any of the contracts on this page, you agree that you have read, understood
                and accepted all the terms and conditions contained in these Terms (as hereinafter
                referred to as "these Terms").
              </li>
              {/* Add more terms as needed */}
            </ol>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Image
                src="/placeholder.svg"
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
                <li><Link href="#" className="text-sm text-gray-500">Blog</Link></li>
                <li><Link href="#" className="text-sm text-gray-500">Career</Link></li>
                <li><Link href="#" className="text-sm text-gray-500">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500">About</Link></li>
                <li><Link href="#" className="text-sm text-gray-500">Team</Link></li>
                <li><Link href="#" className="text-sm text-gray-500">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500">Twitter</Link></li>
                <li><Link href="#" className="text-sm text-gray-500">Facebook</Link></li>
                <li><Link href="#" className="text-sm text-gray-500">LinkedIn</Link></li>
                <li><Link href="#" className="text-sm text-gray-500">Instagram</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}