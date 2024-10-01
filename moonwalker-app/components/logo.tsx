import Image from "next/image";
import logo from "../app/assets/Moonwalker-Tech_transparent-.png";

export default function Logo() {
    return (
        <div className="w-64 h-auto">
            <Image src={logo} alt="MoonwalkerTech logo" layout="responsive" />
        </div>
    )
}