"use client";

import Link from "next/link";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import {
  Bell,
  ExternalLink,
  Info,
  MoreVertical,
  RefreshCcw,
  Wallet,
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function Dashboard() {
  // Chart data for Supply and Demand
  const supplyDemandData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        fill: true,
        label: "Supply",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgb(53, 162, 135)",
        backgroundColor: "rgba(53, 162, 135, 0.5)",
      },
      {
        fill: true,
        label: "Demand",
        data: [28, 48, 40, 19, 86, 27],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // Chart data for Daily Sales
  const dailySalesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(53, 162, 135, 0.5)",
        borderColor: "rgb(53, 162, 135)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fdf8f4]">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 bg-white">
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
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Wallet className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="p-4 md:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* GVT Balance Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">GVT Balance</CardTitle>
              <RefreshCcw className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$ 1,754.76</div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-green-500">+ $18.90</span>
                  <span className="text-gray-500">2h ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-red-500">- $7.24</span>
                  <span className="text-gray-500">5h ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Unlock EV Power Card */}
          <Card className="bg-green-800 text-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                UNLOCK
                <br />
                EV CHARGING
                <br />
                POWER!
              </h2>
              <Image
                src="/placeholder.svg"
                alt="Electric Car"
                width={200}
                height={100}
                className="mt-4"
              />
            </CardContent>
          </Card>

          {/* Operations Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Operations</CardTitle>
              <Info className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span>0.004 BTC</span>
                  <span className="text-gray-500">≈ $247 USDT</span>
                </div>
                <Badge>BTC</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span>250 USDT</span>
                  <span className="text-gray-500">≈ $0.99 USD</span>
                </div>
                <Badge>USDT</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Charts Section */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Supply and Demand</CardTitle>
            </CardHeader>
            <CardContent>
              <Line data={supplyDemandData} />
            </CardContent>
          </Card>

          {/* Daily Sales Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Daily Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <Line data={dailySalesData} />
            </CardContent>
          </Card>
        </div>

        {/* Active Trades Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Active Trades</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                    <div>
                      <p className="text-sm font-medium">
                        {i % 2 === 0 ? "USERREgpT78" : "feedui"}
                      </p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-500">Total Bid</span>
                        <div className="h-4 w-4 rounded-full bg-gray-200" />
                      </div>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      30 days
                    </Badge>
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
                      <span className="text-sm text-gray-500">
                        Total per user
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
                  <Button className="w-full bg-red-500 text-white hover:bg-red-600">
                    {i % 2 === 0 ? "Approve Buy" : "Harvest"}
                  </Button>
                  <p className="mt-2 text-xs text-center text-gray-500">
                    30% unlocking fee if withdrawn within 30d
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              "Does the trade have period of 30,45, and 90 days period after each additional trade?",
              "Can I cancel the total or partial amount from the pool?",
              "How much time does it take to make harvest?",
              "When can I receive the profit?",
              "Do will pools continue to function after the 30/45/90 days of lock term?",
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
        </section>

        {/* Terms of Use */}
        <section className="mt-12">
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
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white px-4 py-8 md:px-6">
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
    </div>
  );
}
