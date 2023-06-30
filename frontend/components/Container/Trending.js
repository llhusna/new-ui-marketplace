import React, {useState, useEffect} from 'react'
import market from '../../data/market.json'
import { MdArrowDropDown } from "react-icons/md";

export const Trending = () => {
  const [currentComponent, setCurrentComponent] = useState(1);
  useEffect(() => {}, [currentComponent]);

  return (
    <div className='text-white my-20'>
     <div className='flex justify-between'>
         <div className='flex text-2xl font-semibold'>
                <div  
                    className={`rounded-full pr-4 cursor-pointer  ${
                    currentComponent === 1 ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => setCurrentComponent(1)}
                  >
                    Trending
                </div>
                <div 
                 className={`rounded-full px-4 cursor-pointer  ${
                    currentComponent === 2 ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => setCurrentComponent(2)}
                  >
                    Top
                </div>
                <div  
                    className={`rounded-full px-4 cursor-pointer  ${
                    currentComponent === 3 ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => setCurrentComponent(3)}
                   >
                    Favourite
                </div>
        </div>

        <div className='flex gap-x-2 text-xs text-center font-light mt-6'>
              <div className='flex items-center gap-2 border-[1px] border-[#6B6B6B] rounded-lg p-2'>
                <span>24 hours</span>
                    <MdArrowDropDown
                      className="transform text-gray-100 text-xs"
                    />
                </div>
                <div className='flex items-center gap-2 border-[1px] border-[#6B6B6B] rounded-lg p-2'>
                <span>Chain</span>
                    <MdArrowDropDown
                      className="transform text-gray-100 text-xs"
                    />
                </div>
                <div className='flex items-center gap-2 border-[1px] border-[#6B6B6B] rounded-lg p-2'>
                <span>View All</span>
                    <MdArrowDropDown
                      className="transform text-gray-100 text-xs"
                    />
                </div>
        </div>
    </div>
    
    {currentComponent === 1 && 
    <>
    <table className="table-auto w-full">
    <thead className='text-sm'>
        <tr>
            <th scope="col" className="flex justify-start font-light pb-2">Collection</th>
            <th scope="col" className="font-light pb-2">Volume</th>
            <th scope="col" className="text-right font-light pb-2">Floor Price</th>
        </tr>
    </thead>
    {market.data.result.map((data, i) => (
    <tbody  key={i} className='text-xs font-light'>
        <tr className="w-full">
            <td scope="col">
                <div className='flex gap-x-2 items-center'>
                <span><img className="trending-avatar-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/></span>
                <span className='block truncate'>{data.transaction_of_collectible.collectible_name}</span>
                </div>
            </td>
            <td scope="col" className="md:px-16 lg:px-28 whitespace-nowrap text-center">{data.action_type}</td>
            
            <td scope="col" className="whitespace-nowrap text-right">{Number((Math.round(data.unit_price / 1000000000000)).toFixed(3))}</td>
            {/* <td><p className='truncate'>{data.activity_by}</p></td> */}
            <td scope="col" className='flex gap-x-2 lg:gap-x-6 py-2 justify-end'>
                <span><img className="block trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/></span>
                <span><img className="block trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/></span>
                <span><img className="block trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/></span>
                <span><img className="block trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/></span>
                <span><img className="block trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/></span>
                <span><img className="block trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/></span>
            </td>
        </tr>
    </tbody>
    ))}
    </table>
    </>
    }

    {currentComponent === 2 && <></>}
    {currentComponent === 3 && <></> }

    </div>
  )
}
