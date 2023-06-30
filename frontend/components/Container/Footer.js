import React from "react";
import { images } from "../../constant";
import {
  BsTwitter,
  BsDiscord,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";

import { SiTiktok, SiMedium } from "react-icons/si";

function Footer() {
  return (
    <footer>
    <div className='grid grid-cols-4 border-t-2 border-t-[#393D5E] py-10'>
        <div className='col-span-2 px-4 lg:w-[500px]'>
                <div className='text-center text-xs lg:text-sm'>Stay in the loop</div>
                <div className='text-[10px] lg:text-xs font-light'>Join our mailing list to get in the updates for latest releases, drop,
                    auctions, tricks and tips on navigating 3six9 marketplace.
                </div>
                <div className='flex gap-x-2 pt-4'>
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="bg-white-100 h-10 w-[80%] rounded-md text-[10px] lg:text-xs"
                        placeholder="Your email address"
                        style={{ padding:"20px"}}
                    />
                    <button className='bg-red-600 font-light text-[10px] lg:text-xs'>Sign up</button>                               
                </div>
        </div>

        <div className='lg:col-span-1 w-[0%]'></div>

        <div className='col-span-1 w-[250px] lg:w-[360px] -translate-x-20 lg:-translate-x-10'>
            <div className='text-center text-xs lg:text-sm'>Join the community</div>
            <div className='font-light text-[10px] lg:text-xs'>Connect with like-minded creators, collectors, and NFTs enthusiasts!
                We also share the latest news on our social medias.
            </div>
            <div className="grid grid-cols-7 gap-2 pt-2 mx-5">
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                  <a
                  href="https://twitter.com/3six9OFFICIAL"
                  target="_blank"
                  >
                  <img
                      alt="twitter"
                      src={images.twitter}
                      className="w-3.5 lg:w-5"
                  />
                  </a>
              </div>
              <div className="bg-[#393D5E] rounded-md  flex justify-center items-center">
                  <a
                    href="https://discord.gg/86uzNjMgPK"
                    target="_blank">
                    <img
                        alt="discord"
                        src={images.discord}
                        className="w-3.5 lg:w-5"
                    />
                  </a >
              </div>
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                  <a
                  href="https://twitter.com/3six9OFFICIAL"
                  target="_blank"
                  >
                  <img
                      alt="twitter"
                      src={images.twitter}
                      className="w-3.5 lg:w-5"
                  />
                  </a>
              </div>
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                  <a
                  href="https://twitter.com/3six9OFFICIAL"
                  target="_blank"
                  >
                  <img
                      alt="twitter"
                      src={images.twitter}
                      className="w-3.5 lg:w-5"
                  />
                  </a>
              </div>
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
              <a
                    href="https://www.instagram.com/3six9official/"
                    target="_blank">
                    <img
                        alt="instagram"
                        src={images.instagram}
                        className="w-3.5 lg:w-5"
                    />
                </a >
              </div>
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                  <a
                    href="https://t.me/threesixninenft"
                    target="_blank">
                    <img
                        alt="telegram"
                        src={images.telegram}
                        className="w-3.5 lg:w-5"
                    />
                  </a >
              </div>
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                  <a
                    href="https://medium.com/@3six9OFFICIAL/"
                    target="_blank">
                    <img
                        alt="Medium"
                        src={images.medium}
                        className="w-3.5 lg:w-5 py-2 lg:py-3"
                    />
                  </a >
              </div>
            </div>
        </div>

    </div>
    {/* second row */}
    <div className='flex pt-12 mb-16 justify-between border-t-2 border-t-[#393D5E]'>
        <div className='flex flex-col px-4'>
            <span>
                <img className="w-10 mb-6 lg:w-20 lg:mb-6" src={images.logofooter} />
            </span>
            <span className='font-light text-[10px] lg:text-xs'>
            We help creators and businesses<br/>
            accelebrate projects and<br/>
            create impactful values for the users.
            </span>
        </div>
        
        <div className='flex w-[70%] px-10 justify-between'>
        <div className="flex flex-col gap-y-2 font-light text-[10px] lg:text-xs">
            <span className='font-normal text-xs lg:text-md'>Marketplace</span>
            <span>Explore</span>
            <span>All Categories</span>
            <span>Auction</span>
            <span>Drop</span>
            <span>Launchpad</span>
            <span>Top Collection</span>
        </div>

        <div className="flex flex-col gap-y-2 font-light text-[10px] lg:text-xs">
            <span className='font-normal text-xs lg:text-md'>Account</span>
            <span>Profile</span>
            <span>Favourites</span>
            <span>My Collection</span>
            <span>Create</span>
            <span>Setting</span>
        </div>

        <div className="flex flex-col gap-y-2 font-light text-[10px] lg:text-xs">
            <span className='font-normal text-xs lg:text-md'>Resources</span>
            <span>NFT 101</span>
            <span>Tips and Tricks</span>
            <span>Blogs</span>
            <span>Help Center</span>
            <span>Partners</span>
        </div>

        <div className="flex flex-col gap-y-2 font-light text-[10px] lg:text-xs">
            <span className='font-normal text-md'>Company</span>
            <span>About</span>
            <span>Our Team</span>
            <span>Philosophy</span>
        </div>
        </div>
    </div>
    
</footer>
   /*  <footer>
      <div className="flex justify-between mt-40 mb-16 text-[0.9vw]">
        <div>
          <span>
            <img className="w-20 mb-6" src={images.logofooter} />
          </span>
          <span className="font-medium">
            We help creators and businesses
            <br />
            accelerate projects and
            <br />
            create impactful values for the users.
          </span>
        </div>

        <div className="flex flex-col gap-y-2 ">
          <a
            href="https://www.3six9.space/about"
            target="_blank"
            className="text-orange-600"
          >
            About Us
          </a>
          <a href="https://www.3six9.space/roadmap" target="_blank">
            Roadmap
          </a>
          <a href="#">Featured Creators</a>
          <a href="https://www.3six9.space/news-events" target="_blank">
            News & Events
          </a>
          <a href="/#/faqs" target="_blank">
            FAQs
          </a>
        </div>

        <div className="flex flex-col gap-y-2 ">
          <a href="https://www.3six9.space/privacy-policy/" target="_blank">
            Privacy Policy
          </a>
          <a
            href="https://3six9.space/content-policy/"
            target="_blank"
            className="footer-item"
          >
            Content Policy
          </a>
          <a
            href="https://www.3six9.space/terms-of-use"
            target="_blank"
            className="footer-item"
          >
            Terms of Use
          </a>
        </div>

        <div className="flex flex-col gap-y-2 ">
          <span className="font-medium">Customer Support</span>
          <span>
            <a
              href="mailto:support@3six9.space"
              target="_blank"
              className="text-orange-600 font-medium"
            >
              support@3six9.space
            </a>
          </span>
        </div>

        <div className="flex flex-col gap-y-2">
          <span className="font-medium">Follow us:</span>
          <div className="flex">
            <div className="community-icon-div mr-2">
              <a
                href="https://twitter.com/3six9OFFICIAL"
                target="_blank"
                className="pl-0 pr-0"
              >
                <BsTwitter />
              </a>
            </div>
            <div className="community-icon-div mr-2">
              <a
                href="https://www.instagram.com/3six9official/"
                target="_blank"
                className="pl-0 pr-0"
              >
                <BsInstagram />
              </a>
            </div>
            <div className="community-icon-div mr-2">
              <a
                href="https://www.facebook.com/3six9OFFICIAL"
                target="_blank"
                className="pl-0 pr-0"
              >
                <BsFacebook />
              </a>
            </div>
            <div className="community-icon-div mr-2">
              <a
                href="https://www.linkedin.com/company/3six9-nft-marketplace/"
                target="_blank"
                className="pl-0 pr-0"
              >
                <BsLinkedin />
              </a>
            </div>
            <div className="community-icon-div mr-2">
              <a
                href="https://t.me/threesixninenft"
                target="_blank"
                className="pl-0 pr-0"
              >
                <BsTelegram />
              </a>
            </div>
            <div className="community-icon-div mr-2">
              <a
                href="https://www.tiktok.com/@3six9official"
                target="_blank"
                className="pl-0 pr-0"
              >
                <SiTiktok />
              </a>
            </div>
            <div className="community-icon-div mr-2">
              <a
                href="https://medium.com/@3six9OFFICIAL/"
                target="_blank"
                className="pl-0 pr-0"
              >
                <SiMedium />
              </a>
            </div>
          </div>
          <span className="font-medium">Join the Community:</span>
          <div className="flex">
            <div className="community-icon-div mr-2">
              <a
                href="https://t.me/threesixninenft"
                target="_blank"
                className="pl-0 pr-0"
              >
                <BsTelegram />
              </a>
            </div>
            <div className="community-icon-div mr-2">
              <a
                href="https://discord.gg/86uzNjMgPK"
                target="_blank"
                className="pl-0 pr-0"
              >
                <BsDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm font-light">
        Copyright © 3six9.space. All rights reserved.
      </div>
    </footer> */
  );
}

export default Footer;
