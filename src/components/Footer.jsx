import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-24 px-4 bg-dark text-white mt-20 pt-10 lg:pt-16">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-12">
        <div className="space-y-4 lg:w-1/3">
          {/* <a href="" className="text-3xl font-bold text-white">
            <span className="text-orange">Bench</span>mark
          </a> */}
                <img src="/blogo.svg" 
          className="h-12 w-32 object-contain"
          alt="benchmark logo" />
          <p className=" text-gray-300">
            Welcome to arino sed ut perspiciae omunde omnis iste natus error
            sitort voluptatem accusantium.
          </p>
          <div className="flex gap-5 text-white">
            <a
              href="/"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="/"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="/"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href=""
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Services</h3>
          <div className="space-y-3 text-gray-300">
            <a href="/" className="block">
             Service 1
            </a>
            <a href="/" className="block">
              Service 2
            </a>
            <a href="/" className="block">
              Service 3
            </a>
            <a href="/" className="block">
              Service 3
            </a>
          </div>
        </div>

        {/* contact */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <div className="space-y-3 text-gray-300">
            <a href="/" className="block">
              +44 454 7800 112
            </a>
            <a href="/" className="block">
              asm@asm.com
            </a>
            <a href="/" className="block">
              50 34 dddff asd, <br /> 44150 SFgfs, UK
            </a>
          </div>
        </div>

        {/* newsletter */}
        <div className="space-y-4 lg:w-96">
          <h3 className="text-2xl font-semibold">Subscribe to our news letter</h3>
          <div className="space-y-3 text-gray-300">
            <div className="relative w-full">
              <input
                className="newsletter_input"
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
              />
              <button className="newsletter_btn">
                <span>Send</span>
              </button>
            </div>
            <p>
              At vero eos et accusamus et iusto odio as part dignissimos ducimus
              qui blandit.
            </p>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
      <hr className="border-gray-300" />
      <div className="h-8"></div>

      {/* copyright text */}
      <div className="flex flex-col sm:flex-row justify-between pb-7">
        <p>Copyright © 2022 Asm Raihan.</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
