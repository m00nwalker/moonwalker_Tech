import { QuoteButton } from "./quotebutton";


export function Quote() {
    return (
        <><div className="pt-16 px-6 md:px-12 lg:px-20" id="quote">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-electricBlue">Quote</h2>
        <p className="text-center md:text-lg lg:text-xl mb-4">
          We’re a team of passionate developers dedicated to creating innovative solutions for small businesses.
     
          With years of experience, we pride ourselves on delivering customized, cutting-edge websites and applications.
        </p>
      </div><div>
          <QuoteButton />
        </div></>
    )
}