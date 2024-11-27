"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ExternalLink, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import Navbar from "./ui/navbar";
import { useState } from "react";
import Footer from "./ui/footer";
import { useRouter } from "next/navigation";
import { useWallet } from "@jup-ag/wallet-adapter";
import { useEnergyProgram } from "./energy/energy-data-access";
import { PublicKey } from "@solana/web3.js";

export function TradingPage() {
  const { connected } = useWallet();
  const [buy, setBuy] = useState(true);
  const route = useRouter();
  const { trades, createEnergyTrade } = useEnergyProgram();

  console.log(trades);

  return (
    <div className="min-h-screen bg-[#fdf8f4]">
      {/* Header */}
      <Navbar>
        <></>
      </Navbar>

      {/* Hero Section */}
      <section className="px-6 py-8 md:px-10 md:py-12 flex ">
        {connected && (
          <Card className="p-4 bg-transparent max-w-fit mx-16 rounded-lg">
            <div className="flex items-center gap-2 mb-4 flex-col">
              <h1 className="font-bold text-2xl font-atkinson">GVTBalance</h1>
              <span className="text-2xl font-atkinson">
                $ <span className="font-bold">1743</span>
              </span>
            </div>
            <div className="flex items-center gap-4 flex-wrap max-w-60">
              {/* Input with dropdown */}
              <div className="flex items-center border border-gray-300 rounded-md px-2">
                <input
                  type="number"
                  className="w-16 p-2 outline-none bg-transparent"
                  defaultValue="1"
                />
                <select className="text-gray-500 text-sm p-2 bg-transparent outline-none">
                  <option value="GVT">GVT</option>
                </select>
              </div>

              {/* Approximate value with dropdown */}
              <div className="flex items-center border border-gray-300 rounded-md px-2">
                <span className="px-2 text-gray-500">≈</span>
                <input
                  type="text"
                  className="w-24 p-2 outline-none"
                  defaultValue="196.8"
                  disabled
                />
                <select className="text-gray-500 text-sm p-2 bg-transparent outline-none">
                  <option value="USD">USD</option>
                </select>
              </div>

              {/* Buttons */}
              <div>
                <button className="bg-[#0B6B41] text-white px-4 py-2 rounded-full hover:bg-green-700">
                  Buy
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-500 hover:bg-gray-200">
                  Sell
                </button>
              </div>
            </div>
          </Card>
        )}

        <div className="flex">
          <div className="rounded-lg bg-green-800 p-6 overflow-hidden flex flex-col max-w-60 relative">
            <div>
              <h1 className="text-2xl font-bold text-white z-10 mb-4">
                UNLOCK
                <br />
                EV CHARGING
                <br />
                POWER!
              </h1>
            </div>
            <div className="relative">
              {/* Set a fixed height for the image container */}
              <div className="absolute inset-0">
                <Image
                  src="/static/ev-car-banner.png"
                  alt="ev"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-30"
                />
              </div>
              <Button
                onClick={() => route.push("/trade/station")}
                className="relative bg-transparent w-48 text-white my-12 border-2 border-white rounded-full z-20 hover:bg-white hover:text-black"
              >
                Find Stations Nearby
              </Button>
            </div>
          </div>
          {!connected && (
            <div className="m-10">
              <p className="text-4xl">
                Welcome to GreenVolt Energy
                <br /> Trading....
              </p>
              <h2 className="text-4xl font-bold my-3">
                Connect your wallet to
                <br /> continue
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Trading Cards Grid */}
      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="bg-[#C5CECA] w-48 text-black my-12 border-2 border-black rounded-lg z-100 cursor-pointer flex p-2 justify-evenly">
          <Button
            onClick={() => setBuy(true)}
            className={`${
              buy ? "bg-[#0B6B41]" : "bg-transparent"
            } hover:bg-white hover:text-black`}
          >
            Buy
          </Button>
          <Button
            onClick={() => setBuy(false)}
            className={`border-white  ${
              !buy ? "bg-[#0B6B41]" : "bg-transparent"
            } hover:bg-white hover:text-black`}
          >
            Sell
          </Button>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {buy &&
              Array.from({ length: 6 }).map((_, i) => (
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
                      <span className="text-sm text-gray-500">Total Sold</span>
                      <span className="text-sm">560/1000</span>
                    </div>
                    <div className="h-2 rounded bg-gray-200">
                      <div className="h-full w-1/2 rounded bg-green-800" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">
                        Total buy per user
                      </span>
                      <span className="text-sm">2500 KWh</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-red-500">
                      ProofsNFT 15 days
                    </span>
                    <Button variant="link" size="sm" className="text-green-800">
                      View contract <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  <Button
                    onClick={() => {
                      console.log("Jo");
                      createEnergyTrade.mutateAsync({
                        tradeId: "1",
                        description: "description",
                        paymentAmount: 200,
                        energyAmount: 200,
                        seller: PublicKey.default,
                      });
                    }}
                    className="w-full bg-green-800 text-white hover:bg-green-700"
                  >
                    Approve Buy
                  </Button>
                  <p className="mt-2 text-xs text-center text-gray-500">
                    30% unlocking fee if withdrawn within 30d
                  </p>
                </Card>
              ))}
            {!buy &&
              Array.from({ length: 6 }).map((_, i) => (
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
                      <span className="text-sm text-gray-500">Total Buy</span>
                      <span className="text-sm">560/1000</span>
                    </div>
                    <div className="h-2 rounded bg-gray-200">
                      <div className="h-full w-1/2 rounded bg-[#EB5757]" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">
                        Total sell per user
                      </span>
                      <span className="text-sm">2500 KWh</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-red-500">
                      ProofsNFT 15 days
                    </span>
                    <Button variant="link" size="sm" className="text-green-800">
                      View contract <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  <Button className="w-full bg-[#EB5757] text-white hover:bg-[#e46363]">
                    Approve Sell
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo voluptates rerum ea amet totam nulla.
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
              Please read the terms carefully as they govern your use of
              GreenVolt &quot;Energy Trading&quot; services.
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-sm text-gray-600">
                By approving any of the contracts on this page, you agree that
                you have read, understood and accepted all the terms and
                conditions contained in these Terms (as hereinafter referred to
                as &quot;these Terms&quot;).
              </li>
              {/* Add more terms as needed */}
            </ol>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
