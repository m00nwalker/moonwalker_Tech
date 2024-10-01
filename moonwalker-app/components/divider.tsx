export function Divider() {
    return (
        <div>
            <svg className="absolute left-0 w-full h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="20" cy="50" r="4" fill="#00D1FF" className="pulse" />
            <circle cx="40" cy="50" r="6" fill="#39FF14" className="pulse" />
            <circle cx="60" cy="50" r="8" fill="#00D1FF" className="pulse" />
            <circle cx="80" cy="50" r="6" fill="#39FF14" className="pulse" />

            {/* Footprint */}
            <circle cx="20" cy="50" r="6" fill="rgba(128, 0, 128, 0.5)" className="footprint" />
    <circle cx="40" cy="50" r="6" fill="rgba(128, 0, 128, 0.5)" className="footprint" />
    <circle cx="60" cy="50" r="6" fill="rgba(128, 0, 128, 0.5)" className="footprint" />
    <circle cx="80" cy="50" r="6" fill="rgba(128, 0, 128, 0.5)" className="footprint" />
        </svg>
        </div>
    );
}