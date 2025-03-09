import { useRef, useState } from "react";

import { AspectRatio } from "./aspect-ratio";
import { Icons } from "./icon";
import Image from "next/image";

export default function PictureView({
  firstImage,
  secondImage,
  customStyle,
  customStylePic,
}: {
  firstImage: string;
  secondImage: string;
  customStyle: string;
  customStylePic: string;
}) {
  const [currentImg, setCurrentImg] = useState(1);

  const img1 = useRef(null);
  const img2 = useRef(null);

  const handleChangeImg = () => {
    if (currentImg === 1) {
      setCurrentImg(2);
    } else {
      setCurrentImg(1);
    }
  };

  return (
    <div className={customStyle}>
      <div
        className={`w-auto rounded-2xl  flex items-center  overflow-hidden  relative ${customStylePic} `}
      >
        {currentImg === 1 ? (
          <Icons.ArrowRight
            className="absolute size-9 right-0 z-10 cursor-pointer"
            onClick={() => {
              handleChangeImg();
            }}
          />
        ) : (
          <Icons.ArrowLeft
            className="absolute left-0 size-9 cursor-pointer z-10"
            onClick={() => {
              handleChangeImg();
            }}
          />
        )}
        <AspectRatio ratio={10 / 15}>
          <Image
            fill
            src={firstImage}
            className={`${
              currentImg === 1 ? "opacity-100" : "opacity-0"
            } w-full  transition-opacity duration-500 `}
            alt={`Slide 1`}
            ref={img1}
          />
          <Image
            fill
            src={secondImage}
            className={`${
              currentImg === 2 ? "opacity-100" : "opacity-0"
            } w-full absolute top-0 left-0  transition-opacity duration-500 `}
            alt={`Slide 2`}
            ref={img2}
          />
        </AspectRatio>
      </div>
      <div className="flex mt-4 xl:mt-6 gap-3  justify-start xl:justify-center">
        <div
          className={`${
            currentImg === 1 ? "bg-[#6B7949]" : "bg-[#DADCD6]"
          } size-4 rounded-full`}
        ></div>
        <div
          className={`${
            currentImg === 2 ? "bg-[#6B7949]" : "bg-[#DADCD6]"
          } size-4 rounded-full`}
        ></div>
      </div>
    </div>
  );
}
