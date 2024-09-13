/** @format */

import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const footerSections = [
  {
    title: "Healthymart",
    links: ["About Us", "Gift Cards", "Blog", "Suppliers", "Food Safety"],
  },
  {
    title: "Need Help",
    links: ["Contact Us", "Delivery Information", "Accessibility", "FAQ"],
  },
  {
    title: "Press Inquiries",
    content: ["press@healthymart.com", "New & Media"],
  },
  {
    title: "Follow Us",
    socialLinks: [
      { name: "Instagram", icon: FaInstagram },
      { name: "Facebook", icon: FaFacebookF },
      { name: "Twitter", icon: FaTwitter },
      { name: "Youtube", icon: FaYoutube },
    ],
  },
];

const appDownloads = [
  { store: "Google Play", icon: FaGooglePlay },
  { store: "App Store", icon: FaApple },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-10 w-screen mt-20 overflow-hidden">
      <div className="w-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-1 font-mona-sans">
                {section.title}
              </h3>
              {section.links && (
                <ul className="space-y-1">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white font-dm-sans"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {section.content && (
                <div className="space-y-1">
                  {section.content.map((item, contentIndex) => (
                    <p key={contentIndex} className="text-gray-400">
                      {item}
                    </p>
                  ))}
                </div>
              )}
              {section.socialLinks && (
                <ul className="space-y-1">
                  {section.socialLinks.map((social, socialIndex) => (
                    <li key={socialIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white flex items-center"
                      >
                        <social.icon className="mr-2 text-green-400" />{" "}
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mona-sans">
              Get the Apps
            </h3>
            {appDownloads.map((app, index) => (
              <a className="bg-green-a text-sm font-semibold text-black px-4 py-2 w-48 rounded-xl flex items-center justify-start mb-3 font-dm-sans">
                <app.icon className="mr-2 size-6" />
                <a key={index} href="#">
                  <p className="font-dm-sans text-[10px]">
                    Download The App from
                  </p>
                  <span className="font-bold font-mona-sans">{app.store}</span>
                </a>
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2022 Healthymart. All rights reserved
          </p>
          <div className="flex space-x-4">
            {[
              "Privacy Policy",
              "Customer Agreement",
              "Terms of Use",
              "Security",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
