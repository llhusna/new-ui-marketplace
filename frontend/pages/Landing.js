import FeaturedArtworks from '../components/Container/FeaturedArtworks';
import FeaturedCreators from '../components/Container/FeaturedCreators';
import LiveAuctions from '../components/Container/LiveAuctions';
import { Link, NavLink } from "react-router-dom";

import HeaderHero from '../components/Container/HeaderHero';
import FeaturedCreations from '../components/Container/FeaturedCreations';
import FeaturedAuctions from '../components/Container/FeaturedAuctions';
import LaunchpadDrops from '../components/Container/LaunchpadDrops';
import { Trending } from '../components/Container/Trending';
import { images } from '../constant';


export default function Landing() {

  return (
    <>
     <>
    <div className='body-container'>
        <HeaderHero/>
        <Trending />
        <FeaturedCreators />
        <FeaturedCreations />
        <FeaturedAuctions />
        <LaunchpadDrops />
        


        {/* floating navigation bar  */}
        <div
          className="m-auto
             bg-gray-600 bg-opacity-75 
             text-white text-center text-sm
             border-[1px] border-red-500 rounded-full
             fixed
             inset-x-0
             bottom-10
             h-11
             w-[28%]">
            
            <div className='flex items-center justify-between'>
                <div className='ml-6'>
                <Link to="/">
                    <img className="w-10" src={images.logofooter} />
                </Link>
                </div>

                <div className="">
                            <ul className="flex text-xs pt-1 px-4">
                                <li className="rounded-sm">
                                    <a
                                        href="/#/newmarketplace"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Marketplace</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="/#/auctions"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Auction</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="/#/activity"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Activity</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="/#/dashboard"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Launchpad</span>
                                    </a>
                                </li>
                            </ul>
                </div>
            </div>
        </div>
    </div>
    </>
    </>
  );
} 
