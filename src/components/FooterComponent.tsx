"use client";
import { Footer, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";

const customTheme: CustomFlowbiteTheme["footer"] = {
  root: {
    base: "w-full shadow bg-gray-900 md:flex md:items-center md:justify-between",
  },
};

export default function FooterComponent() {
  return (
    <Footer container theme={customTheme}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/ieee_logo_icon_no_text169993.png"
              alt="IEEE Logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm text-white md:text-lg lg:text-2xl">
                IEEE PES Club
              </p>
              <p className="text-xs text-white md:text-md lg:text-xl">
                California State University, Sacramento
              </p>
              <Footer.Copyright
                by="IEEE at Sacramento State"
                year={2024}
                className="text-xs md:text-md lg:text-xl text-gray-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-6 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {/* <div>
              <Footer.Title
                title="Links"
                className="text-sm md:text-md lg:text-lg text-white"
              />
              <Footer.LinkGroup
                col
                className="text-xs md:text-sm lg:text-lg text-white"
              >
                <Footer.Link href="#">Example</Footer.Link>
                <Footer.Link href="#">Example</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            <div>
              <Footer.Title
                title="follow us"
                className="text-sm md:text-md lg:text-lg text-white"
              />
              <Footer.LinkGroup
                col
                className="text-xs md:text-sm lg:text-lg text-white"
              >
                <Footer.Link
                  href="https://discord.gg/mJs6e6KFTa"
                  target="_blank"
                >
                  Discord
                </Footer.Link>
                <Footer.Link href="/contact">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
