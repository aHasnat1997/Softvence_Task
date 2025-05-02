import Button from "@/components/ui/button";
import Image from "next/image";
import footerLogo from "../../assets/footer-logo.png";
import facebook from "../../assets/facebook-icon.svg";
import twitter from "../../assets/twitter-icon.svg";
import linkedin from "../../assets/linkedin-icon.svg";
import instagram from "../../assets/instagram-icon.svg";
import mobile from "../../assets/phone-icon.svg";
import email from "../../assets/email-icon.svg";
import location from "../../assets/location-icon.svg";
import { JSX } from "react";

/**
 * Footer component renders the footer section of the application.
 * 
 * Features:
 * - A call-to-action section for newsletter subscription.
 * - Company description and social media icons.
 * - Navigation links grouped into categories.
 * - Contact information including phone, email, and address.
 */
export default function Footer() {
  /**
   * TFooterLink defines the structure of the navigation links in the footer.
   */
  type TFooterLink = {
    title: string,
    links: {
      name: string | JSX.Element,
      href?: string
    }[]
  }[];

  // Navigation links grouped into categories for the footer.
  const navigationLinks: TFooterLink = [
    {
      title: 'Navigation',
      links: [
        { name: 'Service', href: '/' },
        { name: 'Agency', href: '/' },
        { name: 'Case Study', href: '/' },
        { name: 'Resource', href: '/' },
        { name: 'Contact', href: '/' },
      ]
    },
    {
      title: 'Licence',
      links: [
        { name: 'Privacy Policy', href: '/' },
        { name: 'Copyright', href: '/' },
        { name: 'Email Address', href: '/' }
      ]
    },
    {
      title: 'Contact',
      links: [
        {
          name: <div className="flex items-center gap-[10px]">
            <Image
              src={mobile}
              alt="Mobile Icon"
              width={24}
              height={24}
            />
            <p className="text-[#335386] text-[14px]">(406) 555-0120</p>
          </div>
        },
        {
          name: <div className="flex items-center gap-[10px]">
            <Image
              src={email}
              alt="Email Icon"
              width={24}
              height={24}
            />
            <p className="text-[#335386] text-[14px]">Hey@boostim.com</p>
          </div>
        },
        {
          name: <div className="flex items-start gap-[10px]">
            <Image
              src={location}
              alt="Location Icon"
              width={24}
              height={24}
            />
            <p className="text-[#335386] text-[14px]">2972 Westheimer Rd. Santa Ana, <br /> Illinois 85486 </p>
          </div>
        }
      ]
    }
  ];

  return (
    <footer className="footer-bg w-full">

      {/* Call-to-action section for newsletter subscription */}
      <div className="py-8 px-4 lg:px-0">
        <div className="max-w-container gradient-bg py-[40px] md:py-[80px] flex items-center justify-center rounded-3xl">
          <div className="text-center">
            <h2 className="text-white font-semibold text-[18px] md:text-[38px]">Ready to Hire Smarter?</h2>
            <p className="text-[#B9BDC7] text-[8px] md:text-[16px]">Unlock Exclusive Insights Subscribe to Our Newsletter</p>

            <Button
              title="Join Now"
              variant="tertiary"
              shape="rounded"
              customStyle={'px-[20] py-[10px] md:px-[36px] md:py-[16px] mt-[24px] md:mt-[48px]'}
            />
          </div>
        </div>
      </div>

      {/* Footer main content section */}
      <div className="max-w-container pt-10 lg:pt-20 pb-10 lg:flex justify-between items-center">
        {/* Company description and social media icons */}
        <div className="lg:max-w-[534px]">
          <Image
            src={footerLogo}
            alt="Logo"
            width={146.36}
            height={51}
          />
          <p className="text-[#335386] text-[14px] py-[30px]">SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.</p>
          <div className="flex items-center gap-[12px]">
            {
              [facebook, twitter, linkedin, instagram].map((icon, index) => (
                <a
                  key={index}
                  href={
                    index === 0 ? 'https://www.facebook.com/' :
                      index === 1 ? 'https://twitter.com/' :
                        index === 2 ? 'https://www.linkedin.com/' :
                          index === 3 ? 'https://www.instagram.com/' : ''
                  }
                >
                  <Image
                    src={icon}
                    alt="Social Media Icon"
                    width={34}
                    height={34}
                    className="cursor-pointer rounded-full duration-200 hover:shadow-[5px_5px_2px_rgba(0,0,0,0.25)]"
                  />
                </a>
              ))
            }
          </div>
        </div>

        {/* Navigation links grouped into categories */}
        <div className="w-fit flex flex-wrap md:flex-nowrap items-start gap-14 md:gap-[115px] mt-10 lg:mt-0">
          {
            navigationLinks.map((nav, index) => (
              <div key={index} className="space-y-[36px]">
                <h3 className="text-[#335386] text-[20px] font-semibold">{nav.title}</h3>
                <div className="flex flex-col gap-[10px]">
                  {nav.links.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      {
                        'href' in link ? <a
                          href={link.href}
                          className="text-[#335386] text-[14px] group"
                        >
                          {link.name}
                          <hr className="w-full border-[1.5px] border-[#b4b4b4] duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
                        </a> :
                          <div>{link.name}</div>
                      }
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Footer bottom section */}
      <hr className="pb-16 border-[#B4B4B4]" />

    </footer>
  );
};
