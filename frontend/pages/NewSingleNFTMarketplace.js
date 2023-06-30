import React, {useState, useEffect} from 'react'
import { images } from '../constant';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import market from '../data/market.json'
import artwork from "../data/landing/artwork";
import moment from 'moment';
import PaginationActivity from '../components/Pagination/PaginationActivity';
import { IoMdColorPalette } from "react-icons/io";

export const NewSingleNFTMarketplace = (props) => {

    const location = useLocation();
    const { data } = location.state;
    const [currentComponent, setCurrentComponent] = useState('A');
    const [showModal, setShowModal] = useState(false);
    const [selectedNFT, setSelectedNFT] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        }, [currentComponent]);

    const handleCollectionClick = (data) => {
    setSelectedNFT(data);
    navigate(`/newcollection/${data.sale_collectibles.collectible_uuid}`, {
      state: { data },
    });
    };


  return (
    <>
    <div className='mx-6 lg:mx-36'>
        <div class="grid grid-cols-1 md:grid-cols-2 mx-4 content-center text-white pt-10">

            {showModal ? (
            <>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setShowModal(false)}
                    >
                    </div>
                    <div className="flex justify-center items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className="mt-3 flex justify-center">
                                <div className="mt-10">
                                    <h4 className="text-3xl text-center font-bold text-gray-800">
                                        Checkout
                                    </h4>
                                    <p className="mt-2 text-center text-[16px] leading-relaxed text-gray-400">
                                        You are about to purchase CAT 1010 from<br/>
                                        0x2dc7fec828327542b7b6d67ef277660cab329c11
                                    </p>
                                    <div className='flex justify-between text-black text-sm py-4 mt-4'>
                                        <span>List price</span><span className='text-gray-400'>abc</span>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between text-black text-sm pt-2'>
                                        <span>Your Balance</span><span className='text-gray-400'>abc</span>
                                    </div>
                                    <div className='flex justify-between text-black text-sm pt-2'>
                                        <span>Service Fee (2.5%)</span><span className='text-gray-400'>abc</span>
                                    </div>
                                    <div className='flex justify-between text-black text-sm pt-2'>
                                        <span>You will pay</span><span className='text-gray-400'>abc</span>
                                    </div>
                                
                                    <div className="items-center gap-2 mt-3 sm:flex">
                                        <button
                                            className="w-full mt-2 p-2.5 flex-1 text-black bg-transparent hover:ring-offset-2 hover:ring-orange-600 hover:ring-2"
                                            onClick={() =>
                                                setShowModal(false)
                                            }
                                        >
                                            Proceed to payment
                                        </button>
                                    </div>
                                    <div className="items-center gap-2 mt-3 mb-10 sm:flex">
                                        <button
                                            className="w-full my-2 p-2.5 flex-1 text-black bg-transparent hover:ring-offset-2 hover:ring-orange-600 hover:ring-2"
                                            onClick={() =>
                                                setShowModal(false)
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>              
            ) : null}

                <div className="flex flex-col md:col-span-1 mr-6 lg:mr-10">
                    {/* <div className='flex gap-x-4'>
                        <span><img src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectibles_user.profile_photo_path}`} className="creator-size"/></span>
                        <span className='font-extrabold pt-2 text-gray-400'>{data.sale_collectibles.collectible_collection.tokenAddress}</span>
                    </div> */}
                    <div>
                        <div className='mt-6 lg:mt-0'>
                            <img className='rounded-md object-contain border-[1px] border-rose-600 carousel-background' src={data.sale_collectibles.ipfs_media_path}  />  
                        </div>      
                    </div>
                </div>

                <div class="flex md:col-span-1 justify-center">
                    <div className='flex flex-col w-full'>
                        <div className='text-xl lg:text-2xl font-medium py-2 flex gap-x-2 items-center'>
                            {data.sale_collectibles.collectible_name}
                            <img src={images.badge} />
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-[10px] lg:text-xs'>
                                <span>Created by</span>
                                <span className='text-red-600'>Creator Name</span>
                            </div> 
                            
                            <div className='flex gap-x-4'>
                            <div className='w-4 lg:w-6'><img src={images.beforeliked} /></div>
                            <div className='w-6 lg:w-8'><img src={images.share} /></div>
                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-6 border-[1px] border-red-600 bg-[#242424] py-3 lg:py-4 px-8 rounded-lg'>
                            <div className=''>
                                <div className='text-xs lg:text-md'>Current Price</div>
                                <div className='text-red-600 font-semibold text-xl lg:text-2xl'>0.005 ETH</div>
                                <div className='text-white text-[10px] lg:text-sm'> $60.5905</div>
                            </div>
                            <div>
                                <button className='text-xs px-9 py-2'>Buy Now</button>
                            </div>
                        </div>

                        <div className='text-[10px] lg:text-xs h-8 lg:h-10 mt-4 border-[1px] border-red-600 bg-[#242424] rounded-md'>
                            <button  
                                className={`rounded-lg h-8 lg:h-10 cursor-pointer px-6 ${
                                currentComponent === 'A' ? "bg-red-600" : "bg-transparent"
                                }`}
                                onClick={() => setCurrentComponent('A')}
                                >
                                  Description
                            </button>
                            <button
                                className={`rounded-lg h-8 lg:h-10 cursor-pointer px-6 ${
                                currentComponent === 'B' ? "bg-red-600" : "bg-transparent"
                                }`}
                                onClick={() => setCurrentComponent('B')}
                                >
                                  Attributes
                            </button>
                            <button 
                                className={`rounded-lg h-8 lg:h-10 cursor-pointer px-6 ${
                                    currentComponent === 'C' ? "bg-red-600" : "bg-transparent"
                                    }`}
                                onClick={() => setCurrentComponent('C')}
                                >
                                  Owners
                            </button>
                            <button 
                                className={`rounded-lg h-8 lg:h-10 cursor-pointer px-6 ${
                                    currentComponent === 'D' ? "bg-red-600" : "bg-transparent"
                                    }`}
                                onClick={() => setCurrentComponent('D')}
                                >
                                  Details
                            </button>
                            <button 
                                className={`rounded-lg h-8 lg:h-10 cursor-pointer px-6 ${
                                    currentComponent === 'E' ? "bg-red-600" : "bg-transparent"
                                    }`}
                                onClick={() => setCurrentComponent('E')}
                                >
                                  Price History
                            </button>
                        </div>

                        <div className='py-2 text-white'>
                        {/* Description */}
                            {currentComponent === 'A' ? 
                                <div className='grid'>
                                    <div className='bg-[#373737] text-[10px] lg:text-xs py-6 px-4 lg:px-10 rounded-sm'>
                                    Brought to you by Phygitals Inc, RetroGoons is a unique phygital collection that caters to both retro enthusiasts and art collectors. The collection features a series of nostalgicically-designed characters that pay homage to classic video game and pop culture icons. Each character is available as a limited edition 1/1 piece with a carefully crafted asset catalogue.
                                    </div>
                                   {/*  <div className='flex gap-x-4'>
                                        <span><img src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectibles_user.profile_photo_path}`} className="creator-size"/></span>
                                        <span>Owner
                                            <div className='font-extrabold'>{data.sale_collectibles.collectibles_user.fullName}</div>
                                        </span>
                                    </div>
                                    <div className='flex gap-x-4'>
                                        <span><img src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectibles_user.profile_photo_path}`} className="creator-size"/></span>
                                        <span>Creator
                                                <div className='font-extrabold'>{data.sale_collectibles.collectibles_user.fullName}</div>
                                        </span>
                                    </div>
                                    <div className='bg-orange-100 px-10 py-4 text-gray-500 font-medium rounded-lg'>20.00% of sales will be paid to the original artist</div>
                                    <div className='flex gap-x-4'>
                                        <span><img src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectible_collection.tokenLogo}`} className="creator-size"/></span>
                                        <span>Collection (ERC721)
                                                <div className='font-extrabold'>{data.sale_collectibles.collectible_collection.tokenName}</div>
                                        </span>
                                    </div>  */}
                                </div>
                            : null}
                            
                            {/* Attributes */}
                            {currentComponent === 'B' ? 
                                <div className='grid'>
                                     <div className='bg-[#373737] text-xs py-6 px-10 rounded-sm'>
                                        <div className='grid grid-cols-4 flex gap-x-2'>
                                            <div className='text-center py-2 bg-[#5C332C] border-[1px] border-[#FF1F00] rounded-md'>
                                                <div className='text-[#FF1F00]'>ATTRIBUTE</div>
                                                <div>Level</div>
                                            </div>
                                            <div className='text-center py-2 bg-[#5C332C] border-[1px] border-[#FF1F00] rounded-md'>
                                                <div className='text-[#FF1F00]'>ATTRIBUTE</div>
                                                <div>Level</div>
                                            </div>
                                            <div className='text-center py-2 bg-[#5C332C] border-[1px] border-[#FF1F00] rounded-md'>
                                                <div className='text-[#FF1F00]'>ATTRIBUTE</div>
                                                <div>Level</div>
                                            </div>
                                            <div className='text-center py-2 bg-[#5C332C] border-[1px] border-[#FF1F00] rounded-md'>
                                                <div className='text-[#FF1F00]'>ATTRIBUTE</div>
                                                <div>Level</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    {/* <div className='flex gap-x-4'>
                                        <span><img src={data.sale_collectibles.collectibles_user.profile_photo_path} className="creator-size"/></span>
                                        <span>Is selling for 0.001 ETH
                                            <div className='font-extrabold'>{data.sale_collectibles.collectibles_user.fullName}</div>
                                        </span>
                                    </div> */}
                                </div>
                            : null}

                            {/* Owner */}
                            {currentComponent === 'C' ? 
                                    <div className='flex flex-col bg-[#373737] text-xs py-6 px-10 rounded-sm gap-y-6'>
                                    <div className='flex gap-x-4 items-center'>
                                        <span><img src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectibles_user.profile_photo_path}`} className="creator-size"/></span>
                                        <span>Owner
                                            <div className='font-extrabold'>{data.sale_collectibles.collectibles_user.fullName}</div>
                                        </span>
                                    </div>
                                    <div className='flex gap-x-4 items-center'>
                                        <span><img src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectibles_user.profile_photo_path}`} className="creator-size"/></span>
                                        <span>Creator
                                                <div className='font-extrabold'>{data.sale_collectibles.collectibles_user.fullName}</div>
                                        </span>
                                    </div>
                                    <div className='flex gap-x-4 items-center'>
                                        <span>
                                            <img 
                                                src={`https://ipfs.io/ipfs/${data.sale_collectibles.collectible_collection.tokenLogo}`} 
                                                className="creator-size"
                                                onClick={() => handleCollectionClick(data)}
                                            />
                                        </span>
                                        <span>Collection (ERC721)
                                                <div className='font-extrabold'>{data.sale_collectibles.collectible_collection.tokenName}</div>
                                        </span>
                                    </div> 
                                    </div>
                            : null}

                            {/* Details*/}
                            {currentComponent === 'D' ? 
                               <div className='grid'>
                               <div className='flex flex-col gap-y-6 bg-[#373737] text-xs py-6 px-10 rounded-sm'>
                               <div className='flex justify-between'>
                                   <span>Contract Address</span>
                                   <div className='font-extrabold'>{data.sale_collectibles.collectibles_user.fullName}</div>
                               </div>
                               <div className='flex justify-between'>
                                   <span>Token Id</span>
                                   <div className='font-extrabold'>{data.sale_collectibles.collectibles_user.fullName}</div>
                               </div>
                               <div className='flex justify-between'>
                                   <span>Token Standard</span>
                                   <div className='font-extrabold'>{data.sale_collectibles.collectibles_user.fullName}</div>
                               </div>
                               <div className='flex justify-between'>
                                   <span>Chain</span>
                                   <div className='font-extrabold'>{data.sale_collectibles.collectibles_user.fullName}</div>
                               </div>
                               <div className='flex justify-between'>
                                   <span>Collection (ERC721)</span>
                                   <div className='font-extrabold'>{data.sale_collectibles.collectible_collection.tokenName}</div>
                               </div> 
                               </div>
                               </div>
                            : null}
                        </div>

                        {currentComponent === 'E' ? 
                                <div className='grid'>
                                    <div className='bg-[#373737] text-xs py-6 px-10 rounded-sm'>
                                        Graph
                                    </div>
                                </div>
                            : null}

                        {/* <div onClick={() => setShowModal(true)} className='bg-white py-2 text-black rounded-lg text-center font-semibold'>Buy 1 for 0.001 ETH</div> */}
                    </div>
                </div>

        </div>


    {/* Description part */}
        <div className="grid grid-cols-1 md:grid-cols-1 mx-4 text-white pt-20 pb-10">
            <div className='flex items-center gap-x-2 bg-[#242424] text-xs py-2 px-4 rounded-sm text-xs'>
                <span><img src={images.pulse} /></span>
                <span>CREATION ACTIVITIES</span>
            </div>
            
            {/* <table className="table-auto w-full mt-3">
                <thead className='text-xs text-red-600 font-medium bg-[#373737]'>
                    <tr>
                        <th scope="col" className="py-2">EVENT</th>
                        <th scope="col" className="py-2">PRICE</th>
                        <th scope="col" className="py-2">QUANTITY</th>
                        <th scope="col" className="py-2">FROM</th>
                        <th scope="col" className="py-2">TO</th>
                        <th scope="col" className="py-2">DATE</th>
                    </tr>
                </thead>
                {market.data.result.map((data) => (
                <tbody className='text-xs odd: bg-[#373737] even:bg-[#242424] '>
                    <tr className="w-full text-center">
                        <td scope="col" className="whitespace-nowrap py-2">{data.action_type}</td>
                        <td scope="col" className="whitespace-nowrap">{data.quantity}</td>
                        <td scope="col" className="whitespace-nowrap">{Number((Math.round(data.unit_price / 1000000000000)).toFixed(3))}</td>
                      
                        <td scope="col" className='w-[64px] lg:w-[100px] truncate'>{data.activity_by}</td>
                        <td scope="col" className=" whitespace-nowrap">{data.transfer_to_username}</td>
                        <td scope="col" className="whitespace-nowrap">{moment(data.activity_datetime).fromNow()}</td>
                    </tr>
                </tbody>
                ))}
                </table> */}

       
                <PaginationActivity />

        </div>


        <div className="grid grid-cols-1 md:grid-cols-1 mx-4 text-white pb-32">
            <div className='flex items-center gap-x-2 bg-[#242424] text-xs py-3 px-4 rounded-sm text-xs'>
                <span><img src={images.shapes} className="w-4"/></span>
                <span>MORE FROM THIS CREATOR</span>
            </div>
            <div className='my-2 py-4 px-4 lg:px-8 bg-[#373737]'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4">
                    {artwork.rows.slice(0, 4).map((data, index) => (
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
                                 <div className='text-[9px] lg:text-sm'>{data.featured_collectible_info.collectibles_user.username}</div>
                               </div>
                             </div>
             
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
                </div>
                
                <div className='pt-6 flex justify-center text-xs lg:text-xs'>
                <button className='px-6 py-3 bg-black'>View All Creations</button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
