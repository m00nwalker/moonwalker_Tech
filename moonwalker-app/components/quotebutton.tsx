import Link from "next/link";

export function QuoteButton() {
    return (
        <div className="flex justify-center pt-6">
            <Link href="/quote">
            <button className="bg-electricBlue text-black px-6 py-3 rounded-full hover:bg-neonGreen hover:text-black transition duration-300 text-center">
                Get Your Quote!
            </button>
            </Link>
        </div>
    )
}