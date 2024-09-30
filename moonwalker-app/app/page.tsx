import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
    <p>This is my Landing Page</p>
    <Hero />
    <Services />
    </div>
  )
}
