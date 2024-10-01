import Link from "next/link";

export function WebsiteCard() {
    return (
        <div className="p-6 bg-gray-800 rounded-lg hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-electricBlue mb-4">Website Development
            </h3>
                <p className="pb-6">We build responsive and engaging websites to elevate your business.</p>
                <Link href="/websites">
                <button className="bg-electricBlue text-black px-4 py-2 rounded-full hover:bg-neonGreen hover:text-black transition duration-300">
                Learn More
                </button>
                </Link>
        </div>
    );
}