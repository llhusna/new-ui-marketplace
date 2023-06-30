import React, { useState } from 'react'
import market from '../data/market.json'
import moment from 'moment';
import { MdArrowDropDown } from "react-icons/md";

export const StatsDashboard = () => {

  const [currentComponent, setCurrentComponent] = useState(1);

  return (
    <div className='mb-32'>
         <div className='grid mt-10 lg:mx-10 px-10'>
            <div className='flex gap-x-4 lg:gap-10 text-xl lg:text-3xl font-bold items-center'>
                <div  
                    className={`rounded-full cursor-pointer  ${
                    currentComponent === 1 ? "text-red-600" : "text-white text-2xl"
                    }`}
                    onClick={() => setCurrentComponent(1)}
                  >
                    Trending
                </div>
                <div  
                    className={`rounded-full cursor-pointer  ${
                    currentComponent === 2 ? "text-red-600" : "text-white  text-2xl"
                    }`}
                    onClick={() => setCurrentComponent(2)}
                  >
                    Top
                </div>
                <div  
                    className={`rounded-full cursor-pointer  ${
                    currentComponent === 3 ? "text-red-600" : "text-white text-2xl"
                    }`}
                    onClick={() => setCurrentComponent(3)}
                  >
                    Favourite
                </div>
            </div>

            <div className='flex gap-x-2 pt-5 text-[10px] lg:text-xs items-center font-medium'>
                <div className='flex items-center gap-2 rounded-md border-[0.5px] border-[#6B6B6B] py-1 px-2'>
                    <span>Chain</span>
                    <MdArrowDropDown
                      className="transform text-gray-100 text-xs"
                    />
                </div>

                <div className='flex items-center gap-2 rounded-md border-[0.5px] border-[#6B6B6B] py-1 px-2'>
                    <span>Category</span>
                    <MdArrowDropDown
                      className="transform text-gray-100 text-xs"
                    />
                </div>


                <div className=''>
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="bg-[#373737] rounded-md w-[400px] lg:w-[700px]"
                    placeholder="Search items, collections, and accounts"
                    style={{ padding:"6px", fontSize: "11px"}}
                    onChange={(e) => searchItems(e.target.value)}
                    //use viewMethod nft smart contract
                />
                </div>
            </div>

            <div className='pt-10'>
                {currentComponent === 1 && 
                <>
                  <table className="table-auto w-full">
                    <thead className='text-[10px] lg:text-xs font-medium'>
                        <tr className="w-full border-b-[1px] border-gray-600">
                            <th scope="col" className="py-3"></th>
                            <th scope="col" className="py-3 text-left">Collection</th>
                            <th scope="col" className="py-3">Volume</th>
                            <th scope="col" className="py-3">Floor Price</th>
                            <th scope="col" className="py-3">QTY</th>
                            <th scope="col" className="py-3">FROM</th>
                            <th scope="col" className="py-3">TO</th>
                            <th scope="col" className="py-3 text-right">DATE</th>
                        </tr>
                    </thead>
                    {market.data.result.map((data, i) => (
                    <tbody key={i} className='text-[10px] lg:text-xs'>
                        <tr className="w-full pt-2">
                            <td scope="col" className="pr-4 whitespace-nowrap">{i}</td>
                            <td scope="col">
                                <div className='flex gap-x-2 items-center my-1'>
                                <span><img className="trending-avatar-size" src={data.transaction_of_collectible.ipfs_media_path}/></span>
                                <span className='block truncate'>{data.transaction_of_collectible.collectible_name}</span>
                                </div>
                            </td>
                            
                            <td scope="col" className="whitespace-nowrap text-center">{Number((Math.round(data.unit_price / 1000000000000)).toFixed(3))}</td>

                            <td scope="col" className="px-10 whitespace-nowrap text-center">
                                <div>{data.action_type}</div>
                                <div className='text-red-600'>+32%</div>
                            </td>
                            <td scope="col" className="px-8 whitespace-nowrap text-center">{Number((Math.round(data.unit_price / 1000000000000)).toFixed(3))}</td>
                            <td scope="col" className="px-8 whitespace-nowrap text-center">{data.action_type}</td>
                            <td scope="col" className="px-8 whitespace-nowrap text-center">{data.action_type}</td>
                            <td scope="col" className="whitespace-nowrap text-right">{moment(data.activity_datetime).fromNow()}</td>
                        </tr>
                    </tbody>
                    ))}
                  </table>
                </>
                }
                {currentComponent === 2 && <></>}
                {currentComponent === 3 && <></> }
            </div>
        </div>
    </div>
  )
}
