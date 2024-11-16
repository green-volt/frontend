"use client"

import Link from "next/link"
import { Menu, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Navigation */}
      <nav className="p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <WindmillIcon className="w-6 h-6" />
            <span className="font-semibold">GreenVolt</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="#" className="text-gray-600">Home</Link>
            <Link href="#" className="text-gray-600">Trade</Link>
            <Link href="#" className="text-gray-600">Contact</Link>
            <Link href="#" className="text-gray-600">FAQ</Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-6">
                <Link href="#" className="text-lg">Home</Link>
                <Link href="/trade" className="text-lg">Trade</Link>
                <Link href="#" className="text-lg">Contact</Link>
                <Link href="#" className="text-lg">FAQ</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 pt-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                DISCOVER THE FUTURE OF RENEWABLE ENERGY
              </h1>
              <p className="text-gray-600">
                Buy and sell energy through a peer-to-peer network
              </p>
              <Button className="bg-[#0B6E4F] hover:bg-[#0B6E4F]/90 text-white px-8">
                Trade
              </Button>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative rounded-[2rem] overflow-hidden">
                <img src="/static/hero.png" className="w-full" />
                <Button variant="outline" className="absolute bottom-4 right-4 bg-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            HOW TO GET STARTED
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                description: "Connect wallet and deposit $500+ into your wallet in any crypto and convert it to energy."
              },
              {
                step: "2",
                description: "Sell your energy to available buyers to generate income over time."
              },
              {
                step: "3",
                description: "See real time update on energy trading and profit generated."
              }
            ].map((item) => (
              <div key={item.step} className="relative bg-gray-100/50 rounded-3xl p-8">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#0B6E4F] text-white rounded-full flex items-center justify-center text-xl">
                  {item.step}
                </div>
                <p className="text-gray-600 mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Tomorrow */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#8B9D77] rounded-3xl p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                POWERING A SUSTAINABLE TOMORROW
              </h2>
              <p className="text-white/90 mb-8">
                Bringing a world where energy is produced and distributed locally, reducing reliance on centralized grids and empowering communities to take control of their energy future
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#0B6E4F] hover:bg-[#0B6E4F]/90 text-white">
                  Get Started
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Support Us
                </Button>
              </div>
            </div>
            <GridIllustration className="mt-8" />
          </div>
        </div>
      </section>

      {/* Connecting Energy */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">
                CONNECTING ENERGY PRODUCERS AND CONSUMERS IN A DECENTRALIZED NETWORK
              </h2>
              <p className="text-gray-600 mb-6">
                Are you are consumer or would you like to buy energy
              </p>
              <Button variant="outline" className="rounded-full">
                Join The Movement
              </Button>
            </div>
            <div className="flex-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Wind turbines on a sunny day"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4">
                  <Anchor className="w-8 h-8 text-[#FFA07A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="px-4 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <SecurityIllustration className="flex-1" />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                THE ULTIMATE SECURITY
              </h2>
              <p className="text-gray-600">
                The GreenVolt marketplace is developed with a breakthrough security blockchain infrastructure designed to guarantee maximum protection of assets and transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Solutions */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                SUSTAINABLE ENERGY SOLUTIO...
              </h2>
              <p className="text-gray-600 mb-6">
                Explore our platform and discover how you can participate in the energy revolution...
              </p>
              <Button variant="outline" className="rounded-full">
                Learn More
              </Button>
            </div>
            <PlantsIllustration className="flex-1" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="#" className="flex items-center space-x-2 mb-4">
              <WindmillIcon className="w-6 h-6" />
              <span className="font-semibold">GreenVolt</span>
            </Link>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600">Blog</Link></li>
              <li><Link href="#" className="text-gray-600">FAQ</Link></li>
              <li><Link href="#" className="text-gray-600">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600">About</Link></li>
              <li><Link href="#" className="text-gray-600">Team</Link></li>
              <li><Link href="#" className="text-gray-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600">Twitter</Link></li>
              <li><Link href="#" className="text-gray-600">LinkedIn</Link></li>
              <li><Link href="#" className="text-gray-600">Discord</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

function WindmillIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v18M9 6l6 6M15 6L9 12M6 9h12M9 18l6-6M15 18l-6-6" />
    </svg>
  )
}

function HeroIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 400 300" fill="none">
      <path
        d="M0 0h400v300H0z"
        fill="#E8F3E8"
      />
      <circle cx="300" cy="100" r="60" fill="#FFA07A" fillOpacity="0.5" />
      <path
        d="M50 250c100-80 200-80 300 0"
        fill="#0B6E4F"
      />
      <path
        d="M150 150l40-60 40 60h-80z"
        fill="#0B6E4F"
      />
      <path
        d="M250 180l30-45 30 45h-60z"
        fill="#0B6E4F"
      />
      <path
        d="M350 160l20-30 20 30h-40z"
        fill="#0B6E4F"
      />
    </svg>
  )
}

function GridIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 400 200" fill="none">
      <path
        d="M50 100h300M200 50v100"
        stroke="#0B6E4F"
        strokeWidth="2"
      />
      <circle cx="200" cy="100" r="20" fill="#0B6E4F" />
      <circle cx="100" cy="100" r="20" fill="#0B6E4F" />
      <circle cx="300" cy="100" r="20" fill="#0B6E4F" />
      <rect x="180" y="80" width="40" height="40" rx="4" fill="#0B6E4F" />
    </svg>
  )
}

function SecurityIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 400 200" fill="none">
      <rect x="100" y="50" width="200" height="100" rx="8" fill="#E8F3E8" />
      <circle cx="200" cy="100" r="30" fill="#0B6E4F" />
      <path
        d="M185 100a15 15 0 0130 0"
        stroke="white"
        strokeWidth="2"
      />
      <circle cx="200" cy="85" r="5" fill="white" />
    </svg>
  )
}

function PlantsIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 400 200" fill="none">
      <path
        d="M150 180c0-40 30-70 70-70s70 30 70 70"
        fill="#E8F3E8"
      />
      <path
        d="M180 120s-20-40 0-80 40-40 40 0-20 80-40 80z"
        fill="#0B6E4F"
      />
      <path
        d="M220 140s-15-30 0-60 30-30 30 0-15 60-30 60z"
        fill="#0B6E4F"
      />
    </svg>
  )
}