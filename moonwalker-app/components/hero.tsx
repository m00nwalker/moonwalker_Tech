import Link from "next/link"

export function Hero() {
    return (
        <div className="flex flex-col items-center justify-center py-6 space-y-8 h-auto md:h-64 lg:h-80">
            <h1 className="text-6xl font-orbitron font-bold text-electricBlue text-center">Future-Proof Websites</h1>
            <p className="text-2xl font-robotMono text-center">Innovative Solutions for Modern Businesses</p>
            <Link href="/quote">
            <button className="bg-electricBlue text-black px-6 py-3 rounded-full hover:bg-neonGreen hover:text-black transition duration-300 text-center">
                Request a Quote Today!
            </button>
            </Link>
        </div>
    )
}