import { Divider } from "@/components/divider";
import Header from "@/components/Heading";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
    <Header />
    <Hero />
    <Divider />
    <Services />
    </div>
  )
}
