"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {


  return (
    <footer className="mt-16 bg-[#181C22] px-[1.5625em] md:px-[3.5em] py-[2.5em] md:py-[3.75em]">

      <div className="flex flex-col gap-8 md:gap-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 md:pr-[6.25em] md:pb-[6.25em]">
          {/* Logo and Tagline */}
          <div className="flex flex-row flex-wrap items-start gap-[5.1875em]">
            <a
              href="/"
              aria-current="page"
              className="inline-flex items-center flex-shrink-0"
            >

              <img
                src="/images/LOGO_MAIN.png"
                loading="lazy"
                alt="Trackstack"
                className="md:h-[7.75em] h-[6.25em] w-auto"
                width={140}
                height={124}
              />
            </a>
            <div className="body-copy text-white max-w-[19.6875em] md:pt-8 pt-6">
              Supercharge your workflow and unleash your sound to all.
            </div>
          </div>


          <div className="flex flex-row md:flex-row gap-[7.5em] md:gap-[9.375em] md:pt-8 pt-6">
            <div className="flex flex-col gap-4 hidden md:flex">
              <div className="md:body-copy-emphasis body-copy text-white pb-[1.875em]">Products</div>
              <div className="md:body-copy-emphasis body-copy text-white/60">
                <nav className="list-none flex flex-col gap-2">
                  <Link href="/products/inbox" className="text-[#86888B] hover:text-white">Inbox</Link>
                  <Link href="/products/studio" className="text-[#86888B] hover:text-white">Studio</Link>
                  <Link href="/products/elevate" className="text-[#86888B] hover:text-white">Elevate</Link>
                  <Link href="/products/store" className="text-[#86888B] hover:text-white">Store</Link>
                  {/* <Link href="/mobile-app" className="text-[#86888B] hover:text-white">Mobile</Link> */}
                </nav>
              </div>
            </div>
            <div className="flex flex-col gap-4 hidden md:flex">
              <div className="md:body-copy-emphasis body-copy text-white pb-[1.875em]">Company</div>
              <div className="md:body-copy-emphasis body-copy text-[#86888B]">
                <nav className="list-none flex flex-col gap-2">
                  <Link href="/about" className="text-white/60 hover:text-white">About</Link>
                  {/* <Link href="/newsroom" className="text-[#86888B] hover:text-white">Newsroom</Link> */}
                  {/* <Link href="/podcast" className="text-[#86888B] hover:text-white">Podcast</Link> */}
                  <Link href="/contact" className="text-[#86888B] hover:text-white">Contact</Link>
                  {/* <Link href="/media-kit" className="text-[#86888B] hover:text-white">Media Kit</Link> */}
                </nav>
              </div>
            </div>
            <div className="flex flex-col gap-4 flex md:hidden">
              <div>
                <div className="md:body-copy-emphasis body-copy text-white pb-[1.875em]">Products</div>
                <div className="md:body-copy-emphasis body-copy text-white/60">
                  <nav className="list-none flex flex-col gap-2">
                    <Link href="/products/inbox" className="text-[#86888B] hover:text-white">Inbox</Link>
                    <Link href="/products/studio" className="text-[#86888B] hover:text-white">Studio</Link>
                    <Link href="/products/elevate" className="text-[#86888B] hover:text-white">Elevate</Link>
                    <Link href="/products/store" className="text-[#86888B] hover:text-white">Store</Link>
                    <Link href="/mobile-app" className="text-[#86888B] hover:text-white">Mobile</Link>
                  </nav>
                </div>
              </div>
              <div>
                <div className="md:body-copy-emphasis body-copy text-white pb-[1.875em]">Company</div>
                <div className="md:body-copy-emphasis body-copy text-[#86888B]">
                  <nav className="list-none flex flex-col gap-2">
                    <Link href="/about" className="text-[#86888B] hover:text-white">About</Link>
                    <Link href="/newsroom" className="text-[#86888B] hover:text-white">Newsroom</Link>
                    <Link href="/podcast" className="text-[#86888B] hover:text-white">Podcast</Link>
                    <Link href="/contact" className="text-[#86888B] hover:text-white">Contact</Link>
                    <Link href="/media-kit" className="text-[#86888B] hover:text-white">Media Kit</Link>
                  </nav>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[1.875em]">
              {/*
              <div className="flex flex-col gap-4">
                <div className="body-copy md:body-copy-emphasis text-white pb-[1.875em]">Resources</div>
                <div className="body-copy md:body-copy-emphasis text-[#86888B]">
                  <nav className="list-none flex flex-col gap-2">
                    <Link href="/blog" className="text-[#86888B] hover:text-white">Blog</Link>
                    <Link href="/faqs" className="text-[#86888B] hover:text-white">FAQ's</Link>
                  </nav>
                </div>
              </div>
              */}
              <div className="flex flex-col gap-4">
                <div className="body-copy md:body-copy-emphasis text-white pb-[1.875em]">Follow</div>
                <div className="body-copy md:body-copy-emphasis text-[#86888B]">
                  <nav className="list-none flex flex-col gap-2">
                    <Link href="https://www.instagram.com/trackstack.app/" target="_blank" className="text-white/60 hover:text-white">Instagram</Link>
                    <Link href="https://open.spotify.com/show/2EcaUDvBICd1BG2ukaJV7j?si=CO4k_LcGRimYb_Xtwxd6AQ&nd=1" target="_blank" className="text-white/60 hover:text-white">Spotify</Link>
                    <Link href="https://www.threads.net/@trackstack.app" target="_blank" className="text-white/60 hover:text-white">Threads</Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <a href="/">
            <div className="headline-05 text-white">Trackstack<span className="text-white text-[0.375em]">&reg;</span></div>
          </a>
          <div className="flex flex-row md:gap-[9.25em] gap-[3.75em]">
            <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 caption text-[#86888B]">
              {/* <Link href="/policy-center" className="text-[#86888B] hover:text-white">Policy center</Link> */}
              <Link href="/privacy" className="text-[#86888B] hover:text-white">Privacy policy</Link>
              <Link href="/terms" className="text-[#86888B] hover:text-white">Terms of Service</Link>
            </nav>
            <div className="caption text-[#86888B] pr-[2.5em]">
              &reg; 2025 Trackstack Music Ltd
            </div>
          </div>
        </div>
      </div>

    </footer >
  );
}
