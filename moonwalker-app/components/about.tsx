import { Button } from "./button";


export function About() {
    return (
        <><div className="pt-16 px-6 md:px-12 lg:px-20" id="about">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-electricBlue">About Us</h2>
        <p className="text-center md:text-lg lg:text-xl mb-4">
          We’re a team of passionate developers dedicated to creating innovative solutions for small businesses.
        </p>
        <p className="text-center md:text-lg lg:text-xl">
          With years of experience, we pride ourselves on delivering customized, cutting-edge websites and applications.
        </p>
      </div><div>
          <Button />
        </div></>
    )
}