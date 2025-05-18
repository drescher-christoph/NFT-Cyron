import React from 'react'
import preview from "../../../images/2.png"
import MintCounter from './MintCounter'
import MintButton from './MintButton'
import ImageCarousel from './ImageCarousel'
import image0 from "../../../images/0.png"
import image1 from "../../../images/1.png"
import image2 from "../../../images/2.png"
import image3 from "../../../images/3.png"
import image4 from "../../../images/4.png"
import image5 from "../../../images/5.png"
import image6 from "../../../images/6.png"
import image7 from "../../../images/7.png"

const images = [
    { src: image0, alt: "Preview#0" },
    { src: image1, alt: "Preview#1" },
    { src: image2, alt: "Preview#2" },
    { src: image3, alt: "Preview#3" },
    { src: image4, alt: "Preview#4" },
    { src: image5, alt: "Preview#5" },
    { src: image6, alt: "Preview#6" },
    { src: image7, alt: "Preview#7" },
  ]

const MintCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 rounded-2xl bg-gradient-to-b from-[#0a101c] to-[#0e1525] border-2 border-white/10 w-full max-w-md shadow-md transition-transform hover:scale-[1.02] hover:border-white duration-200">
      <ImageCarousel  images={images}/>
      <MintCounter />
      <MintButton />
    </div>
  );
};

export default MintCard