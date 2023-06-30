import React, { useState, useEffect } from "react";

import { Dashboard } from "../components/ProfileContent/Dashboard";
import { Creation } from "../components/ProfileContent/Creation";
import { Collection } from "../components/ProfileContent/Collection";
import { OnSale } from "../components/ProfileContent/OnSale";
import { Favourite } from "../components/ProfileContent/Favourite";
import { Profile } from "../components/ProfileContent/Profile";
import { MyAuction } from "../components/ProfileContent/MyAuction";
import { CoverProfile } from "../components/ProfileContent/CoverProfile";
import { images } from "../constant";
import { useWallet } from "../hooks/useWallet";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";
import { useLocation } from "react-router-dom";

export const MainProfile = () => {
  const navigate = useNavigate();

  const { accountId } = useWallet();
  const { username } = useProfile();
  const { avatar } = useProfile();
  const  { profile } = useProfile()

  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
}, [currentComponent]);


  return (
    <div className="mt-4">
      <div>
        <div>
          <CoverProfile />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 relative gap-4 pl-0 ml-10 mt-16">
          {/* left container */}
          <div 
            className="flex flex-col col-span-4 lg:col-span-1 w-[100%] rounded-sm border-[1px] border-red-600 text-white py-4 px-4 ml-10 lg:ml-0 -translate-y-96 mt-4 max-h-[1000px] z-50 w-[75%]"
            style={{background:"rgba(41, 41, 41, 0.5)", backdropFilter:"blur(50px)"}}
            >
            <div>
                <div className="text-2xl font-semibold text-center text-white pb-4">
                {/* @{profile.user_public_address.slice(-4).padStart(profile.user_public_address.length, ".")} */}
                Collection Name
                </div>
                <div onClick={() => setIsContainerCollapsed(true)}>
                <img className="profile-size mt-10" src={avatar} />
                </div>
                <div className="text-center text-sm font-bold text-opensans">
                {accountId ? 
                <>
                    By @{accountId}
                </>
                :
                <>
                    By @username
                </>
                }
                </div>

                <div className="text-sm my-6">
                <div className="pt-2">
                    {profile.bio ? 
                    <>
                    {profile.bio}
                    </>
                    :
                    <>
                    About
                    </>
                }
                </div>
                </div>

                <div className="flex justify-between pt-10 pb-6">
                <div className="flex text-xs flex-col gap-y-2 lg:gap-y-6">
                    <span className="">Total Volume</span>
                    <span className="">Floor Price</span>
                    <span className="">Listed</span>
                    <span className="">Owners</span>
                </div>

                <div className="flex flex-col text-xs font-semibold text-gray-400 gap-y-2 lg:gap-y-6 text-right">
                    <span>N/A</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                </div>
                </div>

                <button
                onClick={() => navigate("/updateprofile")}
                className="cursor-pointer my-6 text-center border-[1px] py-2 px-6 rounded-lg text-sm m-auto flex justify-center"
                >
                Add to favourite
                </button>
                
                <div className="flex lg:mt-40 lg:mb-10 gap-x-4 justify-center">
                <div className="flex justify-center pt-2">
                    <div className="community-icon-div mr-3">
                    <a
                    href="https://twitter.com/3six9OFFICIAL"
                    target="_blank"
                    className="pl-0 pr-0"
                    ><img
                        alt="twitter"
                        src={images.twitter}
                        className="community-icon mr-1"
                    /></a >
                    </div>
                    <div className="community-icon-div mr-3">
                    <a
                    href="https://twitter.com/3six9OFFICIAL"
                    target="_blank"
                    className="pl-0 pr-0"
                    ><img
                        alt="twitter"
                        src={images.twitter}
                        className="community-icon mr-1"
                    /></a >
                    </div>
                    <div className="community-icon-div mr-3">
                    <a
                        href="https://discord.gg/86uzNjMgPK"
                        target="_blank"
                        className="pl-0 pr-0">
                        <img
                            alt="discord"
                            src={images.discord}
                            className="community-icon mr-1"
                        />
                    </a >
                    </div>
                </div>
                </div>
            </div>
          </div>

          {/*  right container */}
          {/* button */}
          <div className="flex flex-col col-span-4 lg:col-span-3 -translate-y-96 lg:-translate-y-10 ">
          <div className='flex font-light bg-transparent border-[1px] border-[#6B6B6B] rounded-lg text-[10px] lg:text-xs lg:w-[75%]'>
                <div  
                    className={`rounded-lg h-8 lg:h-10 cursor-pointer px-6 flex items-center  ${
                    currentComponent === 1 ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent(1)}
                    >
                      Creations
                </div>
                <div  
                    className={`rounded-lg h-8 lg:h-10 px-6 cursor-pointer flex items-center  ${
                    currentComponent === 2 ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent(2)}
                    >
                      Collections
                </div>
                <div  
                    className={`rounded-lg h-8 lg:h-10 px-6 cursor-pointer flex items-center  ${
                    currentComponent === 3 ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent(3)}
                    >
                      On Sales
                </div>
                <div  
                    className={`rounded-lg h-8 lg:h-10 cursor-pointer px-6 flex items-center  ${
                    currentComponent === 4 ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent(4)}
                    >
                      Favourites
                </div>
                <div  
                    className={`rounded-lg h-8 lg:h-10 px-6 cursor-pointer flex items-center  ${
                    currentComponent === 5 ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent(5)}
                    >
                      My Auctions
                </div>
                <div  
                    className={`rounded-lg h-8 lg:h-10 px-6 cursor-pointer flex items-center  ${
                    currentComponent === 6 ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent(6)}
                    >
                      Activities
                </div><div  
                    className={`rounded-lg h-8 lg:h-10 px-6 cursor-pointer flex items-center  ${
                    currentComponent === 7 ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent(7)}
                    >
                      Profiles
                </div>
            </div>

            <div className="py-6">
              {/* Content */}
              <div>
                {currentComponent === 1 && <Dashboard />}
                {currentComponent === 2 && <Creation />}
                {currentComponent === 3 && <Collection />}
                {currentComponent === 4 && <OnSale />}
                {currentComponent === 5 && <MyAuction />}
                {currentComponent === 6 && <Favourite />}
                {currentComponent === 7 && <Profile />}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  :
    <div>
    <div><CoverProfile /></div>

    <div className='grid grid-cols-1 lg:grid-cols-4 relative gap-6 pl-0 lg:pl-16 pr-10 mt-16'>


    <div className='flex flex-col col-span-4 lg:col-span-1 bg-white rounded-2xl text-black py-10 px-6 ml-10 lg:ml-0 -translate-y-44'>
        <div>
            <div><img className='profile-size m-10' src={`https://ipfs.io/ipfs/${data.collectible_sale_user.profile_photo_path}`}/></div>
            <div className='text-2xl font-semibold text-center'>
                {accountId}
            </div>
            <div className='text-center text-sm py-4'>{accountId}</div>

            <div onClick={()=>navigate("/updateprofile")}
                className='my-16 text-center hover:border-orange-600 hover:border-2 hover:p-2 hover:rounded-lg'>
                Edit Profile
            </div>

            <div className='flex justify-between pb-6'>
                <div className='flex text-sm font-medium flex-col gap-y-3'>
                    <span>Project Views</span>
                    <span>Favourites</span>
                    <span>Followers</span>
                    <span>Following</span>
                    <span className='font-semibold'>Contact Me</span>
                </div>

                <div className='flex flex-col text-sm font-medium text-gray-400 gap-y-3 text-right'>
                    <span>N/A</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                </div>

            </div>

            <div className='py-10 text-sm font-semibold'>
                <span>About</span>
                <span></span>
            </div>

            <div className='flex mt-48 mb-10 gap-x-4 justify-center'>
                <span><img src={images.share}/></span>
            </div>

            <div className='my-8 text-xs text-center'>Member Since: November 4, 2022</div>
        </div>
    </div>



    <div className="flex flex-col col-span-4 lg:col-span-3 -translate-y-24 md:translate-y-0">
        <div className='flex justify-between gap-3 bg-none rounded-full h-10 px-8 text-sm font-semibold overflow-x-auto'>
            <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent(1)}>DASHBOARD</button>
            <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent(2)}>CREATION</button>
            <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent(3)}>COLLECTION</button>
            <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent(4)}>ON SALE</button>
            <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent(5)}>MY AUCTIONS</button>
            <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent(6)}>FAVOURITE</button>
            <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent(7)}>PROFILE</button>
        </div>

        <div className='py-6'>

            <div>
                {currentComponent === 1 && <Dashboard/>}
                {currentComponent === 2 && <Creation /> }
                {currentComponent === 3 && <Collection /> }
                {currentComponent === 4 && <OnSale /> }
                {currentComponent === 5 && <MyAuction /> }
                {currentComponent === 6 && <Favourite /> }
                {currentComponent === 7 && <Profile /> }
            </div>

        </div>
    </div>
    </div>
    </div>

    }  */}
    </div>
  );
};
