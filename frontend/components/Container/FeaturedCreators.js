import React from 'react'
import artist from "../../data/landing/artist";
import artwork from "../../data/landing/artwork";
import { images } from '../../constant';

function FeaturedCreators() {
  return (
    <div className='pb-14'>
      <div className='font-bold text-lg lg:text-2xl'>Featured Creators</div>
      
      <div 
      className="grid grid-cols-1 gap-y-6 my-4 lg:my-10 lg:min-h-[40%]"
      /* className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-16 mx-20 lg:min-h-[40%]" */
      >

         {/*  {artist.result.map((data, index) => (
           <div key={index} className="flex flex-col md:col-span-1 bg-white text-black border-2 border-orange-600 text-center rounded-xl">

              <div>
                <img src={data.curated_info_of_user.cover_photo_path} className="w-full h-28 xl:max-h-44 rounded-t-xl"></img>
              </div>

              <div className="relative">
                <div className="bg-avatar absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <img src={data.curated_info_of_user.profile_photo_path} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 avatar-size"></img>
              </div>

              <div>           
                <div className='flex flex-col text-black mt-14'>
                      <span className='font-semibold text-md'>{data.curated_info_of_user.username}</span>
                      <span className='text-sm text-orange-600'>@{data.curated_info_of_user.username}</span>
                      <span className='mx-4 mt-2 text-xs leading-5 font-light'>{data.curated_info_of_user.about_desc}</span>
                </div> 
              </div>

              <button className='my-8 text-orange-600 bg-white rounded-full'>Follow</button>
              

            </div>
          ))} */}


        {artist.result.map((data, index) => (
          <div
            key={index}
            className={`border-[1px] border-gray-400 rounded-md`}
            style={{
              backgroundImage: data.curated_info_of_user.cover_photo_path ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.curated_info_of_user.cover_photo_path})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
              {/* <div key={index} className="border-[1px] border-gray-400 rounded-md bg-transparent"> */}

             <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 relative'>

               <div className="flex flex-col col-span-1 ml-4 mr-2 my-4 lg:my-6">
                 <div className='flex gap-2'>
                    <img src={data.curated_info_of_user.profile_photo_path} className="w-7 h-7 lg:w-10 lg:h-10"></img>
                    <div>
                        <div className='font-semibold text-xs lg:text-md'>{data.curated_info_of_user.username}</div>
                        <div className='text-[10px] lg:text-xs text-[#FF1F00]'>@{data.curated_info_of_user.username}</div>
                  </div> 
                 </div>
                  
                  <div className={`text-[9px] lg:text-[11px] font-light mt-2 lg:mt-6 border-[1px] border-[#464646] rounded-md p-2 h-[75px] lg:h-[100px] w-[140%] lg:w-[100%] ${data.curated_info_of_user.cover_photo_path ? "bg-[#3E3E3E] bg-opacity-60" : "bg-transparent"}`}>
                      {data.curated_info_of_user.about_desc}
                  </div>
                  
                  <div className='grid grid-cols-3 w-[140%] lg:w-[100%] gap-x-1 text-center font-normal mt-2 lg:mt-6'>
                      <div className={`border-[1px] border-gray-500 px-2 py-1 rounded-sm ${data.curated_info_of_user.cover_photo_path ? "bg-[#3E3E3E] bg-opacity-60" : "bg-transparent"}`}>
                        <div className='text-[9px] lg:text-[10px] text-[#FF1F00]'>Creation</div>
                        <div className='text-[10px] lg:text-[14px]'>200</div>
                      </div>

                      <div className={`border-[1px] border-gray-500 px-2 py-1 rounded-sm ${data.curated_info_of_user.cover_photo_path ? "bg-[#3E3E3E] bg-opacity-60" : "bg-transparent"}`}>
                        <div className='text-[9px] lg:text-[10px] text-[#FF1F00]'>Sales</div>
                       {/*  //check the math */}
                        <div className='text-[10px] lg:text-[14px]'>{`${(data.recent_sales_of_artist / 10 ** 18).toFixed(2)} Ⓝ`}</div>
                      </div>

                      <div className={`border-[1px] border-gray-500 px-2 py-1 rounded-sm ${data.curated_info_of_user.cover_photo_path ? "bg-[#3E3E3E] bg-opacity-60" : "bg-transparent"}`}>
                        <div className='text-[9px] lg:text-[10px] text-[#FF1F00]'>Follower</div>
                        <div className='text-[10px] lg:text-[14px] text-md'>{data.user_follow_count}</div>
                      </div>
                  </div>

                  <div className='flex justify-center text-[10px] translate-x-6 lg:translate-x-0 lg:text-xs font-light pt-2 lg:pt-8'>
                    <button className='py-2 bg-[#393D5D] px-4 lg:px-6 hover:bg-[#FF1F00]'>Follow</button>
                  </div>
                </div>

                <div className='col-span-4 my-6 md:w-[70%] lg:w-[78%] absolute right-4 top-3 lg:-top-3'>
                <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-2 lg:gap-x-5">
                    {artwork.rows.slice(0, 4).map((data, index) => (
                        <div key={index} 
                            className="flex flex-col md:col-span-1 relative bg-center bg-cover rounded-lg relative h-40 lg:h-80" 
                             style={{ backgroundImage: `url(${data.featured_collectible_info.alternative_media_path})` }}
                            /* style={{ backgroundImage: `url(${images.dummy})` }} */
                        >    
                        
                           {/*  <div className=''>
                                <div className='flex py-4 mx-2 absolute top-0 gap-x-2'>
                                <div>
                                    <img src={data.featured_collectible_info.collectibles_user.profile_photo_path} className="creator-size"/>
                                </div>

                                <div>
                                    <div className='text-lg font-semibold block w-[160px] truncate'>{data.featured_collectible_info.collectible_name}</div>
                                    <div className='text-sm'>{data.featured_collectible_info.collectibles_user.username}</div>
                                </div>
                                </div>

                                <div className='absolute bottom-0 w-full'>
                                <div className='m-2 rounded-lg opaque-bg'>
                                <div className='grid grid-cols-2 px-4 py-2 divide-x'>
                                    <div className=''>
                                    <span className='text-xs'>Mint Price</span>
                                    <div className='text-sm'>4.06 ETH</div>
                                    <div className='text-sm font-light'>5100 usd</div>
                                    </div>
                                    <div className='pl-2'>
                                    <span className='text-xs font-light'>Item Number</span>
                                    <div className='text-sm'>1000</div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div> */}
                        </div>
                    ))}
                </div>
                </div>

              {/*   <div className='col-span-1'>
                <span className='text-xs font-light'>{data.curated_info_of_user.about_desc}</span>
                </div>

                <div className='col-span-1'>
                <span className='text-xs font-light'>{data.curated_info_of_user.about_desc}</span>
                </div>

                <div className='col-span-1'>
                <span className='text-xs font-light'>{data.curated_info_of_user.about_desc}</span>
                </div>

                <div className='col-span-1'>
                <span className='text-xs font-light'>{data.curated_info_of_user.about_desc}</span>
                </div> */}

            </div>
          </div>

          
          ))}
          
          
        </div>

    </div>
  )
}

export default FeaturedCreators