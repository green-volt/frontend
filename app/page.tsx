"use client";
import { Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Navigation */}
      <Navbar>
        <></>
      </Navbar>

      {/* Hero Section */}
      <section className="px-16 pt-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                DISCOVER THE FUTURE OF RENEWABLE ENERGY
              </h1>
              <p className="text-gray-600">
                Buy and sell energy through a peer-to-peer network
              </p>
              <Button
                onClick={() => route.push("/trade")}
                className="bg-[#0B6E4F] hover:bg-[#0B6E4F]/90 text-white px-8"
              >
                Trade
              </Button>
            </div>

            <div className="flex-1 relative">
              <div className="relative rounded-[2rem] overflow-hidden">
                <img src="/static/hero.png" className="w-full" />
                <Button
                  variant="outline"
                  className="absolute bottom-4 right-4 bg-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            HOW TO GET STARTED
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                description:
                  "Connect wallet and deposit $500+ into your wallet in any crypto and convert it to energy.",
              },
              {
                step: "2",
                description:
                  "Sell your energy to available buyers to generate income over time.",
              },
              {
                step: "3",
                description:
                  "See real time update on energy trading and profit generated.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-gray-100/50 rounded-3xl p-8"
              >
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
      <section className="px-16 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="  p-12 flex items-center gap-8">
            {/* Image on the left */}
            <div className="relative w-1/2 h-full">
              <Image
                src="/static/grid.png"
                alt="Electric Car Charging"
                width={500} // Set an appropriate width
                height={500} // Set an appropriate height
                className="object-contain"
              />
            </div>

            {/* Text on the right */}
            <div className="max-w-2xl w-1/2">
              <h2 className="text-3xl font-bold text-black mb-4">
                POWERING A SUSTAINABLE TOMORROW
              </h2>
              <p className="text-black/90 mb-8">
                Imagine a world where energy is produced and distributed
                locally, reducing reliance on centralized grids and empowering
                communities to take control of their energy future
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#0B6E4F] hover:bg-[#0B6E4F]/90 text-white">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="text-black border-white hover:bg-white/10"
                >
                  Support Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connecting Energy */}
      <section className="px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">
                CONNECTING ENERGY PRODUCERS AND CONSUMERS IN A DECENTRALIZED
                NETWORK
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
                <Image
                  src="/static/turbine.png"
                  alt="Electric Car Charging"
                  width={500} // Set an appropriate width
                  height={500} // Set an appropriate height
                  className="object-contain"
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
      <section className="px-16 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <Image
              src="/static/security.png"
              alt="Electric Car Charging"
              width={500} // Set an appropriate width
              height={500} // Set an appropriate height
              className="object-contain"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">THE ULTIMATE SECURITY</h2>
              <p className="text-gray-600">
                The GreenVolt marketplace is developed with a breakthrough
                security blockchain infrastructure designed to guarantee maximum
                protection of assets and transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Solutions */}
      <section className="px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <Image
              src="/static/plant.png"
              alt="Electric Car Charging"
              width={400} // Set an appropriate width
              height={400} // Set an appropriate height
              className="object-contain"
            />
            <div>
              <div className=" flex flex-row ">
                <Image
                  src="/static/plant.png"
                  alt="Electric Car Charging"
                  width={200} // Set an appropriate width
                  height={200} // Set an appropriate height
                  className="object-contain"
                />
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    SUSTAINABLE ENERGY SOLUTIO...
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Explore our platform and discover how you can participate in
                    the energy revolution, whether you're a producer, consumer,
                    or investor, and contribute to a more sustainable future
                  </p>
                  <Button variant="outline" className="rounded-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
