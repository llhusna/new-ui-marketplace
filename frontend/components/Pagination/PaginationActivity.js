import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import test from '../../data/test.json'
import market from '../../data/market.json'
import moment from 'moment';
import { images } from "../../constant"
/* export const PaginationActivity = ({ postsPerPage, totalPosts, paginateFront, paginateBack, currentPage }) => {
    return (
        <div className='py-2'>
          <div>
            <p className='text-sm text-gray-700'>
             Page 
              <span className='font-medium'>{currentPage * postsPerPage - 10}</span>
              <span className='font-medium'> {totalPosts} </span>
            </p>
          </div>
          <nav className='block'></nav>
          <div>
            <nav
              className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
              aria-label='Pagination'
            >
              <a
                onClick={() => {
                  paginateBack();
                }}
                href='#'
                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              >
                <span>Previous</span>
              </a>
              <a
                onClick={() => {
                  paginateFront();
                }}
                href='#'
                className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              >
                <span>Next</span>
              </a>
            </nav>
          </div>
        </div>
      );
}
 */

const PaginationActivity = (props) => {
  const location = useLocation();
  const { data } = location.state;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.totalItems / itemsPerPage);

  const selectedTokenAddress = data.sale_collectibles.collectible_collection.tokenAddress;

  const filteredNFTs = test.result.filter(nft => nft.sale_collectibles.collectible_collection.tokenAddress === selectedTokenAddress);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = test.result.slice(startIndex, endIndex);

  return (
    <div>
     {/*  {filteredNFTs.map((data, index) => (
        <div key={index}> */}
            <table className="table-auto w-full mt-1">
                <thead className='text-[10px] lg:text-xs text-red-600 font-medium bg-[#373737]'>
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
                <tbody className='text-[10px] lg:text-xs odd: bg-[#373737] even:bg-[#242424] '>
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
                </table>
        {/* </div>
      ))} */}
        <div className='flex justify-center items-center gap-x-2 bg-[#242424] text-xs py-2 my-2 px-10 rounded-sm text-xs'>
       
        <p className="text-center">
          Page {currentPage} of {totalPages}
        </p>
        <button
          className="bg-transparent hover:bg-gray-400 font-bold py-2 px-4 rounded"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
           <img src={images.arrow} />
        </button>
        <button
          className="bg-transparent hover:bg-gray-400 font-bold py-2 px-4 rounded"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
           <img className="rotate-180" src={images.arrow} />
        </button>
      </div>
    </div>
  );
};

export default PaginationActivity;