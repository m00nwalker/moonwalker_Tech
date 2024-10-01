import { BlogCard } from "./blogCard";
import { AppDevCard } from "./appDevCard";
import { WebsiteCard } from "./websiteCard";

export function Services() {
    return (
        <div className="py-16 px-6 md:px-12 lg:px-20" id="services">
            <h2 className="text-4xl font-bold text-center mb-12 text-electricBlue">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <WebsiteCard />
                <BlogCard />
                <AppDevCard />
            </div>
        </div>
    );
}