import React, { useState, useEffect } from "react";
import { useProfile } from "../../hooks/useProfile";
import { useWallet } from "../../hooks/useWallet";
import { images } from "../../constant";

export const Profile = () => {
  const { accountId, viewMethod } = useWallet();
  
  const  { profile } = useProfile()

    const [created, setCreated] = useState(0)
    const [sold, setSold] = useState(0)
    const [revenue, setRevenue] = useState(0)

  const getInnerProfile = async () => {
    const res = await viewMethod(
      process.env.CONTRACT_NAME,
      "nft_tokens_for_owner",
      { account_id: accountId }
    );
    setCreated(res);
  };

    useEffect(() => {
      if (accountId) {
        getInnerProfile()
      }
    }, [accountId, created])

  /*   const [userNFT, setUserNFT] = useState([])

    const getNFTProfile = async () => {
      const res = await viewMethod(process.env.CONTRACT_MARKETPLACE_NAME, 'get_supply_by_owner', { nft_contract_id: accountId})
      setUserNFT(res)
    }

    useEffect(() => {
      if (accountId) {
        getNFTProfile()
      }
    }, [accountId, userNFT]) */


  /*  //returns the number of sales for a given account
    const getAmountSold = async () => {
      const res = await viewMethod(process.env.CONTRACT_MARKETPLACE_NAME, 'get_supply_by_owner_id', { account_id: accountId})
      setSold(res)
    }

    useEffect(() => {
      if (accountId) {
        getAmountSold()
      }
    }, [accountId, sold, getAmountSold]) */

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-4 relative gap-8 mt-2 w-full md:w-[90%]">
      <div className="flex flex-col md:col-span-2 w-[80%] rounded-md text-white mx-6 md:mx-0">
        <div className="grid grid-cols-2 relative gap-4">
          <div className="bg-[#191717] p-6 rounded-xl text-center lg:h-44">
            <div className="text-sm lg:text-md">
              Artwork
              <br />
              Created
            </div>
            <div className="pt-4 text-3xl font-semibold">{created.length}</div>
          </div>
          <div className="bg-[#191717] p-6 rounded-xl text-center lg:h-44">
            <div className="text-sm lg:text-md">
              Revenue
              <br />
              Earned
            </div>
            <div className="pt-4 text-3xl font-semibold">0</div>
          </div>
        </div>

        <div class="grid grid-cols-2 relative gap-4 pt-4">
          <div className="bg-[#191717] p-6 rounded-xl text-center lg:h-44">
            <div className="text-sm lg:text-md">
              Creations
              <br />
              Sold
            </div>
            <div className="pt-4 text-3xl font-semibold">0</div>
          </div>
          <div className="bg-[#191717] p-6 rounded-xl text-center lg:h-44">
            <span className="text-sm lg:text-md">
              Followers
            </span>
            <div className="pt-4 text-3xl font-semibold">0</div>
          </div>
        </div>
      </div>

          <div className="flex flex-col md:col-span-2 -translate-x-20 w-[110%] mx-6 md:mx-0">
            <div className=''>
                <div className="font-medium">About</div>
                <div className="text-xs lg:text-xs font-light pt-6">
                  {profile.bio}
                  <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</span>
                </div>

                <div className="mt-10 font-medium">Contact Me</div>
                  <div>{profile.email}</div>
                  <div className="flex mb-10 gap-x-4 justify-start">
                    <div className="flex justify-center pt-2">
                      <div className="community-icon-div mr-3">
                        <a
                        href="https://twitter.com/3six9OFFICIAL"
                        target="_blank"
                        className="pl-0 pr-0"
                        ><img
                            alt="twitter"
                            src={images.twitter}
                            className="community-icon mr-1"
                        /></a >
                        </div>
                        <div className="community-icon-div mr-3">
                        <a
                        href="https://twitter.com/3six9OFFICIAL"
                        target="_blank"
                        className="pl-0 pr-0"
                        ><img
                            alt="twitter"
                            src={images.twitter}
                            className="community-icon mr-1"
                        /></a >
                        </div>
                        <div className="community-icon-div mr-3">
                        <a
                            href="https://discord.gg/86uzNjMgPK"
                            target="_blank"
                            className="pl-0 pr-0">
                            <img
                                alt="discord"
                                src={images.discord}
                                className="community-icon mr-1"
                            />
                        </a >
                        </div>
                    </div>
                  </div>
                </div>
          </div>
      </div>

     {/*  <div className='grid grid-cols-1 md:grid-cols-3 relative gap-8 mt-20 mx-4 w-full md:w-[90%]'>
      {userNFT.length > 0 ? 
      userNFT.map((val,key) => {
        return (
          <div key={key} className="flex flex-col md:col-span-1 bg-gray-100 text-black border-2 border-orange-600 p-4 rounded-lg relative">
              <div>      
                <img className="object-cover object-center h-60 w-96 rounded-lg" src={val.metadata.media} />
              </div>

              <div className='text-[10px] font-semibold py-4'>{val.metadata.title}</div>
              
              
              <div className='flex gap-12'>
                  <div className=''>
                      <p className="text-sm text-gray-500">List Price</p>
                      <span className="text-sm font-semibold text-orange-600">0.041 ETH </span>
                  </div>
                  <div className=''>
                      <p className="text-sm text-gray-500">Token type</p>
                      <span className="text-sm font-semibold text-black">Edition 1 / 1</span>
                  </div>
              </div>
          </div>
         )})
         :
         <>
          <></>
        </>
        }
      </div> */}
    </>
  )
}
