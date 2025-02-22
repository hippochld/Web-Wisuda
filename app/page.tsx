import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
const instrument_serif = Instrument_Serif({
  weight: "400",
  style: 'normal',
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});
export default function Home() {
  return (
    <div className = "h-screen flex flex-col justify-center w-full items-center bg-gradient-to-b from-orange-600 to-green-400">
      <div className="flex items-center">
        <Image
          src="/images/Logo.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
        <p className= {`font-bold text-4xl text-black ${instrument_serif.className}`} >Parade Wisuda April ITB 2025</p>
      </div>
      <div className = {`grid place-items-center my-5 bg-gradient-to-tr from-white to-orange-600 h-20 w-[90vw] rounded-lg text-black font-bold text-3xl text-center ${instrument_serif.className}`}>
      <a href="https://wisudaitb.id" target="_blank" rel="noopener noreferrer"className="w-full h-full flex items-center justify-center">Parade Wisuda April 2025
      </a>
      </div>
      <div className = {`grid place-items-center my-5 bg-gradient-to-tr from-white to-orange-600 h-20 w-[90vw] rounded-lg text-black font-bold text-3xl text-center ${instrument_serif.className}`}>
      <a href="https://wisudaitb.id" target="_blank" rel="noopener noreferrer"className="w-full h-full flex items-center justify-center">Parade Wisuda Oktober 2024
      </a>
      </div>
      <div className = {`grid place-items-center my-5 bg-gradient-to-tr from-white to-orange-600 h-20 w-[90vw] rounded-lg text-black font-bold text-3xl text-center ${instrument_serif.className}`}>
      <a href="https://wisudaitb.id" target="_blank" rel="noopener noreferrer"className="w-full h-full flex items-center justify-center">Parade Wisuda April 2024
      </a>
      </div>
      <div className = {`grid place-items-center my-5 bg-gradient-to-tr from-white to-orange-600 h-20 w-[90vw] rounded-lg text-black font-bold text-3xl text-center ${instrument_serif.className}`}>
      <a href="https://wisudaitb.id" target="_blank" rel="noopener noreferrer"className="w-full h-full flex items-center justify-center">Parade Wisuda Oktober 2023
      </a>
      </div>
    </div>
  );
}
