import React, {useState, useEffect, useRef} from 'react'
import { images } from '../constant';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import AuctionCountdown from '../components/Container/Countdown'
import AuctionCountdownDesc from '../components/Container/CountdownDesc'
import artwork from "../data/landing/artwork";

//collectible auction info
const auction = {
  auction_end: "2023-03-02T15:29:00.000Z",
  auction_id: 32,
  auction_start: "2022-12-02T15:29:00.000Z",
  auction_status: 1,
  auction_uuid: "6fc177bc-1f95-4aa7-90f4-9b476787a47b",
  bid_increment: "10000000000000000",
  collectibleId: 220,
  currency_address: "0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb",
  currency_id: null,
  currency_symbol: "WETH",
  latest_bid: null,
  quantity: 1,
  reserved_price: "100000000000000000",
  seller_address: "0xaAF7689aeb37dF63CcB3F349c1aF636973BFcF1C",
  seller_first_name: "NEArt",
  seller_last_name: "my",
  seller_profile_photo_path: "QmRZ6ykVAYYYzk4D3auFVJqhcpYaumhMFmEHVamHEbsyA8",
  seller_username: "neart",
  starting_price: "4000000000000000",
  token_address: "0xFbE0F78D6a6339C9E7c586dD96dA9f5dFA09D773",
  token_id: 176,
  token_type: "erc721"
}

//collectible info
const info = {
  alternative_animation_media_path: null,
  alternative_media_path: "https://3six9.s3.ap-southeast-1.amazonaws.com/aurora/media/fce2ee1cd003347031e90bd0ebc9f40d",
  alternative_media_path_medium:"https://3six9.s3.ap-southeast-1.amazonaws.com/aurora/media/fce2ee1cd003347031e90bd0ebc9f40d-medium",
  alternative_media_path_og: "",
  animation_media_mime_type: "",
  collectible_category: "Collectibles",
  collectible_description: "Diver",
  collectible_favorite_count: 0,
  collectible_name: "Doolly #24",
  collectible_type: "erc721",
  collectible_uuid: "2c771431-3649-4a2a-97ad-ee3a4a3ad294",
  ipfs_animation_media_path: null,
  ipfs_hash: "QmYvxd6AvjYk4redPWmCnGpZzj7hrYxMnS8uJxk6KmJMDT",
  ipfs_media_path: "https://3six9.infura-ipfs.io/ipfs/QmRkwkxEvLWLqw1MoEhTjGR1Yo5REaDWdsggtNdPWLzxKg",
  ipfs_path: "QmYvxd6AvjYk4redPWmCnGpZzj7hrYxMnS8uJxk6KmJMDT",
}

