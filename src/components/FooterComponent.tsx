"use client";
import { Footer, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const customTheme: CustomFlowbiteTheme["footer"] = {
  root: {
    base: "w-full rounded-lg bg-white shadow dark:bg-gray-900 md:flex md:items-center md:justify-between",
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
            />
            <div className="flex flex-col items-start">
              <p className="mt-2 text-white text-2xl">IEEE PES Club</p>
              <p className="mt-2 text-white text-lg">
                California State University, Sacramento
              </p>
              <Footer.Copyright by="Sacramento State IEEE" year={2024} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Example</Footer.Link>
                <Footer.Link href="#">Example</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="follow us" />
              <Footer.LinkGroup col>
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
