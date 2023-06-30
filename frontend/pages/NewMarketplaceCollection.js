import React, { useState } from "react";
import { OnSaleCollection } from "../components/Collection/OnSaleMarketplace";
import { Collectibles } from "../components/Collection/Collectibles";
import { MyAuction } from "../components/ProfileContent/MyAuction";
import { useLocation } from "react-router-dom";

import { CoverProfile } from "../components/ProfileContent/CoverProfile";
import { images } from "../constant";
import { useWallet } from "../hooks/useWallet";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";
import { useLocation } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { FiArrowUpLeft } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";


import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NewMarketplaceCollection = (props) => {

    const navigate = useNavigate();
    const [isContainerCollapsed, setIsContainerCollapsed] = useState(true)
    const [searchTerm, setSearchTerm] = useState("");

    const { accountId } = useWallet();
    const { username } = useProfile();
    const { avatar } = useProfile();
    const  { profile } = useProfile()

  const location = useLocation();
  const { data } = location.state;
  const [currentComponent, setCurrentComponent] = useState(1);

  const MAX_LENGTH = 10;

  const displayText =
    data.sale_collectibles.collectible_collection.tokenAddress.length >
    MAX_LENGTH
      ? data.sale_collectibles.collectible_collection.tokenAddress.slice(
          0,
          MAX_LENGTH - 5
        ) +
        "..." +
        data.sale_collectibles.collectible_collection.tokenAddress.slice(-5)
      : data.sale_collectibles.collectible_collection.tokenAddress;

  // Copy the token
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        data.sale_collectibles.collectible_collection.tokenAddress
      );
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchItems(searchTerm);
  };


  return (
    <>
    <div className="mt-4">
      <div>
        <div>
          <CoverProfile />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 pl-0 ml-6 mt-16 z-50 absolute w-[95%]">
          {/* left container */}
          { isContainerCollapsed ?
          <div 
            className="flex flex-col col-span-4 lg:col-span-1 w-[100%] rounded-sm border-[1px] border-red-600 text-white py-4 px-4 ml-10 lg:ml-0 -translate-y-96 mt-4 max-h-[290px] z-50"
            style={{background:"rgba(41, 41, 41, 0.5)", backdropFilter:"blur(50px)"}}
          >
            <div>
                <div className="text-2xl font-semibold text-center text-white pb-4">
                {/* @{profile.user_public_address.slice(-4).padStart(profile.user_public_address.length, ".")} */}
               Collection Name
                </div>
                <div>
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

                <div className="flex lg:mt-10 gap-x-4 justify-center">
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
            <div
                className="flex justify-end mt-4 cursor-pointer"
                onClick={() => setIsContainerCollapsed(false)}
                >
                <FiArrowDownRight/>
            </div>
          </div>
          :
          <div 
            className="flex flex-col col-span-4 lg:col-span-1 w-[100%] rounded-sm border-[1px] border-red-600 text-white py-4 px-4 ml-10 lg:ml-0 -translate-y-96 mt-4 max-h-[1000px] z-50"
            style={{background:"rgba(41, 41, 41, 0.5)", backdropFilter:"blur(50px)"}}
            >
            <div>
                <div className="text-2xl font-semibold text-center text-white pb-4">
                {/* @{profile.user_public_address.slice(-4).padStart(profile.user_public_address.length, ".")} */}
                Collection Name
                </div>
                <div>
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

            <div
                className="flex justify-end cursor-pointer"
                onClick={() => setIsContainerCollapsed(true)}
                >
                 <FiArrowUpLeft/>
                </div>
          </div>
         }


          {/*  right container */}
          {/* button */}
          <div className="flex col-span-4 lg:col-span-4 -translate-y-96 lg:-translate-y-10  justify-between">
            <div className="flex gap-x-10 bg-none rounded-lg h-12 items-center text-sm mx-6 lg:mx-20">
            <div
               className={`cursor-pointer  ${
                currentComponent === 1 ? "border-b-4 border-red-600" : ""
                }`}
                onClick={() => setCurrentComponent(1)}
            >
              Overview
            </div>
            <div
               className={`cursor-pointer  ${
                currentComponent === 2 ? "border-b-4 border-red-600" : ""
                }`}
                onClick={() => setCurrentComponent(2)}
            >
              Creations
            </div>
            <div
              className={`cursor-pointer  ${
                currentComponent === 3 ? "border-b-4 border-red-600" : ""
                }`}
                onClick={() => setCurrentComponent(3)}
            >
              Analytics
            </div>
            <div
                className={`cursor-pointer  ${
                currentComponent === 4 ? "border-b-4 border-red-600" : ""
                }`}
                onClick={() => setCurrentComponent(4)}
            >
              Announcement
            </div>
            </div>

            <div htmlFor="search-form">
                <div className="relative">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="outline outline-[1px] outline-gray-800 h-0 lg:h-10 rounded-full"
                    placeholder="Search items, collections, and accounts"
                    style={{
                    width: "320px",
                    padding: "0 20px",
                    background: "none",
                    fontSize: "11px",
                    }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    //use viewMethod nft smart contract
                />
                <div
                    className="pl-2 pr-3 absolute inset-y-0 right-0 flex items-center cursor-pointer"
                    onClick={handleSearch}
                >
                    <AiOutlineSearch
                    theme="outline"
                    size="22"
                    className="text-gray-500"
                    />
                </div>
                </div>
            {/*  <div>
                {searchInput.length > 1
                    ? filteredResults.map((item) => {
                        return (
                        <Card>
                            <Card.Content>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Description>{item.email}</Card.Description>
                            </Card.Content>
                        </Card>
                        );
                    })
                    : APIData.map((item) => {
                        return (
                        <Card>
                            <Card.Content>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Description>{item.email}</Card.Description>
                            </Card.Content>
                        </Card>
                        );
                    })}
                </div> */}
            </div>
          </div>
        </div>

        <div className="z-10 pt-32">
                {currentComponent === 1 && <OnSaleCollection />}
                {currentComponent === 2 && <Collectibles />}
                {currentComponent === 3 && <MyAuction />}
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
    </>
  );
};
