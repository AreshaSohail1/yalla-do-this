import { useState, useEffect } from 'react';

const images = [
  '/assits/images/pic9.jpg',
 
];

const Cellingbanner = ({ content, button, paragraph }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      },200)



  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <div
        className={`absolute w-full h-full inset-0 bg-cover bg-center transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="relative w-[50%] z-10 text-white pt-[10%] px-[8%] p-8">
          <div className="text-[#1e73be] uppercase text-[50px] font-bold mb-5">{content}</div>
          <div className="text-[18px] font-[300] leading-[30px]    ">{paragraph}</div>
          <div className="mt-[6%] bg-[#164b8d] text-[24px]  cursor-pointer hover:bg-[#F97300] text-center ease-in duration-300 font-[300] rounded-[30px] py-[10px] px-[25px]">{button}</div>
        </div>
      </div>
    </div>
  );
};

export default Cellingbanner;
