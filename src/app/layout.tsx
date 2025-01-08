import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autosmith: Bringing the garage to you",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <header className="w-full flex items-center px-8 h-20 justify-between">
          <img
            src="/logo.svg"
            className="w-1/12 self-center place-self-center"
            alt=""
          />
          {/* <div className="flex gap-2 items-start justify-center">
            <img className="w-2/5" src="/icons/location.svg" alt="" />
            <p className="text-secondary text-xl font-[900]">Visakhapatnam</p>
          </div> */}
          <a href="/login" className="text-lg text-secondary">
            <img src="/icons/user.svg" alt="" />
          </a>
        </header>
        {children}
        <footer className="bg-secondary px-8 py-2 gap-12 flex flex-col w-full justify-between items-center relative">
          <div className="absolute left-0 bottom-full">
            <div className="relative">
              <img src="/footer-rectangle.svg" alt="" />
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                <img src="/autosmith-white.svg" alt="" />
                <h3>we bring the garage to you</h3>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between py-14">
            <div className="w-full flex flex-col gap-2">
              <h5 className="text-2xl font-[600]">Useful Links</h5>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/complaint">Raise a Complaint</a>
                </li>
                <li>
                  <a href="/helpdesk">Helpdesk</a>
                </li>
                <li>
                  <a href="/partner">Contact</a>
                </li>
                <li>
                  <a href="/sitemap.xml">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h5 className="text-2xl font-[600]">Legal</h5>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/terms">Terms of Service</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/refunds">Refunds Policy</a>
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h5 className="text-2xl font-[600]">Find us</h5>
              <ul className="flex flex-col gap-4">
                <li>
                  Venture Development Centre,
                  <br />
                  GITAM University, Rushikonda,
                  <br />
                  Visakhapatnam, Andhra Pradesh,
                  <br />
                  India - 530045
                </li>
                <li>+91 12345 67890</li>
                <li>team@autosmith.co.in</li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h5 className="text-2xl font-[600]">Social</h5>
              <ul className="flex w-fit gap-8 justify-between">
                <li>
                  <a href="#">
                    <img src="/icons/facebook.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/icons/x.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/icons/instagram.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/icons/linkedin.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/icons/whatsapp.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-white">
              © Autosmith 2025. Autosmith™ is a registered trademark of
              Autosmith Garages, LLC.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
