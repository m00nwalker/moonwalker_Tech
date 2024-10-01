import Link from "next/link";

export function Button() {
    return (
        <div className="flex justify-center pt-6">
            <Link href="/about">
            <button className="bg-electricBlue text-black px-6 py-3 rounded-full hover:bg-neonGreen hover:text-black transition duration-300 text-center">
                Learn More
            </button>
            </Link>
        </div>
    )
}