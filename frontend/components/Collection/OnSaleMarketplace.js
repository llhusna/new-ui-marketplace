import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import test from "../../data/test.json";
import { IoMdColorPalette } from "react-icons/io";

export const OnSaleCollection = (props) => {
  const location = useLocation();
  const { data } = location.state;

  const selectedTokenAddress =
    data.sale_collectibles.collectible_collection.tokenAddress;

  const filteredNFTs = test.result.filter(
    (nft) =>
      nft.sale_collectibles.collectible_collection.tokenAddress ===
      selectedTokenAddress
  );

  const handleCreatorClick = (data) => {
    setSelectedNFT(data);
    navigate(`/profile/${data.user_public_address}`, { state: { data } });
  };

  const handleOwnerClick = (data) => {
    setSelectedNFT(data);
    navigate(`/profile/${data.user_public_address}`, { state: { data } });
  };

  return (
    <>
      <div>
            {/* {filteredNFTs.map((data, key) => (
              <div
                key={key}
                className="flex flex-col md:col-span-1 bg-transparent text-white rounded-lg relative hover:border-rose-600 hover:border-[1px] hover:border-rose-600 card-background"
              >
                <div>
                  <img
                    className="object-cover object-center rounded-lg"
                    src={data.sale_collectibles.ipfs_media_path}
                  />
                </div>
                <div className="text-lg font-semibold py-4">
                  {data.sale_collectibles.collectible_name}
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-sm text-gray-400">
                      {data.sale_collectibles.collectible_type.toUpperCase()}
                    </span>
                    <p className="text-sm font-semibold">
                      Edition {data.quantity} /{" "}
                      {data.sale_collectibles.noOfCopies}
                    </p>
                  </div>
                  <div className="flex">
                    <img
                      onClick={() => handleCreatorClick(data)}
                      src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectibles_user.profile_photo_path}`}
                      className="market1-size z-20 cursor-pointer"
                    />
                    <img
                      onClick={() => handleOwnerClick(data)}
                      src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectibles_user.profile_photo_path}`}
                      className="market2-size z-30 cursor-pointer"
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <p className="text-sm text-gray-400">List Price</p>
                <span className="text-md font-semibold">{`${
                  data.onsale_current_price / 10 ** 18
                } Ⓝ`}</span>
              </div>
            ))} */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-3 lg:gap-x-6 gap-y-10 mx-6 mb-24">
          
          <>
              {filteredNFTs.map((data, i) => (
                <div 
                  key={data.collectible_uuid} 
                  className="flex flex-col md:col-span-1 bg-transparent text-white rounded-lg relative hover:border-rose-600 hover:border-[1px] hover:border-rose-600 card-background"
                  /* style={{ backgroundImage: `url(${data.sale_collectibles.ipfs_media_path})` }} */
                 /*  onClick={() => handleNFTClick(data)}
                  onMouseEnter={() => handleMouseEnter(data)}
                  onMouseLeave={() => handleMouseLeave(data)} */
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
      </div>
    </>
  );
};
