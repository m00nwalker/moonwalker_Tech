import { Card } from "./cards";

export function Services() {
    return (
        <div className="py-16 px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-electricBlue">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}