import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {ArrowRightIcon, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your free Schedulrr account" },
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];

export default function Home() {
  return (
    <main className="w-screenflex flex-col items-center justify-center container px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
          <div className="lg:w-1/2 pl-20">
            <h1 className="text-7xl font-black pb-6 gradient-title">Simplify your scheduling</h1>
            <p className="text-xl text-gray-600 mb-10 lg:w-8/12">
              Say goodbye to phone calls and email chains. Set your availability and share your link.
            </p>
            <Link href={"/dashboard"} className="group">
              <Button size={"lg"} className="text-lg">
                Get started <ArrowRightIcon className="group-hover:scale-105 group-hover:-rotate-45 transition-all duration-200 ease-in"/> 
              </Button>
            </Link>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
            <Image src={"/illustration.png"} alt="Illustration pic" layout="fill" objectFit="contain"></Image>
            </div>
          </div>
        </div>
        {/* How it works */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image src={"/works.svg"} alt="Illustration pic" layout="fill" objectFit="contain"></Image>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black pb-6">How it works</h2>
            <p className="text-xl text-gray-600 mb-10 lg:w-8/12">
              Set your availability, share your link, and let your clients book appointments with you.
            </p>
            <Link href={"/dashboard"} className="group">
              <Button size={"lg"} className="text-lg">
                Learn more <ArrowRightIcon className="group-hover:scale-105 group-hover:-rotate-45 transition-all duration-200 ease-in"/> 
              </Button>
            </Link>
          </div>
        </div>

        {/* Key Features Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                <CardTitle className="text-center text-blue-600">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          What Our Users Say
        </h2>
        <Testimonials />
      </div>

      {/* How It Works Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Simplify Your Scheduling?
        </h2>
        <p className="text-xl mb-6">
          Join thousands of professionals who trust Schedulrr for efficient time
          management.
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Start For Free <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
