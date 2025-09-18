import { Button } from './ui/button'
import { Input } from './ui/input'
import { Mail, Instagram, Facebook, Twitter, Github } from 'lucide-react'

export function Footer() {
  return (
    <div className="relative">
      {/* ก้อนดำ */}
      <div
        className="
          bg-black grid grid-cols-12 rounded-[15px] min-h-[200px] 
          text-white p-6 md:p-10 gap-6 w-[90%] max-w-[1200px] mx-auto
          lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-top-40 z-20
        "
      >
        {/* Left text */}
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start items-center text-center md:text-left text-xl md:text-4xl font-extrabold leading-snug">
          STAY UP TO DATE ABOUT <br className="hidden md:block" /> OUR
          <br className="md:hidden" /> LATEST OFFERS
        </div>

        {/* Right form */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center md:items-end gap-4 mt-6 md:mt-0">
          <div className="w-full max-w-[400px]">
            <div className="relative w-full">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Enter your email address"
                className="pl-10 rounded-[50px] w-full h-[40px] bg-white text-black"
              />
            </div>
          </div>
          <Button className="w-full max-w-[400px] rounded-[50px] bg-white h-[40px] text-black">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div
        className="
    grid grid-cols-12 bg-[#F0F0F0] px-4 pb-10 pt-12 relative z-0
    lg:pt-40
  "
      >
        <div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-6">
            {/* Logo + description */}
            <div className="flex flex-col">
              <div className="font-extrabold text-[32px] md:text-[40px]">
                LOGO
              </div>
              <div className="text-gray-700 text-sm md:text-base mt-2">
                We have clothes that suit your style and which you’re proud to
                wear. From women to men.
              </div>
              <div className="flex gap-4 mt-6">
                <div className="border rounded-full p-2 bg-white">
                  <Twitter size={18} />
                </div>
                <div className="border rounded-full p-2 bg-black">
                  <Facebook size={18} className="text-white" />
                </div>
                <div className="border rounded-full p-2 bg-white">
                  <Instagram size={18} />
                </div>
                <div className="border rounded-full p-2 bg-white">
                  <Github size={18} />
                </div>
              </div>
            </div>

            {/* Columns */}
            <div className="flex flex-col gap-2">
              <div className="text-[18px] font-semibold">Company</div>
              <div className="text-gray-600">About</div>
              <div className="text-gray-600">Features</div>
              <div className="text-gray-600">Works</div>
              <div className="text-gray-600">Career</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[18px] font-semibold">Help</div>
              <div className="text-gray-600">Customer Support</div>
              <div className="text-gray-600">Delivery Details</div>
              <div className="text-gray-600">Terms & Conditions</div>
              <div className="text-gray-600">Privacy Policy</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[18px] font-semibold">FAQ</div>
              <div className="text-gray-600">Account</div>
              <div className="text-gray-600">Manage Deliveries</div>
              <div className="text-gray-600">Orders</div>
              <div className="text-gray-600">Payments</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[18px] font-semibold">Resources</div>
              <div className="text-gray-600">Free eBooks</div>
              <div className="text-gray-600">Development Tutorial</div>
              <div className="text-gray-600">How to - Blog</div>
              <div className="text-gray-600">Youtube Playlist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
