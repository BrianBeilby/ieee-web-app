import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Spotlight } from "@/components/Spotlight";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export default function Home() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="bg-center bg-no-repeat bg-transparent bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-20">
          <Spotlight
            className="-top-40 left-10 md:left-60 md:-top-1/4"
            fill="white"
          />
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Sacramento State IEEE
          </h1>
          <TextGenerateEffect className="mb-4" words={"Advancing Technology For Humanity"} />
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/about"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <div className="w-1/2 mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false} indicators={false}>
          <Image
            width={50}
            height={50}
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <Image
            width={1920}
            height={1080}
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <Image
            width={1920}
            height={1080}
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <Image
            width={1920}
            height={1080}
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <Image
            width={1920}
            height={1080}
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
