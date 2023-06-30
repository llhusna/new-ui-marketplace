import React from 'react'
import { Link } from 'react-router-dom'
import artwork from "../../data/landing/artwork";

function FeaturedCreations() {
  return (
    <>
    <div className=''>
      <div className='flex justify-between'>
        <span className='font-bold text-xl lg:text-3xl'>Featured Creations</span>
        <span className='flex items-center gap-2 border-[1px] border-[#6B6B6B] rounded-lg py-2 px-4 text-[10px] lg:text-sm'>
          <Link to="/Marketplace">View all</Link>
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 mt-4 lg:mt-10 mb-24">

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

export default FeaturedCreations