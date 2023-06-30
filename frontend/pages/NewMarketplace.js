import React from 'react'
import React, {useState, useEffect} from 'react'
import SliderButton from '../components/SliderButton/SliderButton'
import Filter from '../components/SearchFilter/Filter'
import test from '../data/test.json'
import {useNavigate, Link} from "react-router-dom"
import dropdownOption from "../data/filter/marketOption.json";
import { images } from '../constant';
import slideOption from "../data/filter/slideOption.json";
import { useWallet } from "../hooks/useWallet";
import { useProfile } from "../hooks/useProfile";
import { IoMdColorPalette } from "react-icons/io";


function NewMarketplace() {
  const { accountId, contractId, viewMethod} = useWallet()
  const { avatar } = useProfile();
  const [saleItem, setSaleItem] = useState([])
  const [sales, setSales] = useState([])
  const [nfts, setNfts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedNFT, setSelectedNFT] = useState(null);

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = (data) => {
    setIsHovering(true);
  }

  const handleMouseLeave = (data) => {
    setIsHovering(false);
  }


  //slider component
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === slideOption.length - 5 ? currentIndex : currentIndex + 5
    );
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 5);
  };

  //navigate to the respective page based on uuid

  
  const navigate = useNavigate();

  //navigate to the respective page based on uuid
  const handleNFTClick = (data) => {
    setSelectedNFT(data)
    navigate(`/newmarketplace/${data.sale_collectibles.collectible_uuid}`, { state: { data } })
  }

 const handleCollectionClick = (data) => {
    setSelectedNFT(data)
    navigate(`/collection/${data.sale_collectibles.collectible_uuid}`, { state: { data } })
  }

  const handleCreatorClick = (data) => {
    setSelectedNFT(data)
    navigate(`/profile/${data.user_public_address}`, { state: { data } })
  }

  const handleOwnerClick = (data) => {
    setSelectedNFT(data)
    navigate(`/profile/${data.user_public_address}`, { state: { data } })
  }


  //filter function
  const [filterOption, setFilterOption] = useState("");

  const filteredNft = () => {
    if (filterOption === "lowest") {
      const filteredPrice = test.result.sort((a, b) => a.onsale_current_price - b.onsale_current_price);
      return filteredPrice;

    }  else if (filterOption === "highest") {
      const filteredPrice = test.result.sort((a, b) => b.onsale_current_price - a.onsale_current_price);
      return filteredPrice;

    } else if (filterOption === "recent") {
      const filteredRecent = test.result.sort((a, b) => new Date(b.sale_collectibles.createdAt) - new Date(a.sale_collectibles.createdAt));
      return filteredRecent;

    } else if(filterOption === "oldest"){
      const filteredOldest = test.result.sort((a, b) => new Date(a.sale_collectibles.createdAt) - new Date(b.sale_collectibles.createdAt));
      return filteredOldest;

    } else {
      return test.result;
    }
  };
   

/*   const onHandleClickOption = (e) => {
    if (e.target.value === 'lowest' || 'highest' || 'recent' || 'oldest') {
      setFilterOption(e.target.value);
    }  else {
      return
    }
} */


  return (
    <div className='body-container min-h-screen'>

      
     {/*  slider button */}
     <div className="grid grid-cols-1 mx-4 lg:mx-16 min-[1920px]:mx-20 min-[1920px]:pt-20">
          <div className="flex gap-x-1 lg:gap-x-2 w-full">
            {slideOption
              .map((option, index) => (
                <button
                  key={index}
                 /*  className={`w-[18%] flex-nowrap flex-none rounded-full text-center py-3 border-2 ${
                    slideSelected === option.value
                      ? "bg-orange-600 text-white border-orange-600"
                      : "bg-white text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
                  } cursor-pointer`} */
                  className='w-1/3 rounded-sm lg:rounded-md bg-[#373737] text-white text-[8px] lg:text-xs py-2 lg:py-4 text-center hover:bg-red-600'
                  onClick={() => {
                    setSlideSelected(option.value);
                  }}
                >
                  {option.label}
                </button>
              ))}
          </div>
        </div>

      {/* <div className='text-black pl-4 pr-2 text-center border-2 bg-white border-orange-600 rounded-xl w-[200px] h-[60px]'>
        <select
            className='w-full h-full outline-none'
            onChange={(e) => setFilterOption(e.target.value)}
            value={filterOption} 
          
          >
            {dropdownOption.map((option, i) => {
              return (
                <option value={option.value} key={i} >
                    {option.label}
                </option>
              );
            })}
        </select>
      </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-3 lg:gap-x-6 gap-y-10 mt-10 lg:mt-20 mb-24">
          
          <>
              {filteredNft().map((data, i) => (
                <div 
                  key={data.collectible_uuid} 
                  className="flex flex-col md:col-span-1 bg-transparent text-white rounded-lg relative hover:border-rose-600 hover:border-[1px] hover:border-rose-600 card-background"
                  /* style={{ backgroundImage: `url(${data.sale_collectibles.ipfs_media_path})` }} */
                  onClick={() => handleNFTClick(data)}
                  onMouseEnter={() => handleMouseEnter(data)}
                  onMouseLeave={() => handleMouseLeave(data)}
              >    

                  <div className='flex items-center pb-2'>
                    <img src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectibles_user.profile_photo_path}`} className="trending-avatar-size py-2 pr-3 pl-1"/>
                    <div> 
                      <div className='text-xs lg:text-md font-semibold'>{data.sale_collectibles.collectible_name}</div>
                      <div className='text-[10px] lg:text-xs font-semibold text-red-600 block truncate w-20 lg:w-40'>{data.sale_collectibles.collectible_name}</div>
                    </div>
                  </div>

                  <div
                    className="flex flex-col md:col-span-1 relative bg-center bg-cover rounded-lg relative h-52 lg:h-64 hover:border-[1px] hover:border-rose-600 card-background" 
                    style={{ backgroundImage: `url(${data.sale_collectibles.ipfs_media_path})` }}
                    onClick={() => handleNFTClick(data)} 
                  >

                <div className='absolute bottom-0 w-full'>
                  <div className='m-1 lg:m-2 rounded-lg flex grid grid-cols-4 gap-x-2'>
                    <div className='col-span-3 w-[108%]'>
                      <div className='grid grid-cols-2 lg:py-2 divide-x opaque-bg rounded-md' >
                        <div className='flex flex-col place-items-center'>
                          <div className='pt-1 pb-2' >
                          <div className='text-[10px] lg:text-[11px] text-opensans font-semibold'>List Price</div>
                          <div className='text-[11px] lg:text-sm'>4.06 ETH</div>
                          <div className='text-[10px] lg:text-[11px] text-opensans font-semibold'>5100 usd</div>
                          </div>
                        </div>
                        <div className='flex flex-col place-items-center'>
                          <div className='pt-1 pb-2'>
                          <div className='text-[10px] lg:text-[11px] text-opensans font-semibold'>Last Sale</div>
                          <div className='text-[11px] lg:text-sm'>1000</div>
                          <div className='text-[10px] lg:text-[11px] text-opensans font-semibold'>5100 usd</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='opaque-bg flex flex-col place-items-center h-10 rounded-md w-[80%] translate-x-3'>
                    <IoMdColorPalette
                        className="text-gray-100 text-2xl mt-2"
                      />
                    </div>

                  
                    
                  </div>
                </div>

                </div>
                </div>
            ))}
          </> 
          
        </div>

      {/* footer */}
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
                                        href="/#/dashboard"
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
  )
}

export default NewMarketplace