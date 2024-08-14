/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/vzGEqIGR9Tk
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rubik } from 'next/font/google'
import { Poppins } from 'next/font/google'

rubik({
  subsets: ['latin'],
  display: 'swap',
})

poppins({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import s from './portfolio.module.css'
import { useState } from "react"
export const Portfolio: React.FC = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="flex flex-col min-h-dvh">
      <header>
        <nav className="bg-[#fef6e3] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 transition-all transition-transform duration-1000 ${s['nav-bar']} m-4 md:mx-auto`}>
        <Link
          href=""
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/Logo.png"
            className="h-8"
            alt="Logo"
          />
          
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={()=>setIsShow(!isShow)}
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
        </div>
        <div
          className={`items-center justify-between ${s['nav-sticky']} md:max-h-full ${!isShow?'':s['active']} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border transition-opacity	duration-1000	 ${!isShow?'opacity-0	md:opacity-100':'opacity-100'} border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            <li>
              <a
                onClick={()=>setIsShow(false)}
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={()=>setIsShow(false)}
                href="#invitation"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Invitation
              </a>
            </li>
            <li>
              <a
                onClick={()=>setIsShow(false)}
                href="#qr"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                QR Code
              </a>
            </li>
            <li>
              <a
                href="#map"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Map
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </header>
      <main className="flex-1">
        <section className={`w-full}`}>
          <img className={s['banner-primary']}src="/banner.jpg" />
        </section>
        <section id="invitation" className="w-full md:w-auto md:max-h-screen py-12 md:py-14 px-4">
        <div className="relative w-full h-0	 pt-[140%] md:pt-[50%] shadow-md mt-6 mb-4 overflow-hidden rounded-lg">
      <iframe
        loading="lazy"
        className="absolute w-full h-full top-0 left-0 border-none md:max-h-screen"
        src="https://www.canva.com/design/DAGN2ZEnwFQ/myRFMR3no0-sf7R5ORWPJQ/view?embed"
        allowFullScreen
      ></iframe>
    </div>
        </section>
      <div className="md:flex">
      <section id="qr" className="w-full py-12 md:py-24 lg:py-32">
          <div>
            
            <div>
              <h2 className={`text-7xl text-center tracking-tighter sm:text-4xl md:text-8xl mb-4 ${s['scan-title']}`}>Location</h2>
              <div className="flex justify-center">
              `<img
                src="/QRScan.png"
                width={300}
                height={300}
                alt="Profile Photo"
                className="aspect-square overflow-hidden rounded-md object-cover"
              />
            </div>
            </div>
          </div>
        </section>
        <section id="map" className={`w-full py-12 md:py-24 lg:py-32 bg-muted`}>
          <div className="container grid max-w-5xl items-center gap-6 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className={`text-7xl tracking-tighter sm:text-4xl md:mb-4 md:text-8xl ${s['scan-title']}`}>Map</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d326.44015389268344!2d76.66605084980033!3d12.343190395421699!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDIwJzM1LjIiTiA3NsKwMzknNTcuNiJF!5e0!3m2!1sen!2sin!4v1723667173716!5m2!1sen!2sin" width="600" height="450" className="border-0 w-full flex" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </div>
        <section id="end" className="w-full py-12 md:py-24 lg:py-32 flex justify-center m-auto">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
            <img className="col-start-2 h-auto rounded-lg shadow-xl dark:shadow-gray-800" src="/ganesha.jpg"/>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Ankith G. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
export default Portfolio;