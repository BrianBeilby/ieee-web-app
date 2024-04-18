"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, Variants } from "framer-motion";


export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const bounceVariants: Variants = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop", // Ensure this is a specific string literal, not just 'string'
      },
    },
  } as const;

  return (
    <nav className="fixed top-0 w-full z-50 border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/images/ieee_logo_icon_no_text169993.png"
            height={50}
            alt="IEEE Logo"
            width={60}
          />
        </a>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-900 border-gray-700">
            <li>
              <a
                href="/about"
                className={`block py-2 px-3 rounded md:p-0 ${pathname === '/about' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-500' : 'md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent'}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/events"
                className={`block relative py-2 px-3 rounded md:p-0 ${pathname === '/events' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-500' : 'md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Events
                <motion.div variants={bounceVariants} animate="animate" style={{ cursor: "pointer" }}>
                  <span className="absolute -top-5 transform -translate-y-1/2 -right-3 h-2 w-2 bg-blue-500 rounded-full"></span>
                </motion.div>
              </a>
            </li>
            <li>
              <a
                href="/committees"
                className={`block py-2 px-3 rounded md:p-0 ${pathname === '/committees' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500' : 'md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Committees
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block py-2 px-3 rounded md:p-0 ${pathname === '/contact' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500' : 'md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
