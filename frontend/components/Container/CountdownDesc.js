import React, { useState, useEffect, useRef } from 'react';

function AuctionCountdownDesc({ data }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(data.auction_end));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(data.auction_end));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeLeft(endTime) {
    const difference = new Date(endTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <>  
    <div className='flex gap-x-4 font-medium text-md pt-2 text-center'>
    <div className='grid grid-cols-3 gap-x-2'>
        <div className='bg-black p-2 border-[1px] border-gray-600 rounded-md'>
          <div className='text-md'>{timeLeft.hours}</div>
          <div className='text-sm font-semibold'>HRS</div>
        </div>
        <div className='bg-black p-2 border-[1px] border-gray-600 rounded-md'>
          <div className='text-md'>{timeLeft.minutes}</div>
          <div className='text-sm font-semibold'>MINS</div>
        </div>
        <div className='bg-black p-2 border-[1px] border-gray-600 rounded-md'>
          <div className='text-md'>{timeLeft.seconds}</div>
          <div className='text-sm font-semibold'>SECS</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AuctionCountdownDesc;