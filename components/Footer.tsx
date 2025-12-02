"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 px-[1.5625em] md:px-[3.5em] py-[2.5em] md:py-[3.75em]" style={{ backgroundColor: '#181C22' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 md:pr-[6.25em] md:pb-[6.25em]">
            {/* Logo and Tagline */}
            <div className="flex flex-row flex-wrap items-start gap-[5.1875em]">
              <Link href="/" className="inline-flex items-center flex-shrink-0">
                <img
                  src="/images/LOGO_MAIN.png"
                  loading="lazy"
                  alt="Stafona"
                  className="md:h-[7.75em] h-[6.25em] w-auto"
                  width={140}
                  height={124}
                />
              </Link>
              <div className="text-white max-w-[19.6875em] md:pt-8 pt-6 text-base md:text-lg">
                Supercharge your workflow and unleash your potential with innovative tech solutions.
              </div>
            </div>

            <div className="flex flex-row md:flex-row gap-[7.5em] md:gap-[9.375em] md:pt-8 pt-6">
              <div className="flex flex-col gap-4 hidden md:flex">
                <div className="text-white font-semibold pb-[1.875em]">Company</div>
                <nav className="list-none flex flex-col gap-2">
                  <Link href="/" className="text-[#86888B] hover:text-white transition-colors">Home</Link>
                  <Link href="/about" className="text-[#86888B] hover:text-white transition-colors">About Us</Link>
                  <Link href="/team" className="text-[#86888B] hover:text-white transition-colors">Our Team</Link>
                  <Link href="/careers" className="text-[#86888B] hover:text-white transition-colors">Careers</Link>
                  <Link href="/contact" className="text-[#86888B] hover:text-white transition-colors">Contact</Link>
                  <Link href="/faq" className="text-[#86888B] hover:text-white transition-colors">FAQ</Link>
                </nav>
              </div>

              <div className="flex flex-col gap-4 hidden md:flex">
                <div className="text-white font-semibold pb-[1.875em]">Services</div>
                <nav className="list-none flex flex-col gap-2">
                  <Link href="/services" className="text-[#86888B] hover:text-white transition-colors">Our Services</Link>
                  <Link href="/services#web" className="text-[#86888B] hover:text-white transition-colors">Web Development</Link>
                  <Link href="/services#mobile" className="text-[#86888B] hover:text-white transition-colors">Mobile Apps</Link>
                  <Link href="/services#ai" className="text-[#86888B] hover:text-white transition-colors">AI Solutions</Link>
                  <Link href="/services#cloud" className="text-[#86888B] hover:text-white transition-colors">Cloud Services</Link>
                </nav>
              </div>

              <div className="flex flex-col gap-4 flex md:hidden">
                <div>
                  <div className="text-white font-semibold pb-[1.875em]">Company</div>
                  <nav className="list-none flex flex-col gap-2">
                    <Link href="/" className="text-[#86888B] hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="text-[#86888B] hover:text-white transition-colors">About Us</Link>
                    <Link href="/team" className="text-[#86888B] hover:text-white transition-colors">Our Team</Link>
                    <Link href="/careers" className="text-[#86888B] hover:text-white transition-colors">Careers</Link>
                    <Link href="/contact" className="text-[#86888B] hover:text-white transition-colors">Contact</Link>
                    <Link href="/faq" className="text-[#86888B] hover:text-white transition-colors">FAQ</Link>
                  </nav>
                </div>
                <div>
                  <div className="text-white font-semibold pb-[1.875em]">Services</div>
                  <nav className="list-none flex flex-col gap-2">
                    <Link href="/services" className="text-[#86888B] hover:text-white transition-colors">Our Services</Link>
                    <Link href="/services" className="text-[#86888B] hover:text-white transition-colors">Web Development</Link>
                    <Link href="/services" className="text-[#86888B] hover:text-white transition-colors">Mobile Apps</Link>
                    <Link href="/services" className="text-[#86888B] hover:text-white transition-colors">AI Solutions</Link>
                    <Link href="/services" className="text-[#86888B] hover:text-white transition-colors">Cloud Services</Link>
                  </nav>
                </div>
              </div>

              <div className="flex flex-col gap-[1.875em]">
                <div className="flex flex-col gap-4">
                  <div className="text-white font-semibold pb-[1.875em]">Follow Us</div>
                  <nav className="list-none flex flex-col gap-2">
                    <Link href="https://www.instagram.com/stafona/" target="_blank" className="text-[#86888B] hover:text-white transition-colors">
                      Instagram
                    </Link>
                    <Link href="https://twitter.com/stafona" target="_blank" className="text-[#86888B] hover:text-white transition-colors">
                      Twitter
                    </Link>
                    <Link href="https://www.linkedin.com/company/stafona" target="_blank" className="text-[#86888B] hover:text-white transition-colors">
                      LinkedIn
                    </Link>
                    <Link href="https://github.com/stafona" target="_blank" className="text-[#86888B] hover:text-white transition-colors">
                      GitHub
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-white/10"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Link href="/" className="text-3xl font-bold text-white">
              Stafona<span className="text-xs align-top">&reg;</span>
            </Link>
            <div className="flex flex-col md:flex-row gap-4 md:gap-[9.25em]">
              <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm text-[#86888B]">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              </nav>
              <div className="text-sm text-[#86888B] pr-0 md:pr-[2.5em]">
                &copy; {new Date().getFullYear()} Stafona Tech Ltd. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
