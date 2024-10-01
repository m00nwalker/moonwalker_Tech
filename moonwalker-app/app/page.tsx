import { About } from "@/components/about";
import { Divider } from "@/components/divider";
import Header from "@/components/Heading";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quotes";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-4 md:py-6 lg:py-8">
    <Header />
    <Hero />
    <Divider />
    <About />
    <Divider />
    <Services />
    <Divider />
    <Quote />
    </div>
  )
}