function SingleAuction() {
  const location = useLocation();
  const { data } = location.state;
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('A');

  useEffect(() => {
    }, [currentComponent]);

    const Ref = useRef(null);


 

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 text-white pt-20">

      {/* left section */}
      <div className="flex col-span-1 justify-end relative ml-10">

        {/* modal left section */}
       {/*  { showModal ?
          <div className='flex bg-white py-10 text-black rounded-lg px-6 w-full text-[14px] divide-x lg:w-[75%] absolute z-3 bottom-0 lg:bottom-1/4' onClick={() => setShowModal(false)}>
              <div className='flex flex-col gap-y-1 pr-4'> 
                <div className='font-medium pb-4'>Starting price</div>
                <div className='text-3xl font-medium'>0.004 {auction.currency_symbol}</div>
                <div className='font-semibold'>(+Platform fee 0.0001{auction.currency_symbol})</div>
                <div className='font-semibold text-gray-500'>$5.3249</div>
              </div>
              <div className='flex flex-col px-6'>
                <div className='font-semibold'>Auction ending in</div>
                <AuctionCountdownDesc data={data}/>
              </div>
          </div>
          : null} */}

            {/* content left section */}
           <div className='flex flex-col md:w-4/5'>

              <div className='text-3xl font-medium py-2 flex gap-x-2 items-center'>
                  {data.auctions_of_collectible.collectible_name}
                  <img src={images.badge} />
              </div>

              <div className='flex justify-between'>
                  <div className='text-xs'>
                      <span>Created by</span>
                      <span className='text-red-600'> Creator Name</span>
                  </div> 
              </div>

              <div className='flex justify-between items-center mt-6 bg-[#242424] py-4 px-8 rounded-lg'>
                  <div className='text-2xl font-semibold'>AUCTION STARTS IN</div>
                  <AuctionCountdownDesc data={data}/>
              </div>

              <div className='flex justify-between items-center mt-3 border-[1px] border-red-600 bg-[#242424] py-6 px-8 rounded-lg'>
                  <div>
                      <div className='text-sm font-semibold text-opensans'>Starting Bid</div>
                        <div>
                          <span className='text-red-600 font-semibold text-2xl'>0.0035 {auction.currency_symbol}</span>
                          <span className='text-white pb-4 text-sm font-semibold'> $60.5905</span>
                        </div>
                  </div>
                  <div>
                      <button 
                      onClick={() => setShowModal(true)} 
                      className='text-sm px-9 py-2 bg-[#FF4F37]'>Place bid</button>
                  </div>
              </div>

              <div className='grid pt-2'>
                  <div className='bg-[#373737] text-xs py-6 px-10 rounded-sm'>
                    {/* {info.collectible_description} */}
                    Brought to you by Phygitals Inc, RetroGoons is a unique phygital collection that caters to both retro enthusiasts and art collectors. The collection features a series of nostalgicically-designed characters that pay homage to classic video game and pop culture icons. Each character is available as a limited edition 1/1 piece with a carefully crafted asset catalogue.
                  </div>
              </div>
          </div>
      </div>

      {/* right section */}
      <div className="">
        { !showModal ?

        <div className='flex col-span-1 justify-center relative mt-6 lg:mt-0 -translate-x-10'>
          <img className='rounded-md md:w-full lg:w-4/6 object-contain border-[1px] border-rose-600 carousel-background h-[500px]' src={data.auctions_of_collectible.ipfs_media_path}   />  
        </div>      
        : 
        <></>
         /*  <div className="flex flex-col w-full mr-10">
                      <div className='flex flex-col col-span-1'>
                      <div className='text-3xl lg:text-5xl  pb-10 pt-10 lg:pt-2 text-black font-semibold'>Place a bid</div>
                          <div className='grid md:grid-cols-4 rounded-xl border-[1px] bg-white border-gray-200 mt-2'>
                                            <div className="flex items-center md:col-span-3 justify-between">
                                                <input
                                                    name="reservedPrice"
                                                    className="h-16 w-full rounded-md pl-6 focus:outline-none"
                                                />
                                            </div>
                                            <div 
                                                className='flex flex-col md:col-span-1 w-full text-2xl font-medium text-black text-center rounded-xl'
                                                style={{ padding:"20px", boxShadow: "inset 8px 8px 4px 0px rgb(0 0 0 / 0.05)"}}>
                                                WETH
                                            </div>
                          </div>

                          <div className='text-sm pt-6 text-white'>$0.00</div>
                          <div className='text-sm pb-6 text-white'>Next minimum price is 0.014 WETH ($17.0635)</div>

                          <div className='flex flex-col md:flex-row justify-between gap-6 pt-8'>
                              <button
                                  className="w-full py-5 text-orange-600 bg-transparent ring-orange-600 ring-2 hover:bg-orange-600 hover:text-white"
                                  onClick={() =>
                                      setShowModal(false)
                                  }
                              >
                                  Place a bid
                              </button>
                              <button
                                  className="w-full py-5 text-orange-600 bg-transparent ring-orange-600 ring-2 hover:bg-orange-600 hover:text-white"
                                  onClick={() =>
                                        setShowModal(false)
                                  }
                              >
                                  Close
                              </button>
                          </div>

                          <div className='h-20 w-100 bg-neutral-300 text-white rounded-xl mt-6 font-semibold text-md grid content-center'>
                            <div className='flex justify-between mx-8'>
                              <div>Your Balance</div>
                              <div>0 WETH</div>
                            </div>
                          </div>

                          <div className='bg-white text-gray-600 w-2/5 text-center rounded-full shadow-2xl p-1 my-5'>
                            Convert ETH to WETH
                          </div>

                          <div className='pt-8 text-sm font-medium'>Bids placed in an auction cannot be withdrawn</div>
                          <div className='pt-2 text-sm font-medium text-gray-400'>Learn how our auctions work</div>          
              </div>
          </div> */
      }
      </div>
      </div>


       {/* bottom section */}
    <div className='px-10 mt-16'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-x-10 items-center'>
              <span className='font-semibold text-2xl'>Auctions</span>
          </div>
          <span><Link className='text-sm border-[1px] px-4 py-2 rounded-lg' to="/Marketplace">View all</Link></span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 mt-10 mb-24">

        {artwork.rows.slice(0, 2).map((data, index) => (
          <div key={index} 
          className="flex flex-col md:col-span-1 relative bg-center bg-cover rounded-lg relative h-40 md:h-52 lg:h-80 hover:border-[1px] hover:border-rose-600 card-background" 
          style={{ backgroundImage: `url(${data.featured_collectible_info.alternative_media_path})` }}
        >    
        
          <div className=''>
              <div className='flex py-2 mx-2 lg:py-4 lg:mx-4 absolute top-0 gap-x-2'>
                <div>
                  <img src={data.featured_collectible_info.collectibles_user.profile_photo_path} className="creator-size"/>
                </div>

                <div>
                  <div className='text-xs lg:text-lg font-semibold block w-[100px] lg:w-[160px] truncate'>{data.featured_collectible_info.collectible_name}</div>
                  <div className='text-[9px] lg:text-sm block w-[100px] lg:w-[160px] truncate'>{data.featured_collectible_info.collectibles_user.username}</div>
                </div>
              </div>

              <div className='absolute bottom-0 w-full'>
              <div className='m-1 lg:m-2 rounded-lg opaque-bg'>
                <div className='grid grid-cols-2 lg:py-2 divide-x'>
                  <div className='flex flex-col place-items-center'>
                    <div className='pt-1 pb-2' >
                    <div className='text-[10px] lg:text-xs'>Mint Price</div>
                    <div className='text-[11px] lg:text-sm'>4.06 ETH</div>
                    <div className='text-[10px] lg:text-xs font-light'>5100 usd</div>
                    </div>
                  </div>
                  <div className='flex flex-col place-items-center'>
                    <div className='pt-1 pb-2'>
                    <div className='text-[10px] lg:text-xs font-light'>Item Number</div>
                    <div className='text-[11px] lg:text-sm'>1000</div>
                    <div className='text-[10px] lg:text-xs font-light'>5100 usd</div>
                    </div>
                  </div>
              </div>
              </div>
              </div>
          </div>
       </div>
        ))}
        </div>
    </div>

    <div className='px-10'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-x-10 items-center'>
              <span className='font-semibold text-2xl'>Auctions</span>
          </div>
          <span><Link className='text-sm border-[1px] px-4 py-2 rounded-lg' to="/Marketplace">View all</Link></span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 mt-10 mb-24">

        {artwork.rows.slice(0, 1).map((data, index) => (
           <div key={index} 
           className="flex flex-col md:col-span-1 relative bg-center bg-cover rounded-lg relative h-40 md:h-52 lg:h-80 hover:border-[1px] hover:border-rose-600 card-background" 
           style={{ backgroundImage: `url(${data.featured_collectible_info.alternative_media_path})` }}
         >    
         
           <div className=''>
               <div className='flex py-2 mx-2 lg:py-4 lg:mx-4 absolute top-0 gap-x-2'>
                 <div>
                   <img src={data.featured_collectible_info.collectibles_user.profile_photo_path} className="creator-size"/>
                 </div>

                 <div>
                   <div className='text-xs lg:text-lg font-semibold block w-[100px] lg:w-[160px] truncate'>{data.featured_collectible_info.collectible_name}</div>
                   <div className='text-[9px] lg:text-sm block w-[100px] lg:w-[160px] truncate'>{data.featured_collectible_info.collectibles_user.username}</div>
                 </div>
               </div>

               <div className='absolute bottom-0 w-full'>
               <div className='m-1 lg:m-2 rounded-lg opaque-bg'>
                 <div className='grid grid-cols-2 lg:py-2 divide-x'>
                   <div className='flex flex-col place-items-center'>
                     <div className='pt-1 pb-2' >
                     <div className='text-[10px] lg:text-xs'>Mint Price</div>
                     <div className='text-[11px] lg:text-sm'>4.06 ETH</div>
                     <div className='text-[10px] lg:text-xs font-light'>5100 usd</div>
                     </div>
                   </div>
                   <div className='flex flex-col place-items-center'>
                     <div className='pt-1 pb-2'>
                     <div className='text-[10px] lg:text-xs font-light'>Item Number</div>
                     <div className='text-[11px] lg:text-sm'>1000</div>
                     <div className='text-[10px] lg:text-xs font-light'>5100 usd</div>
                     </div>
                   </div>
               </div>
               </div>
               </div>
           </div>
        </div>
        ))}
        </div>
    </div>

    <div className='px-10'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-x-10 items-center'>
              <span className='font-semibold text-2xl'>Auctions</span>
          </div>
          <span><Link className='text-sm border-[1px] px-4 py-2 rounded-lg' to="/Marketplace">View all</Link></span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 mt-10 mb-24">

        {artwork.rows.map((data, index) => (
          <div key={index} 
          className="flex flex-col md:col-span-1 relative bg-center bg-cover rounded-lg relative h-40 md:h-52 lg:h-80 hover:border-[1px] hover:border-rose-600 card-background" 
          style={{ backgroundImage: `url(${data.featured_collectible_info.alternative_media_path})` }}
        >    
        
          <div className=''>
              <div className='flex py-2 mx-2 lg:py-4 lg:mx-4 absolute top-0 gap-x-2'>
                <div>
                  <img src={data.featured_collectible_info.collectibles_user.profile_photo_path} className="creator-size"/>
                </div>

                <div>
                  <div className='text-xs lg:text-lg font-semibold block w-[100px] lg:w-[160px] truncate'>{data.featured_collectible_info.collectible_name}</div>
                  <div className='text-[9px] lg:text-sm block w-[100px] lg:w-[160px] truncate'>{data.featured_collectible_info.collectibles_user.username}</div>
                </div>
              </div>

              <div className='absolute bottom-0 w-full'>
              <div className='m-1 lg:m-2 rounded-lg opaque-bg'>
                <div className='grid grid-cols-2 lg:py-2 divide-x'>
                  <div className='flex flex-col place-items-center'>
                    <div className='pt-1 pb-2' >
                    <div className='text-[10px] lg:text-xs'>Mint Price</div>
                    <div className='text-[11px] lg:text-sm'>4.06 ETH</div>
                    <div className='text-[10px] lg:text-xs font-light'>5100 usd</div>
                    </div>
                  </div>
                  <div className='flex flex-col place-items-center'>
                    <div className='pt-1 pb-2'>
                    <div className='text-[10px] lg:text-xs font-light'>Item Number</div>
                    <div className='text-[11px] lg:text-sm'>1000</div>
                    <div className='text-[10px] lg:text-xs font-light'>5100 usd</div>
                    </div>
                  </div>
              </div>
              </div>
              </div>
          </div>
       </div>
        ))}
        </div>
    </div>
     
  

    
   </>
  )
}

export default SingleAuction