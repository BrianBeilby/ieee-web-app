import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Spotlight } from "@/components/Spotlight";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export default function Home() {
  return (
    <div className="container my-12 mx-auto px-4 sm:px-6 lg:px-8">
      <section className="bg-center bg-no-repeat bg-transparent bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-10 lg:py-20">
          <Spotlight
            className="-top-16 left-10 md:left-20 md:-top-36 lg:left-60 lg:-top-40 xl:left-96 xl:-top-48"
            fill="white"
          />
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
            Sacramento State IEEE
          </h1>
          <TextGenerateEffect
            className="mb-4 text-lg sm:text-xl md:text-2xl"
            words={"Advancing Technology For Humanity"}
          />
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/about"
              className="inline-flex items-center justify-center py-2 px-4 text-sm sm:text-base md:text-lg font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 hover:text-gray-900"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-md h-56 sm:h-64 lg:h-80 xl:h-80 2xl:h-96 relative">
        <Carousel slide={false} indicators={true}>
          <div className="relative w-full h-full">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
