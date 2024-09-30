
export function Hero() {
    return (
        <div className="flex flex-col items-center justify-center space-y-8 h-64">
            <h1 className="text-6xl font-orbitron font-bold text-electricBlue">Future-Proof Websites</h1>
            <p className="text-2xl font-robotMono">Innovative Solutions for Modern Businesses</p>
            <button className="bg-electricBlue text-black px-6 py-3 rounded-full hover:bg-neonGreen hover:text-black transition duration-300">
                Request a Quote Today!
            </button>
        </div>
    )
}