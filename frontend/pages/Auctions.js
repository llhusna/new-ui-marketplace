import React, { useRef, useState, useEffect, useRef } from "react";
import auction from "../data/auction.json";
import { useNavigate, Link } from "react-router-dom";
import SliderButton from "../components/SliderButton/SliderButton";
import { images } from "../constant";
import AuctionCountdown from "../components/Container/Countdown";
import slideOption from "../data/filter/slideOption.json";
import LazyLoad from "react-lazyload";
// import { BsChevronDown } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { MdFilterListAlt } from "react-icons/md";


function Auctions() {

  const [openBottomNav, setOpenBottomNav] = useState(false);
  const navRef = useRef(null);

  const onToggleBottomNav = () => {
    setOpenBottomNav(!openBottomNav);
  };

  useEffect(() => {
    function handleClick(event) {
      if (!navRef.current.contains(event.target)) {
        setOpenBottomNav(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const Ref = useRef(null);

  //filter function
  const dropdownAuction = [
    {
      value: "recent",
      label: "Recently added",
    },
    {
      value: "highest",
      label: "Highest Bid",
    },
    {
      value: "lowest",
      label: "Lowest Bid",
    },
  ];

  const [open, setOpen] = useState(false);
  const onToggleDropdown = () => {
    setOpen(!open);
  };

  const handleOptionSelection = (value) => {
    setFilterOption(value);
    setOpen(false);
  };

  //slider button logic
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === slideOption.length - 5 ? currentIndex : currentIndex + 5
    );
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 5);
  };

  //filter function
  const [filterOption, setFilterOption] = useState("");
  const [slideSelected, setSlideSelected] = useState(slideOption[0].value);

  const filteredData = {
    //for filter function
    lowest: (data) => data.sort((a, b) => a.reserved_price - b.reserved_price),
    highest: (data) => data.sort((a, b) => b.reserved_price - a.reserved_price),
    recent: (data) =>
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),

    //for filter using slider button
    collectibles: (data) =>
      data.filter(
        (d) => d.auctions_of_collectible.collectible_category === "Collectibles"
      ),
    membership: (data) =>
      data.filter(
        (d) => d.auctions_of_collectible.collectible_category === "Membership"
      ),
    arts: (data) =>
      data.filter(
        (d) => d.auctions_of_collectible.collectible_category === "Art"
      ),
    ticketing: (data) =>
      data.filter(
        (d) => d.auctions_of_collectible.collectible_category === "Ticketing"
      ),
    animation: (data) =>
      data.filter(
        (d) => d.auctions_of_collectible.collectible_category === "Animation"
      ),
    IrlArt: (data) =>
      data.filter(
        (d) => d.auctions_of_collectible.collectible_category === "IrlArt"
      ),
  };

  const filteredNft = () => {
    const data = auction.result;

    if (filteredData[filterOption]) {
      return filteredData[filterOption](data);
    } else if (filteredData[slideSelected]) {
      return filteredData[slideSelected](data);
    } else {
      return data;
    }
  };

  //navigate to the respective page based on data
  const [selectedNFT, setSelectedNFT] = useState(null);
  const navigate = useNavigate();

  const handleNFTClick = (data) => {
    setSelectedNFT(data);
    navigate(`/auctions/${data.auctions_of_collectible.collectible_uuid}`, {
      state: { data },
    });
  };

  const handleCollectionClick = (data) => {
    setSelectedNFT(data);
    navigate(`/auction/${data.auctions_of_collectible.collectible_uuid}`, {
      state: { data },
    });
  };

  const handleCreatorClick = (data) => {
    setSelectedNFT(data);
    navigate(
      `/profile/${data.auctions_of_collectible.collectibles_user.user_public_address}`,
      { state: { data, type: "auction" } }
    );
  };

  const handleOwnerClick = (data) => {
    setSelectedNFT(data);
    navigate(`/profile/${data.user_public_address}`, { state: { data } });
  };

  return (
    <>
      <div className="body-container min-h-screen">

        <div className="grid grid-cols-1 lg:mx-16">
            <div className="flex gap-x-1 lg:gap-x-2 w-full">
              {slideOption
                /* .slice(currentIndex, currentIndex + 5) */
                .map((option, index) => (
                  <button
                    key={index}
                   /*  className={`w-[18%] flex-nowrap flex-none rounded-full text-center py-3 border-2 ${
                      slideSelected === option.value
                        ? "bg-orange-600 text-white border-orange-600"
                        : "bg-white text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
                    } cursor-pointer`} */
                    className='w-1/3 rounded-md bg-[#373737] text-white text-[8px] lg:text-xs py-3 lg:py-4 text-center hover:bg-red-600'
                    onClick={() => {
                      setSlideSelected(option.value);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
            </div>
          </div>

        {/* filter function */}
       {/*  <div className="flex justify-start items-center w-full mx-auto ">
          <div onClick={() => onToggleDropdown()}>
            <div className="text-black text-sm font-medium border-2 bg-white border-orange-600 rounded-xl px-6 py-4 w-56 flex justify-between items-center cursor-pointer">
              {filterOption
                ? dropdownAuction.find(
                    (option) => option.value === filterOption
                  ).label
                : "Filter & Sort"}
              <BsChevronDown
                className={`${
                  open ? "rotate-180 transform" : ""
                }  text-black text-xl`}
              />
            </div>

            {open ? (
              <div
                id="dropdownAvatar"
                className="z-20 w-56 absolute mt-4 bg-white text-black rounded-xl"
              >
                <ul className="flex flex-col p-6 text-sm text-black">
                  <div className="cursor-default text-gray-500">Sort by</div>
                  {dropdownAuction.map((option, i) => {
                    return (
                      <li className="flex pt-2 cursor-pointer" key={i}>
                        <a
                          onClick={() => handleOptionSelection(option.value)}
                          className="block pt-1"
                        >
                          {option.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div> */}


        {/* auction lists */}
        {/* <div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-14 my-16">
            {filteredNft().map((data, i) => (
              <div
                key={i}
                className="flex flex-col md:col-span-1 bg-gray-100 text-black border-2 border-orange-600 p-4 rounded-lg relative"
              >
                <div
                  onClick={() => handleNFTClick(data)}
                  className="bg-white rounded-lg"
                >
                  <LazyLoad placeholder={<img src={images.loadNft} />}>
                    <img
                      className="object-cover object-center h-60 w-96 rounded-lg"
                      src={data.auctions_of_collectible.ipfs_media_path}
                    />
                  </LazyLoad>
                </div>

                <div className="py-4 text-lg font-semibold">
                  {data.auctions_of_collectible.collectible_name}
                </div>

                <div className="flex justify-between">
                  <div>
                    <div className="text-md text-gray-400">
                      {data.auctions_of_collectible.collectible_type.toUpperCase()}
                    </div>
                    <div className="text-sm font-semibold">
                      <span className="font-semibold">
                        Edition {data.quantity} / {data.quantity}
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <img
                      onClick={() => handleCollectionClick(data)}
                      src={`https://ipfs.io/ipfs/${data.auctions_of_collectible.collectible_collection.tokenLogo}`}
                      className="market-size z-10 cursor-pointer"
                    />
                    <img
                      onClick={() => handleCreatorClick(data)}
                      src={`https://ipfs.io/ipfs/${data.auctions_of_collectible.collectibles_user.profile_photo_path}`}
                      className="market1-size z-20 cursor-pointer"
                    />
                    <img
                      onClick={() => handleOwnerClick(data)}
                      src={`https://ipfs.io/ipfs/${data.auctions_of_collectible.collectibles_user.profile_photo_path}`}
                      className="market2-size z-30 cursor-pointer"
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <p className="text-md text-gray-400 ">Starting Price</p>
                <span className="font-semibold">{`${
                  data.starting_price / 10 ** 18
                } Ⓝ`}</span>

                <p className="text-md text-gray-400 pt-4">Ending In</p>
                <AuctionCountdown data={data} />
              </div>
            ))}
          </div>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-3 lg:gap-x-6 gap-y-10 mt-10 lg:mt-20 mb-24">           
            {filteredNft().map((data, i) => (
        
                <div key={i} className="flex flex-col md:col-span-1 bg-transparent text-white rounded-lg relative hover:border-rose-600 hover:border-[1px] hover:border-rose-600 card-background">
                  <div className='flex items-center pb-2'>
                    <img src={data.auctions_of_collectible.ipfs_media_path} className="trending-avatar-size py-2 pr-3 pl-1"/>
                    <div> 
                      <div className='text-xs lg:text-md font-semibold'>{data.auctions_of_collectible.collectible_name}</div>
                      <div className='text-[10px] lg:text-xs font-semibold text-red-600 block truncate w-20 lg:w-40'>{data.auctions_of_collectible.collectibles_user.username}</div>
                    </div>
                  </div>

                  <div
                    className="flex flex-col md:col-span-1 relative bg-center bg-cover rounded-lg relative h-52 lg:h-64 hover:border-[1px] hover:border-rose-600 card-background" 
                    style={{ backgroundImage: `url(${data.auctions_of_collectible.ipfs_media_path})` }}
                    onClick={() => handleNFTClick(data)} 
                  >
                    {/* <img className="object-cover object-center h-62 w-96 rounded-md" src={data.auctions_of_collectible.ipfs_media_path} /> */}
                    <div className='absolute bottom-0 w-full'>
                      <div className='m-2 rounded-lg opaque-bg py-1 lg:pt-2 lg:pb-4'>
                        <div className='flex'>
                          <div className='grow pl-2 lg:pl-4 border-r-[1px]'>
                            <span className='text-[10px] lg:text-xs text-opensans'>Current Bid</span>
                            <div className='text-xs text-sm'>4.06 ETH</div>
                            <div className='text-[10px] lg:text-xs font-light'>5100 usd</div>
                          </div>
                          <div className='grow flex-col text-center'>
                            <span className='text-[10px] lg:text-[11px] font-semibold text-opensans'>Remaining Time</span>
                            <span className='flex justify-center'><AuctionCountdown data={data} /></span>
                          </div>
                      </div>
                      </div>
                    </div>
                  </div>
  
                  {/* <div className="flex justify-between">
                    <div>
                    <div className='text-md text-gray-400'>{data.auctions_of_collectible.collectible_type.toUpperCase()}</div>
                      <div className="text-sm font-semibold">
                        <span className="font-semibold">Edition { data.quantity } / { data.quantity}</span>
                      </div>
                    </div>
                    <div className='flex'>
                        <img 
                            onClick={() => handleCollectionClick(data)} 
                            src={`https://ipfs.io/ipfs/${data.auctions_of_collectible.collectible_collection.tokenLogo}`} 
                            className="market-size z-10"
                        /> 
                        <img src={data.auctions_of_collectible.ipfs_media_path} className="market2-size z-30"/> 
                    </div>
                  </div>
  
  
                  <hr className='my-4'/>
  
                  <p className="text-md text-gray-400 ">Starting Price</p>
                  <span className='font-semibold'>{data.starting_price}</span>
  
                  <p className="text-md text-gray-400 pt-4">Ending In</p>
                  <AuctionCountdown data={data} /> */}
                </div>
  
            ))}
        </div>

       {/* floating navigation bar  */}
       <div
          className="m-auto
             text-white text-center text-sm
             border-[1px] border-red-500 rounded-full
             fixed
             inset-x-0
             bottom-10
             px-2
             w-[28%]"
          style={{background: "rgba(116, 116, 116, 0.7)"}}
             >
            <div className='flex'>
                <div className='flex items-center rounded-lg text-[#FF1F00] text-xs font-semibold ml-3 '>
                  <span>Auction</span>
                  
                  <div className="relative" ref={navRef} onClick={() => onToggleBottomNav()} >
                    <div>
                      <MdArrowDropDown
                        className="rotate-180 transform translate-y-1 text-gray-100 text-xs"
                      />
                      <MdArrowDropDown
                        className="transform text-gray-100 -translate-y-1 text-xs"
                      />
                    </div>
                    
                    <div>
                    {openBottomNav ? (
                          <div
                            id="dropdownAvatar"
                            className="z-50 absolute bottom-10 h-16 w-[385px] mt-4 rounded-lg -left-14"
                            style={{background: "rgba(116, 116, 116, 0.7)"}}
                          >

                            <ul className="py-1 flex justify-between px-10">
                            <li className="rounded-sm">
                                    <a
                                        href="/"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Main</span>
                                    </a>
                                </li>
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
                                        href="/#/dashboard"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Launchpad</span>
                                    </a>
                                </li>
                            </ul>
                          </div>
                        ) : (
                          <></>
                        )}
                    </div>
                  </div>
                  
                </div>

                <div className='flex items-center rounded-lg text-xs px-2'>
                  <span>Filter</span>
                </div>

                <div className="relative w-full py-2">
                  <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="outline outline-[1px] outline-gray-800 h-8 rounded-full w-full"
                    placeholder="Price high to low"
                    style={{
                      padding: "0 20px",
                      background: "rgba(0, 0, 0, 0.5)",
                      fontSize: "11px",
                    }}
                    /* value={searchTerm} */
                    /* onChange={(e) => setSearchTerm(e.target.value)} */
                    //use viewMethod nft smart contract
                  />
                </div>

                <div 
                  className="flex items-center rounded-[30px] my-2 mx-1"
                  style={{
                    padding: "2px 6px",
                    background: "rgba(0, 0, 0, 0.5)",
                  }}>
                  <MdFilterListAlt
                    className="transform text-gray-100 text-xl"
                  />
                  </div>
            </div>
        </div>
      </div>    
    </>
  );
}

export default Auctions;
