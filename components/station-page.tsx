"use client";
import Image from "next/image";
import { ChevronRight, MoreVertical, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "./ui/input";
import Navbar from "./ui/navbar";

export function StationPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f4]">
      {/* Header */}
      <Navbar>
        <div className="relative md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Add for information..."
            className="pl-10 w-[200px] "
          />
        </div>
      </Navbar>

      {/* Hero Section */}
      <section className="px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-wider">
                THE FUTURE IS NOW
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Discover how we are{" "}
                <span className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                  changing <ChevronRight className="h-6 w-6 text-green-800" />
                </span>
                <br />
                the world of energy trading
              </h1>
              {/* <Button className="bg-green-800 text-white hover:bg-green-700">
                Learn More
              </Button> */}
              {/* <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-sm text-gray-600">
                  GreenVolt energy to begin roll at Austin facility in 2025,
                  confirmed by team.
                </p>
              </div> */}
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/static/station-bg.png"
                alt="Electric Car Charging"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-12">FEATURED PRODUCTS</h2>
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="relative h-32 w-32 mx-auto mb-4">
                <Image
                  src="/static/home-charging.png"
                  alt="Home Charging"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium">Home charging</p>
            </div>
            <div className="text-center">
              <div className="relative h-32 w-32 mx-auto mb-4 bg-green-800 rounded-full">
                <Image
                  src="/static/charging-station.png"
                  alt="Charging Station"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <p className="text-sm font-medium">Charging Station</p>
            </div>
            <div className="text-center">
              <div className="relative h-32 w-32 mx-auto mb-4">
                <Image
                  src="/static/mobile-charging.png"
                  alt="Mobile Charging"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium">Mobile charging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Cards */}
      <section className="px-4 py-12 md:px-6">
        <Button className="bg-green-800 w-48 text-white hover:bg-green-700 my-4">
          Find Stations Nearby
        </Button>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-500">⚡</span>
                      <span className="text-sm font-medium">V3 LEAD EV</span>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price</span>
                      <span className="font-medium">$5.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Plug Status</span>
                      <span className="font-medium">2 Used / 3 Total</span>
                    </div>
                    <div className="relative h-24">
                      <Image
                        src="/static/charger.png"
                        alt="Charging Station"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <Button className="w-full bg-green-800 text-white hover:bg-green-700">
                      Click To Start the Power
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 py-12 md:px-6 ">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-row flex-wrap">
            <h2 className="text-3xl font-bold mb-4 max-w-xl px-10">
              Want to put up your station here on Greenvolt. Fill the form and
              we will be in touch.
            </h2>
            <form className="space-y-4 bg-white p-4 rounded-3xl px-10 mx-10">
              <h1 className="font-bold">Submit Details</h1>
              <div className="flex flex-row flex-wrap space-x-2">
                <div className="space-y-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" />
                  <Input placeholder="Phone" />
                </div>
                <div className="space-y-4">
                  <Input placeholder="Last Name" />
                  <Input placeholder="Company" />
                  <Input placeholder="Address" />
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-green-800 text-white hover:bg-green-700">
                  Submit
                </Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </form>
          </div>
          {/* <div className="relative h-[400px] hidden md:block">
              <Image
                src="/placeholder.svg"
                alt="Contact Illustration"
                fill
                className="object-contain"
              />
            </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 md:px-6">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Terms of use</h2>
          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-4">
              Revised: December 8, 2023
            </p>
            <p className="mb-4">
              Please read the terms carefully as they govern your use of
              GreenVolt &quot;Energy Trading&quot; services.
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-sm text-gray-600">
                By approving any of the contracts on this page, you agree that
                you have read, understood and accepted all the terms and
                conditions contained in these Terms.
              </li>
              {/* Additional terms would go here */}
            </ol>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
