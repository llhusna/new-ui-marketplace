import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import artwork from "../../data/landing/artwork";
import auction from "../../data/auction.json";
import AuctionCountdown from "./Countdown";

function FeaturedAuctions() {
  const [currentComponent, setCurrentComponent] = useState('A');

  useEffect(() => {
}, [currentComponent]);

  return (
    <>
    <div className=''>
      <div className='flex justify-between items-center'>
        <div className='flex gap-x-10 items-center'>
            <span className='font-bold text-xl lg:text-3xl'>Auctions</span>
            <div className='flex font-light bg-transparent border-[1px] border-[#6B6B6B] rounded-lg text-[10px] lg:text-xs'>
                <div  
                    className={`rounded-lg h-8 lg:h-10 cursor-pointer px-6 flex items-center  ${
                    currentComponent === 'A' ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent('A')}
                  >
                    Live
                </div>
                <div  
                    className={`rounded-lg h-8 lg:h-10 px-6 cursor-pointer flex items-center  ${
                    currentComponent === 'B' ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent('B')}
                  >
                    Upcoming
                </div>
                <div  
                    className={`rounded-lg h-8 lg:h-10 px-6 cursor-pointer flex items-center  ${
                    currentComponent === 'C' ? "bg-red-600" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentComponent('C')}
                  >
                    Ended
                </div>
              {/*   <button className='button-slide rounded-lg h-10 px-8' onClick={() => setCurrentComponent('A')}>Live</button>
                <button className='button-slide rounded-lg h-10 px-8' onClick={() => setCurrentComponent('B')}>Upcoming</button>
                <button className='button-slide rounded-lg h-10 px-8' onClick={() => setCurrentComponent('C')}>Ended</button> */}
            </div>
        </div>
        <span><Link className='text-[10px] lg:text-sm border-[1px] border-[#6B6B6B] px-4 py-2 rounded-lg' to="/Marketplace">View all</Link></span>
      </div>
      
      {currentComponent === 'A' || 'B' || 'C' ? 

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-3 lg:gap-x-6 gap-y-10 mt-6 lg:mt-10 mb-24">           
      {auction.result.map((data, i) => (

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
            <div className='m-2 rounded-lg opaque-bg py-1 lg:py-3'>
              <div className='flex'>
                <div className='grow pl-2 lg:pl-4 border-r-[1px]'>
                  <span className='text-[10px] lg:text-xs'>Current Bid</span>
                  <div className='text-xs text-sm'>4.06 ETH</div>
                  <div className='text-[10px] lg:text-xs font-light'>5100 usd</div>
                </div>
                <div className='grow flex-col text-center'>
                  <span className='text-[10px] lg:text-xs font-light'>Remaining Time</span>
                  <span className='flex justify-center'><AuctionCountdown data={data} /></span>
                  <span className='text-[10px] lg:text-xs font-light'>Remaining Time</span>
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
     :
     <></>

      }
    </div>
    </>
  )
}

export default FeaturedAuctions