"use client";

import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import {
  FOOTER_SECTIONS,
  CONTACT_INFO,
  SHIPPING_PARTNERS,
  PAYMENT_METHODS,
  SOCIAL_LINKS,
  BCT_LOGO,
} from "@/config/constants/footer.constants";

interface FooterSectionProps {
  title: string;
  links: Array<{ href: string; label: string }>;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:col-span-2">
      <div className="footer-col border-b lg:border-0 border-gray-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="footer-title w-full flex items-center justify-between py-3 lg:py-0 lg:mb-3 lg:cursor-default"
        >
          <h4 className="text-sm lg:text-base font-semibold">{title}</h4>
          <DownOutlined
            className={`max-lg:inline-block lg:!hidden text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`footer-content overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-3" : "max-h-0"} lg:max-h-none lg:pb-0`}
        >
          <ul className="space-y-1.5">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-xs lg:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:col-span-3">
      <div className="footer-col border-b lg:border-0 border-gray-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="footer-title w-full flex items-center justify-between py-3 lg:py-0 lg:mb-3 lg:cursor-default"
        >
          <h4 className="text-sm lg:text-base font-semibold">
            {CONTACT_INFO.title}{" "}
            <span className="text-xs font-normal">{CONTACT_INFO.subtitle}</span>
          </h4>
          <DownOutlined
            className={`max-lg:inline-block lg:!hidden text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`footer-content overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-3" : "max-h-0"} lg:max-h-none lg:pb-0`}
        >
          <div className="space-y-1.5">
            {CONTACT_INFO.contacts.map((contact, index) => (
              <p key={index} className="text-xs lg:text-sm text-gray-600">
                <span className="font-medium">{contact.label}:</span>{" "}
                <a
                  href={contact.href}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {contact.value}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageList: React.FC<{ images: Array<{ src: string; alt: string }> }> = ({
  images,
}) => (
  <ul className="flex flex-wrap gap-2">
    {images.map((image, index) => (
      <li
        key={index}
        className="w-16 h-8 bg-white rounded flex items-center justify-center p-1"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-full object-contain"
        />
      </li>
    ))}
  </ul>
);

const ShippingPaymentSection: React.FC = () => {
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="lg:col-span-3">
      <div className="footer-col border-b lg:border-0 border-gray-300 mb-4 lg:mb-6">
        <button
          onClick={() => setIsShippingOpen(!isShippingOpen)}
          className="footer-title w-full flex items-center justify-between py-3 lg:py-0 lg:mb-3 lg:cursor-default"
        >
          <h4 className="text-sm lg:text-base font-semibold">
            Đơn vị vận chuyển
          </h4>
          <DownOutlined
            className={`max-lg:inline-block lg:!hidden text-xs transition-transform ${isShippingOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`footer-content overflow-hidden transition-all duration-300 ${isShippingOpen ? "max-h-96 pb-3" : "max-h-0"} lg:max-h-none lg:pb-0`}
        >
          <ImageList images={SHIPPING_PARTNERS} />
        </div>
      </div>

      <div className="footer-col border-b lg:border-0 border-gray-300">
        <button
          onClick={() => setIsPaymentOpen(!isPaymentOpen)}
          className="footer-title w-full flex items-center justify-between py-3 lg:py-0 lg:mb-3 lg:cursor-default"
        >
          <h4 className="text-sm lg:text-base font-semibold">
            Cách thức thanh toán
          </h4>
          <DownOutlined
            className={`max-lg:inline-block lg:!hidden text-xs transition-transform ${isPaymentOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`footer-content overflow-hidden transition-all duration-300 ${isPaymentOpen ? "max-h-96 pb-3" : "max-h-0"} lg:max-h-none lg:pb-0`}
        >
          <ImageList images={PAYMENT_METHODS} />
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="main-footer bg-white text-gray-800 text-sm">
      <div className="main-footer--top py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
            {FOOTER_SECTIONS.map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
            <ContactSection />
            <ShippingPaymentSection />
          </div>
        </div>
      </div>

      <div className="main-footer--copyright bg-white py-4 lg:py-6 border-t-2 border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="w-full flex items-center gap-3">
              <h4 className="text-xs lg:text-sm font-semibold mb-2 lg:mb-3 uppercase">
                Kết nối với chúng tôi
              </h4>
              <div className="flex items-center justify-between lg:justify-start gap-4 lg:gap-6">
                <div className="social-list flex gap-2 lg:gap-3">
                  {SOCIAL_LINKS.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={social.src}
                        alt={social.alt}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  ))}
                </div>
                <div className="logo-footer lg:hidden">
                  <a
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    href={BCT_LOGO.href}
                  >
                    <img
                      src={BCT_LOGO.src}
                      alt={BCT_LOGO.alt}
                      className="h-12"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="logo-footer hidden lg:block">
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={BCT_LOGO.href}
              >
                <img
                  src={BCT_LOGO.src}
                  alt={BCT_LOGO.alt}
                  className="h-14 lg:h-16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
