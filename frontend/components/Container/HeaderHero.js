import React, {useState, useEffect} from 'react'
import { images } from '../../constant'
import {useNavigate} from 'react-router-dom'
import { useWallet } from '../../hooks/useWallet';
import artwork from "../../data/landing/artwork";
import { Carousel } from '3d-react-carousal';


function HeaderHero() {
  const navigate = useNavigate();

  const {accountId, signIn} = useWallet();
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    if(accountId) { console.log(accountId); setLoaded(true)}
  }, [accountId, loaded])


  const handleClickCreate = async () => {
    let signedIn = false;
    if (!accountId) {
      signedIn = await signIn(process.env.CONTRACT_NAME || "seed.bonebon.testnet");
    } 
    navigate("/Create");
    
    if (signedIn || accountId) {
      navigate("/Create");
    }
  }

  

  //slides carousel hardcoded
  const slides =  [
    <div className='border-[1px] border-rose-600 carousel-background md:h-[30vh] md:[60vw] lg:h-[65vh] lg:w-[50vw] min-[1920px]:h-[45vh] min-[1920px]:w-[50vw]'>
    <div className='flex h-full'>
      <div className='flex-col p-6 w-[40%] bg-black'>
       
          <div className='grid gap-x-4 font-medium lg:py-4 text-[10px] lg:text-xs w-4/5 '>
        
            <div className='grid grid-cols-4 gap-x-2'>
            <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
              <div className=''>14</div>
              <div className='text-[8px] lg:text-xs font-semibold'>DAYS</div>
            </div>
              <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
                <div className=''>12</div>
                <div className='text-[8px] lg:text-xs font-semibold'>HRS</div>
              </div>
              <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
                <div className=''>20</div>
                <div className='text-[8px] lg:text-xs font-semibold'>MINS</div>
              </div>
              <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
                <div className=''>05</div>
                <div className='text-[8px] lg:text-xs font-semibold'>SECS</div>
              </div>
            </div>
          </div>
       
          <div className='flex pt-6 gap-x-2 items-center font-bold text-lg lg:text-3xl'>
            <span>SPACE NEON</span>
            <span><img src={images.badge} /></span>
          </div>
        <div className='text-md text-xs'>By Austronouts</div>
        <div className='pt-4 lg:pt-8 text-[9px] lg:text-xs'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </div>
        <button className='text-[10px] lg:text-xs mt-4 lg:mt-12 py-1 lg:py-2'>Go to Launchpad</button>
      </div>
      <div className='flex w-[60%]'>
        <img className='object-cover' src={images.carousel} alt="6" />
      </div>
    </div>
    </div>,

<div className='border-[1px] border-rose-600 carousel-background md:h-[30vh] md:[60vw] lg:h-[65vh] lg:w-[50vw] min-[1920px]:h-[45vh] min-[1920px]:w-[50vw]'>
<div className='flex h-full'>
  <div className='flex-col p-6 w-[40%] bg-black'>
   
      <div className='grid gap-x-4 font-medium lg:py-4 text-[10px] lg:text-xs w-4/5 '>
    
        <div className='grid grid-cols-4 gap-x-2'>
        <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
          <div className=''>14</div>
          <div className='text-[8px] lg:text-xs font-semibold'>DAYS</div>
        </div>
          <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
            <div className=''>12</div>
            <div className='text-[8px] lg:text-xs font-semibold'>HRS</div>
          </div>
          <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
            <div className=''>20</div>
            <div className='text-[8px] lg:text-xs font-semibold'>MINS</div>
          </div>
          <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
            <div className=''>05</div>
            <div className='text-[8px] lg:text-xs font-semibold'>SECS</div>
          </div>
        </div>
      </div>
   
      <div className='flex pt-6 gap-x-2 items-center font-bold text-lg lg:text-3xl'>
        <span>SPACE NEON</span>
        <span><img src={images.badge} /></span>
      </div>
    <div className='text-md text-xs'>By Austronouts</div>
    <div className='pt-4 lg:pt-8 text-[9px] lg:text-xs'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </div>
    <button className='text-[10px] lg:text-xs mt-4 lg:mt-12 py-1 lg:py-2'>Go to Launchpad</button>
  </div>
  <div className='flex w-[60%]'>
    <img className='object-cover' src="https://picsum.photos/800/300/?random" alt="6" />
  </div>
</div>
</div>,

<div className='border-[1px] border-rose-600 carousel-background md:h-[30vh] md:[60vw] lg:h-[65vh] lg:w-[50vw] min-[1920px]:h-[45vh] min-[1920px]:w-[50vw]'>
    <div className='flex h-full'>
      <div className='flex-col p-6 w-[40%] bg-black'>
       
          <div className='grid gap-x-4 font-medium lg:py-4 text-[10px] lg:text-xs w-4/5 '>
        
            <div className='grid grid-cols-4 gap-x-2'>
            <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
              <div className=''>14</div>
              <div className='text-[8px] lg:text-xs font-semibold'>DAYS</div>
            </div>
              <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
                <div className=''>12</div>
                <div className='text-[8px] lg:text-xs font-semibold'>HRS</div>
              </div>
              <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
                <div className=''>20</div>
                <div className='text-[8px] lg:text-xs font-semibold'>MINS</div>
              </div>
              <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md'>
                <div className=''>05</div>
                <div className='text-[8px] lg:text-xs font-semibold'>SECS</div>
              </div>
            </div>
          </div>
       
          <div className='flex pt-6 gap-x-2 items-center font-bold text-lg lg:text-3xl'>
            <span>SPACE NEON</span>
            <span><img src={images.badge} /></span>
          </div>
        <div className='text-md text-xs'>By Austronouts</div>
        <div className='pt-4 lg:pt-8 text-[9px] lg:text-xs'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </div>
        <button className='text-[10px] lg:text-xs mt-4 lg:mt-12 py-1 lg:py-2'>Go to Launchpad</button>
      </div>
      <div className='flex w-[60%]'>
        <img className='object-cover' src="https://picsum.photos/800/300/?random" alt="6" />
      </div>
    </div>
    </div>,

   
  ];

  <img className='object-cover' src="https://picsum.photos/800/302/?random" alt="6" />

/*   <img  src="https://picsum.photos/800/303/?random" alt="4" className='border-[1px] border-rose-600 carousel-background md:h-[30vh] md:[60vw] lg:h-[65vh] lg:w-[50vw]'/>  ,
    <img  src="https://picsum.photos/800/304/?random" alt="5" className='border-[1px] border-rose-600 carousel-background md:h-[30vh] md:[60vw] lg:h-[65vh] lg:w-[50vw]'/>  */ 
 

/* onst [isSignedIn, setIsSignedIn] = useState(false);
const handleClickCreate = async () => {
    if (!isSignedIn) {
        try {
          await signIn(process.env.CONTRACT_NAME || "seed.bonebon.testnet");
          setIsSignedIn(true);
        } catch (error) {
          console.log("Error occured during signIn:", error);
          return;
        }
    } 
    if(isSignedIn) navigate("/Create");
  } */

  return (
    <>

    <div className='min-[1920px]:mt-10'>
    <Carousel
          slides={slides}
          autoplay={false}
          interval={5000}
          arrows={true}
        />
    </div>

   </>
  )
}

export default HeaderHero