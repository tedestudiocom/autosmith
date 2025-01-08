export default function Footer(){
    return (
        <footer className="bg-secondary px-8 py-2 gap-12 flex flex-col w-full justify-between items-center relative text-white">
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
    );
}