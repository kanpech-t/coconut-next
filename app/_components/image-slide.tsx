import { useState } from "react";

import { AspectRatio } from "./aspect-ratio";
import { Icons } from "./icon";

export default function ImageSlide({
  images,
  customStyle,
  customStylePic,
}: {
  images: string[];
  customStyle: string;
  customStylePic: string;
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleChangeImg = (direction: "prev" | "next") => {
    if (direction === "next") {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImgIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div className={customStyle}>
      <div
        className={`w-full xl:w-[580px] rounded-2xl flex items-center overflow-hidden relative ${customStylePic}`}
      >
        <Icons.ArrowLeft
          className="absolute left-0 size-9 cursor-pointer z-10"
          onClick={() => handleChangeImg("prev")}
        />
        <Icons.ArrowRight
          className="absolute right-0 size-9 cursor-pointer z-10"
          onClick={() => handleChangeImg("next")}
        />
        <AspectRatio ratio={1 / 1}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`w-full transition-opacity duration-500 h-full object-cover ${
                currentImgIndex === index
                  ? "opacity-100 relative"
                  : "opacity-0 absolute"
              }`}
              alt={`Slide ${index + 1}`}
              style={{ left: 0 }}
            />
          ))}
        </AspectRatio>
      </div>
      <div className="flex mt-4 xl:mt-6 gap-3 justify-start xl:justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`${
              currentImgIndex === index ? "bg-[#6B7949]" : "bg-[#DADCD6]"
            } size-4 rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
}
