/* eslint-disable react/no-unescaped-entities */
"use client";

// import diamond from "./picture/diamond.png";
// import partialGreen from "./picture/partialGreen.png";
// import cupcake from "./picture/cupcake.png";
// import ball from "./picture/ball.png";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PictureView from "./picture-view";

import ImageSlide from "./image-slide";
import { AspectRatio } from "./aspect-ratio";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Image from "next/image";
import { Icons } from "./icon";

export default function MainContent() {
  // ====================== useState ======================
  const [currentBackGroundPage, setCurrentBackGroundPage] = useState(0);

  const [currentSidebarHover, setCurrentSidebarHover] = useState("");

  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  const [displaySidebar, setDisplaySidebar] = useState(false);

  const mobileNav = useRef<HTMLDivElement>(null);

  const aboutUs = useRef<HTMLDivElement>(null);

  const catalog = useRef<HTMLDivElement>(null);

  const serviceProviding = useRef<HTMLDivElement>(null);

  const activities = useRef<HTMLDivElement>(null);

  const contact = useRef<HTMLDivElement>(null);

  const mainContainer = useRef<HTMLDivElement>(null);

  const navBar = [
    "About us",
    "Catalog",
    "Service Providing",
    "Activities",
    "Contact",
  ];

  const slideImages = [
    "/picture/cover-img-1.jpg",
    "/picture/cover-img-2.jpg",
    "/picture/cover-img-3.jpg",
  ];

  const backgroundContent = [
    `   With over 50 years of experience as coconut farmers, our company's
  roots run deep in agriculture. Progressing with the times, the next
  generation of entrepreneurs brought expertise in international
  trade, leading us to expand into exporting coconuts and fruits
  globally. Today, we offer comprehensive logistics services,
  including transportation and custom clearance, for FOB, CFR and CIF
  of incoterms, ensuring seamless business operations for our clients.`,
    `We possess an extensive 112,000-square-meter coconut farm situated in Samut Songkram province in
  the western region of Thailand. This area is renowned for its exceptional coconut-growing conditions,
  nestled within a river basin that is periodically flooded by the sea. The resulting soil is abundant in minerals,
  particularly potassium, which is perfect for nurturing coconut trees. Located in the Ban Phaeo district, our
  farm benefits from a consistent water source that nourishes the coconut plantation, imparting a delightful
  aroma to the coconuts.
  `,
    `With these exceptional conditions, our coconut meat offers a sweet, mellow taste and a pleasant aroma,
    making it a refreshing choice to quench your thirst and cool you down. Our young coconuts have become our
    best-selling product, preferred by consumers who enjoy both the meat and the healthy coconut water.
    Additionally, they are processed into a variety of delicious coconut-based products, catering to the
    preferences of both Thai locals and international buyers.`,
  ];

  const handleChangeBackgroundPage = (page: number) => {
    if (page > -1 && page < backgroundContent.length) {
      setCurrentBackGroundPage(page);
    }
  };

  const handleCloseMobile = () => {
    mobileNav.current?.classList.add("animate-fadeRight");
    setTimeout(() => {
      setDisplayMobileNav(false);
    }, 250);
  };

  //
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const target = document.getElementById(hash);
      // if (hash === "contact") {
      //   window.gtag("event", "conversion", {
      //     send_to: "AW-16741257683/Tlf1CMe6y5YaENOj7a4-",
      //   });
      // }
      if (target) {
        target.scrollIntoView();
      }
    }
  }, []);

  const scrollToItem = (item: string) => {
    switch (item) {
      case "About us":
        aboutUs.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Catalog":
        catalog.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Service Providing":
        serviceProviding.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Activities":
        activities.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        contact.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (
        mainContainer.current?.scrollTop &&
        mainContainer.current?.scrollTop > mainContainer.current?.clientHeight
      ) {
        setDisplaySidebar(true);
      } else {
        setDisplaySidebar(false);
      }
    };
    document.getElementById("main")?.addEventListener("scroll", onScroll);

    return () =>
      document.getElementById("main")?.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="main"
      className="relative   h-dvh overflow-y-auto"
      ref={mainContainer}
    >
      {/* mobile nav bar */}
      {displayMobileNav && (
        <div
          className="fixed h-dvh w-[230px] bg-[#EDEEEA]  z-[101] py-[36px] px-6 flex-col gap-6 flex text-[#8EA262] border-r border-white animate-fadeLeft"
          ref={mobileNav}
        >
          <Icons.Close
            className="size-[30px] self-end cursor-pointer text-[#8EA262]"
            onClick={handleCloseMobile}
          />
          {navBar.map((item) => (
            <div
              key={item}
              className="cursor-pointer text-[20px] "
              onClick={() => {
                scrollToItem(item);
                handleCloseMobile();
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* nav bar */}
      <div className="w-full h-[92px] xl:h-[128px] flex items-center justify-between py-9 px-[24px] xl:px-[72px]  fixed top-0 z-[100] bg-primary-green/7  border-b border-white xl:border-none">
        <Icons.Logo
          onClick={() => scrollToItem("")}
          className="cursor-pointer size-[44px] xl:size-[55px]"
        />
        <div className="hidden items-center gap-8 xl:flex">
          {navBar.map((item) => (
            <div
              key={item}
              className="px-8 py-4 text-white cursor-pointer text-[18px] font-medium"
              onClick={() => {
                scrollToItem(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {/* mobile nav */}
        <Icons.Bars
          className="xl:hidden cursor-pointer"
          onClick={() => {
            if (displayMobileNav) {
              handleCloseMobile();
            } else {
              setDisplayMobileNav(true);
            }
          }}
        />
      </div>
      {/* cover img */}
      <div className="h-[100dvh] overflow-hidden relative z-[15] flex flex-col justify-center xl:justify-start">
        <div className="h-[100dvh] max-w-[100dvw]">
          <Slide arrows={false}>
            {slideImages.map((image, index) => (
              <div key={index} className="each-slide relative  h-[100dvh]">
                <Image
                  src={image}
                  className="h-[100dvh] object-cover"
                  fill
                  alt={`Slide ${index + 1}`}
                  priority
                />
              </div>
            ))}
          </Slide>
        </div>

        <div className="self-center justify-self-center absolute w-[400px] xl:w-[820px] h-[176px] text-center xl:bottom-[205px] xl:left-[135px] z-[100] text-[#F0F4E4]">
          <p className="text-[24px] xl:text-[40px] sacramento-regular ">
            Taste of nature
          </p>
          <p className="text-[36px] xl:text-[64px] font-bold">
            Aromatic Young Coconuts
          </p>
          <p className="text-[20px] xl:text-[26px] font-semibold">
            and Thai fruit
          </p>
        </div>
      </div>
      {/* sidebar */}
      {displaySidebar && (
        <div
          className={`fixed top-[150px] ${
            currentSidebarHover === "" ? "w-[48px]" : "w-[178px]"
          } h-[px]  overflow-visible z-[10]  right-0  flex-col items-end hidden xl:flex`}
        >
          <div
            className={`${
              currentSidebarHover === "phone"
                ? "px-[14px] h-[48px] bg-primary-green"
                : "size-12 bg-[#6B7949]"
            } gap-4 flex items-center justify-center  `}
            onMouseEnter={() => {
              setCurrentSidebarHover("phone");
            }}
            onMouseLeave={() => {
              setCurrentSidebarHover("");
            }}
          >
            <Icons.Phone />
            {currentSidebarHover === "phone" && (
              <span className="text-[14px] text-white">+66 91 710 5668</span>
            )}
          </div>
          <div
            className={`${
              currentSidebarHover === "email"
                ? "px-[14px] h-[48px] bg-primary-green"
                : "size-12 bg-[#6B7949]"
            } gap-4 flex items-center justify-center  border-t border-white `}
            onMouseEnter={() => {
              setCurrentSidebarHover("email");
            }}
            onMouseLeave={() => {
              setCurrentSidebarHover("");
            }}
          >
            <Icons.Email />
            {currentSidebarHover === "email" && (
              <span className="text-[14px] text-white">
                srpthaifruit@gmail.com
              </span>
            )}
          </div>
          {/* <div
          className={`${currentSidebarHover === 'facebook' ? 'px-[14px] h-[48px] bg-primary-green' : 'size-12 bg-[#6B7949]'} gap-4 flex items-center justify-center   border-t border-white`}
          onMouseEnter={() => {
            setCurrentSidebarHover('facebook')
          }}
          onMouseLeave={() => {
            setCurrentSidebarHover('')
          }}
        >
          <Facebook />
          {currentSidebarHover === 'facebook' && (
            <span className="text-[14px] text-white">coconut</span>
          )}
        </div> */}
          {/* <div
          className={`${currentSidebarHover === 'youtube' ? 'px-[14px] h-[48px] bg-primary-green' : 'size-12 bg-[#6B7949]'} gap-4 flex items-center justify-center   border-t border-white`}
          onMouseEnter={() => {
            setCurrentSidebarHover('youtube')
          }}
          onMouseLeave={() => {
            setCurrentSidebarHover('')
          }}
        >
          <Youtube />
          {currentSidebarHover === 'youtube' && (
            <span className="text-[14px] text-white">coconut</span>
          )}
        </div> */}
          {/* <div
          className={`${currentSidebarHover === 'cart' ? 'px-[14px] h-[48px] bg-primary-green' : 'size-12 bg-[#6B7949]'} gap-4 flex items-center justify-center  border-t border-white `}
          onMouseEnter={() => {
            setCurrentSidebarHover('cart')
          }}
          onMouseLeave={() => {
            setCurrentSidebarHover('')
          }}
        >
          <Cart />
          {currentSidebarHover === 'cart' && (
            <span className="text-[14px] text-white">coconut</span>
          )}
        </div> */}
          <div className="flex justify-center items-center h-[93px] w-12 border-t border-white bg-[#6B7949]  cursor-pointer">
            <Icons.Catalog />
          </div>
        </div>
      )}
      {/* about us */}
      <div
        className=" py-[56px] xl:py-[96px] px-[24px] xl:px-[135px] overflow-hidden relative"
        ref={aboutUs}
        id="about-us"
      >
        <div className="flex gap-[72px] items-center">
          {/* img */}
          <PictureView
            customStyle={"hidden xl:block "}
            customStylePic={"max-w-[440px] min-w-[440px]  "}
            firstImage={"/picture/our-product-img-1.jpg"}
            secondImage={"/picture/our-product-img-2.jpg"}
          />
          <div className=" py-[10px] flex flex-col">
            <h1 className="text-primary-green text-[28px] xl:text-[36px] font-semibold xl:font-bold mb-9">
              Our Product
            </h1>
            <div className="flex justify-center">
              <PictureView
                customStyle={"xl:hidden mb-[44px] w-full max-w-[400px] "}
                customStylePic={"max-h-[500px]  max-w-[400px] "}
                firstImage={"/picture/our-product-img-1.jpg"}
                secondImage={"/picture/our-product-img-2.jpg"}
              />
            </div>
            <p className="text-[16px] xl:text-[18px] font-medium mb-[24px] text-[#1C2014]">
              Our key products consist of authentic aromatic young coconuts,
              cultivated in the lush western region of Thailand— an area
              well-known for its ideal coconut growing environment.
            </p>
            <p className="text-[16px] xl:text-[18px] font-medium mb-[24px]  text-[#1C2014]">
              Benefiting from this prime location, our coconuts exhibit a
              delightful blend of sweetness, creaminess, and richness, capturing
              the distinctive flavor profile of original Thai aromatic coconuts.
              In addition to our signature coconuts, we offer a wide selection
              of seasonal fruits and vegetables sourced directly from Thailand's
              fertile landscapes.
            </p>
            <p className="text-[16px] xl:text-[18px] font-medium  text-[#1C2014] ">
              Moreover, we tailor our services to individual customer
              preferences by offering customized orders of Thai seasonal
              produce.
            </p>
          </div>
        </div>
        <div className="hidden xl:block mt-[72px]">
          <AspectRatio ratio={15 / 10}>
            <Image
              src={"/picture/our-service.png"}
              className=" w-full   bg-slate-400 rounded-2xl "
              fill
              alt={`our service`}
            />
          </AspectRatio>
        </div>

        <div className="mt-[56px]">
          <span className=" text-[20px] font-semibold text-[#8EA262]">
            Our service
          </span>
          <div className="flex mt-4 xl:gap-[64px] xl:flex-row flex-col">
            <div className="xl:text-[36px] text-[28px] font-semibold xl:font-bold xl:max-w-[calc(33%-32px)] mb-11">
              We provide global shipping services
            </div>
            <div className="xl:hidden">
              <AspectRatio ratio={15 / 10}>
                <Image
                  src={"/picture/our-service.png"}
                  className=" w-full  bg-slate-400 rounded-2xl  xl:hidden h-full object-contain"
                  fill
                  alt={`our service`}
                />
              </AspectRatio>
            </div>
            <div className="mt-[44px] xl:mt-0 xl:max-w-[calc(66%-32px)] text-[16px] xl:text-[18px] font-medium">
              delivering directly from our production facility to destinations
              worldwide. Through our meticulous quality control measures, we
              ensure that our customers consistently receive top-notch products
              of the highest quality.
            </div>
          </div>
        </div>
      </div>
      {/* background */}
      <div className="px-[24px] py-[56px] xl:px-[135px] xl:py-[96px] flex flex-col items-center bg-[#EDEEEA]">
        <span className=" text-[20px] font-semibold text-[#8EA262] mb-[72px]">
          Company Background
        </span>
        <div className="flex flex-col items-center">
          <div className="xl:text-[36px] text-[28px] font-semibold xl:font-bold text-primary-green xl:w-[60%] text-center mb-[48px] xl:mb-[56px]">
            “ Siriphon Thai Fruit company is a leading exporter of fresh
            coconuts and Thai fruits worldwide. ”
          </div>
          <span className="xl:w-[60%] text-[16px] text-[#1C2014] xl:text-[18px] ">
            {backgroundContent[currentBackGroundPage]}
          </span>
          <div className="mt-[40px] flex gap-4 xl:self-center self-end">
            <div
              className={`size-[56px] rounded-full flex justify-center items-center cursor-pointer ${
                currentBackGroundPage === 0 ? "bg-[#DADCD6]" : "bg-[#6B7949] "
              }`}
              onClick={() => {
                handleChangeBackgroundPage(currentBackGroundPage - 1);
              }}
            >
              <Icons.ArrowLeft />
            </div>
            <div
              className={`size-[56px] rounded-full flex   justify-center items-center cursor-pointer ${
                currentBackGroundPage === backgroundContent.length - 1
                  ? "bg-[#DADCD6]"
                  : "bg-[#6B7949]"
              }`}
              onClick={() => {
                handleChangeBackgroundPage(currentBackGroundPage + 1);
              }}
            >
              <Icons.ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[56px] px-[24px] xl:py-[96px] xl:px-[135px] bg-primary-green text-center">
        <h2 className="font-semibold text-[20px] xl:text-[28px] text-white">
          We have a commitment to delivering
        </h2>
        <div className="flex-col flex xl:flex-row  gap-16 mt-16 xl:h-[134px] items-center justify-center">
          <div className="flex gap-8 items-center text-start">
            <Icons.Varietires />
            <div>
              <h2 className="font-semibold text-[28px] xl:font-bold xl:text-[36px] text-white">
                Varieties
              </h2>
              <span className="text-[20px] font-semibold text-white">
                Aromatic young coconuts
              </span>
            </div>
          </div>
          <div className="flex gap-8 items-center text-start">
            <Icons.Quality />
            <div>
              <h2 className="font-semibold text-[28px] xl:font-bold  text-white">
                Quality
              </h2>
              <span className="text-[20px] font-semibold text-white">
                No pest, 100% organic
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Coconut */}
      <div
        className="py-[56px] xl:py-[96px] px-[24px] xl:px-[135px] overflow-hidden relative"
        ref={catalog}
        id="catalog"
      >
        <h1 className="text-primary-green text-[36px] xl:text-[64px] text-center font-semibold xl:font-bold mb-9">
          Our Coconut
        </h1>

        {/* Shaped Coconut Section */}
        <div className="mb-20">
          <h2 className="text-[#475131] text-[20px] xl:text-[28px] font-[600] mb-9">
            Shaped Coconut
          </h2>
          <div className="flex gap-[48px] xl:flex-row flex-col">
            <div className="images flex xl:flex-col flex-row gap-[16px] overflow-x-scroll xl:overflow-x-hidden xl:min-w-[377px] xl:h-fit h-[274px]">
              <div className="flex flex-col justify-center items-center gap-[16px]">
                <div className="relative xl:min-w-[250px] max-w-[377px] max-h-[234px] xl:max-h-[310px]">
                  <Image
                    fill
                    alt="diamond"
                    src={"/picture/diamond.png"}
                    className="rounded-2xl "
                  />
                </div>

                <div className="text-[#475131] text-[16px] xl:text-[18px] font-[600]">
                  Diamond
                </div>
              </div>

              <div className="flex flex-row gap-[32px]">
                <div className="flex flex-row gap-[32px]">
                  <div className="flex flex-col justify-center items-center gap-[16px]">
                    <Image
                      fill
                      alt="greenCutDiamond"
                      src={"/picture/greenCut.png"}
                      className="rounded-2xl xl:w-[172.5px] max-w-[377px] max-h-[234px] xl:max-h-[310px]"
                    />
                    <div className="text-[#475131] text-[16px] xl:text-[18px] font-[600]">
                      Green Cut Diamond
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-[16px]">
                  <Image
                    fill
                    alt="partialGreen"
                    src={"/picture/partialGreen.png"}
                    className="rounded-2xl xl:w-[230px] max-w-[377px] max-h-[234px] xl:max-h-[310px]"
                  />
                  <div className="text-[#475131] text-[16px] xl:text-[18px] font-[600]">
                    Partial Green Diamond
                  </div>
                </div>
              </div>
            </div>

            <div className="details flex flex-col grow gap-[24px] xl:gap-[48px] bg-[#EDEEEA] px-[24px] py-[32px] xl:px-[32px] xl:py-[72px] rounded-[16px]">
              <div className="flex flex-col justify-between xl:flex-row">
                <div className="heading w-[147px] text-[#475131] font-[600] text-[18px] mb-[20px]">
                  Packaging
                </div>
                <div className="flex flex-col ">
                  <div className="subheading w-[266px] text-[#6B7949] font-[600] text-[16px] mb-[16px] xl:mg-[24px]">
                    Size dependent
                  </div>
                  <div className="detail text-[16px]">
                    <div className="mb-[8px]">9 Units / Carton</div>
                    <div className="mb-[8px]">12 Units / Carton</div>
                  </div>
                </div>
                <div className=" w-[266px]"></div>
              </div>

              <hr className="border-[#B5B9AD] border-t" />

              <div className="flex flex-col justify-between xl:flex-row">
                <div className="heading w-[147px] text-[#475131] font-[600] text-[18px] mb-[20px]">
                  Container Load
                </div>
                <div className="flex flex-col mb-[20px]">
                  <div className="subheading w-[266px] text-[#6B7949] font-[600] text-[16px] mb-[16px] xl:mg-[24px]">
                    Pallet
                  </div>
                  <div className="detail text-[16px]">
                    <div className="mb-[8px]">990 Carton / 20'RF</div>
                    <div className="mb-[8px]">
                      1980 Carton / 40'RF (High Cube)
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="subheading w-[266px] text-[#6B7949] font-[600] text-[16px] mb-[16px] xl:mg-[24px]">
                    No Pallet
                  </div>
                  <div className="detail text-[16px]">
                    <div className="mb-[8px]">1025 Carton / 20'RF</div>
                    <div className="mb-[8px]">
                      2052 Carton / 40'RF (High Cube)
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-[#B5B9AD] border-t" />

              <div className="flex flex-col justify-between xl:flex-row">
                <div className="heading w-[147px] text-[#475131] font-[600] text-[18px] mb-[20px]">
                  MOQ
                </div>
                <div className="detail  w-[266px] text-[16px]">1x20'RF</div>
                <div className=" w-[266px]"></div>
              </div>

              <hr className="border-[#B5B9AD] border-t" />

              <div className="flex flex-col  justify-between xl:flex-row">
                <div className="heading w-[147px] text-[#475131] font-[600] text-[18px] mb-[20px]">
                  Payment Term
                </div>
                <div className="detail  w-[266px] text-[16px]">L/C or T/T</div>
                <div className="w-[266px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-[#475131] text-[20px] xl:text-[28px] font-[600] mb-9">
            Polished Coconut
          </h2>
          <div className="flex gap-[48px] xl:flex-row-reverse flex-col">
            <div className="images flex xl:flex-col flex-row gap-[16px] overflow-x-scroll  xl:overflow-x-hidden h-[274px] xl:h-fit xl:min-w-[377px]">
              <div className="flex flex-col justify-center items-center gap-[16px]">
                <Image
                  fill
                  alt="cupcake"
                  src={"/picture/cupcake.png"}
                  className="rounded-2xl xl:min-w-[250px] max-w-[377px] max-h-[234px] xl:max-h-[310px]"
                />
                <div className="text-[#475131] text-[16px] xl:text-[18px] font-[600]">
                  Cupcake
                </div>
              </div>

              <div className="flex flex-row gap-[32px]">
                <div className="flex flex-col justify-center items-center gap-[16px]">
                  <Image
                    fill
                    alt="ball"
                    src={"/picture/ball.png"}
                    className="rounded-2xl xl:min-w-[250px] max-w-[377px] max-h-[234px] xl:max-h-[310px]"
                  />
                  <div className="text-[#475131] text-[16px] xl:text-[18px] font-[600]">
                    Ball
                  </div>
                </div>
              </div>
            </div>

            <div className="details flex flex-col grow gap-[24px] xl:gap-[48px] bg-[#EDEEEA] px-[24px] py-[32px] xl:px-[32px] xl:py-[72px] rounded-[16px]">
              <div className="flex flex-col justify-between xl:flex-row">
                <div className="heading w-[147px] text-[#475131] font-[600] text-[18px] mb-[20px]">
                  Packaging
                </div>
                <div className="flex flex-col ">
                  <div className="subheading w-[266px] text-[#6B7949] font-[600] text-[16px] mb-[16px] xl:mg-[24px]">
                    Size dependent
                  </div>
                  <div className="detail text-[16px]">
                    <div className="mb-[8px]">32 Units / Carton</div>
                    <div className="mb-[8px]">40 Units / Carton</div>
                  </div>
                </div>
                <div className=" w-[266px]"></div>
              </div>

              <hr className="border-[#B5B9AD] border-t" />

              <div className="flex flex-col justify-between xl:flex-row">
                <div className="heading w-[147px] text-[#475131] font-[600] text-[18px] mb-[20px]">
                  Container Load
                </div>
                <div className="flex flex-col mb-[20px]">
                  <div className="subheading w-[266px] text-[#6B7949] font-[600] text-[16px] mb-[16px] xl:mg-[24px]">
                    Pallet
                  </div>
                  <div className="detail text-[16px]">
                    <div className="mb-[8px]">990 Carton / 20'RF</div>
                    <div className="mb-[8px]">
                      1980 Carton / 40'RF (High Cube)
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="subheading w-[266px] text-[#6B7949] font-[600] text-[16px] mb-[16px] xl:mg-[24px]">
                    No Pallet
                  </div>
                  <div className="detail text-[16px]">
                    <div className="mb-[8px]">1025 Carton / 20'RF</div>
                    <div className="mb-[8px]">
                      2052 Carton / 40'RF (High Cube)
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-[#B5B9AD] border-t" />

              <div className="flex flex-col justify-between xl:flex-row">
                <div className="heading w-[147px] text-[#475131] font-[600] text-[18px] mb-[20px]">
                  MOQ
                </div>
                <div className="detail  w-[266px] text-[16px]">1x20'RF</div>
                <div className=" w-[266px]"></div>
              </div>

              <hr className="border-[#B5B9AD] border-t" />

              <div className="flex flex-col  justify-between xl:flex-row">
                <div className="heading w-[147px] text-[#475131] font-[600] text-[18px] mb-[20px]">
                  Payment Term
                </div>
                <div className="detail  w-[266px] text-[16px]">L/C or T/T</div>
                <div className="w-[266px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Providing */}
      <div
        className="py-[56px] px-[24px] xl:py-[96px] xl:px-[135px] bg-primary-green text-center"
        ref={serviceProviding}
        id="service-providing"
      >
        <h2 className="text-white text-[28px] font-[600] xl:text-[36px] xl:font-[700] mb-[72px]">
          Service Providing
        </h2>
        <div className="flex flex-col xl:items-start items-center gap-[54px] xl:gap-[30px] xl:flex-row xl:justify-evenly">
          <div className="xl:w-[359px] flex flex-col items-center w-full">
            <div className="flex justify-center items-center rounded-[16px] w-full xl:w-[300px] xl:h-[276px] overflow-hidden">
              <AspectRatio ratio={1 / 1}>
                <Image
                  fill
                  alt="truck"
                  src={"/picture/service-truck.png"}
                  className="rounded-[16px] object-cover w-full h-full"
                />
              </AspectRatio>
            </div>

            <div className="text-white font-[600] xl:text-[18px] flex self-start gap-[24px] px-[24px] xl:py-[26px] pt-[24px] pb-[16px]">
              <Icons.Truck className="size-[24px]" />
              <span>Inland Transport</span>
            </div>
            <p className="text-white px-6 self-start text-start text-[18px]">
              We offer product delivery services to ports throughout Thailand,
              tailored to meet specific trading conditions.
            </p>
          </div>

          <div className="xl:w-[359px] flex flex-col items-center">
            <div className="flex justify-center items-center rounded-[16px] xl:w-[300px] overflow-hidden w-full">
              <AspectRatio ratio={1 / 1}>
                <Image
                  fill
                  alt="ship"
                  src={"/picture/service-ship.png"}
                  className="rounded-[16px] object-cover w-full h-full"
                />
              </AspectRatio>
            </div>

            <div className="text-white font-[600] xl:text-[18px] flex self-start gap-[24px] px-[24px] xl:py-[26px] pt-[24px] pb-[16px]">
              <Icons.Ship className="size-[24px]" />
              <span>Freight Shipping</span>
            </div>
            <p className="text-white px-6 self-start text-start text-[18px]">
              Our shipping services encompass sea freight, air freight, and
              cross- border transportation, in accordance with the agreed
              Incoterms between the company and the customer
            </p>
          </div>

          <div className="xl:w-[359px] flex flex-col items-center">
            <div className="flex justify-center items-center rounded-[16px] xl:w-[300px] overflow-hidden w-full">
              <AspectRatio ratio={1 / 1}>
                <Image
                  fill
                  alt="custom"
                  src={"/picture/service-custom.png"}
                  className=" rounded-[16px] object-cover w-full h-full"
                />
              </AspectRatio>
            </div>

            <div className="text-white font-[600] xl:text-[18px] flex self-start gap-[24px] px-[24px] xl:py-[26px] pt-[24px] pb-[16px]">
              <Icons.Custom className="size-[24px]" />
              <span>Freight Shipping</span>
            </div>
            <p className="text-white px-6 self-start text-start text-[18px]">
              We provide expert assistance with export customs formalities,
              including the preparation of necessary documents to facilitate
              smooth import customs clearance for our customers.
            </p>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div
        className="px-[24px] py-[56px] xl:px-[135px] xl:py-[96px] flex flex-col items-center bg-[#EDEEEA] first-letter "
        ref={activities}
        id="activities"
      >
        <div className="flex flex-col xl:flex-row gap-[84px]  items-center justify-center  xl:justify-between w-full">
          <div className="Detail w-full">
            <h3 className="text-primary-green text-[28px] xl:text-[36px] font-semibold xl:font-bold  mb-[44px] xl:mb-[72px]">
              Activities
            </h3>

            <ImageSlide
              images={[
                "/picture/activity1-1.png",
                "/picture/activity1-2.png",
                "/picture/activity1-3.png",
                "/picture/activity1-4.png",
                "/picture/activity1-5.jpg",
                "/picture/activity1-6.jpg",
              ]}
              customStyle={"block xl:hidden  mb-[44px] "}
              customStylePic={"rounded-2xl  mb-[44px]"}
            />

            <p className="text-[#394127] font-[600] text-[28px]">
              Our facility
            </p>
          </div>

          <ImageSlide
            images={[
              "/picture/activity1-1.png",
              "/picture/activity1-2.png",
              "/picture/activity1-3.png",
              "/picture/activity1-4.png",
              "/picture/activity1-5.jpg",
              "/picture/activity1-6.jpg",
            ]}
            customStyle={"hidden xl:block  w-full xl:w-f"}
            customStylePic={
              "rounded-2xl  min-w-[370px]  min-h-[300px]  mb-[44px]"
            }
          />
        </div>
      </div>

      <div className="px-[24px] py-[56px] xl:px-[135px] xl:py-[96px] flex flex-col items-center">
        <div className="flex flex-col xl:flex-row-reverse gap-[84px]  items-center justify-center xl:justify-between w-full">
          <div className="Detail w-full">
            <ImageSlide
              images={[
                "/picture/activity2-1.jpg",
                "/picture/activity2-2.jpg",
                "/picture/activity2-3.jpg",
              ]}
              customStyle={"block xl:hidden w-full xl:w-fit"}
              customStylePic={"rounded-2xl   mb-[44px]"}
            />

            <p className="text-[#394127] font-[600] text-[28px]">
              Our coconut farm
            </p>
          </div>
          <ImageSlide
            images={[
              "/picture/activity2-1.jpg",
              "/picture/activity2-2.jpg",
              "/picture/activity2-3.jpg",
            ]}
            customStyle={"hidden xl:block"}
            customStylePic={
              "rounded-2xl max-w-[570px] min-w-[370px] max-h-[504px] min-h-[300px]  mb-[44px]"
            }
          />
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-[24px] py-[56px] xl:px-[135px] xl:py-[96px] flex justify-between flex-col xl:flex-row bg-[#475131]"
        ref={contact}
        id="contact"
      >
        <div className="mb-[48px]">
          <Icons.Logo
            onClick={() => scrollToItem("")}
            className="cursor-pointer size-[44px] xl:size-[55px] mb-[32px]"
          />
          <div className="text-white text-[16px] font-[600] mb-[8px]">
            SIRIPHON THAI FRUIT CO., LTD
          </div>
          <div className="text-white text-[14px]">
            Aromatic Young Coconuts and Thai fruit
          </div>
        </div>

        <div className="flex flex-col xl:flex-row ">
          <div className="mb-[48px]">
            <div className="text-white text-[20px] font-[600] mb-[32px]">
              Contact Us
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row mx-[16px] mb-[32px]">
                <div className="w-[220px] mr-[24px]">
                  <Icons.Address className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                  <div className="text-white text-[14px] xl:text-[16px] font-[600]">
                    Address
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px] ">
                    39 moo 1 Khlong Khon, Samut Songkhram 75000 THAILAND
                  </div>
                </div>
                <div className="w-[220px] mr-[24px]">
                  <Icons.Phone className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                  <div className="text-white text-[14px] xl:text-[16px] font-[600]">
                    Phone
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px]">
                    +66 91 710 5668
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px]">
                    +66 88 230 4451
                  </div>
                </div>
              </div>
              <div className="flex flex-row mx-[16px]">
                <div className="w-[220px] mr-[24px]">
                  <Icons.Whatsapp className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                  <div className="text-white text-[14px] xl:text-[16px] font-[600]">
                    Whatsapp
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px]">
                    +66 91 710 5668
                  </div>
                </div>
                <div className="w-[220px] mr-[24px]">
                  <Icons.Email className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                  <div className="text-white text-[14px] xl:text-[16px] font-[600]">
                    Email
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px]">
                    srpthaifruit@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-[48px]">
            <div className="text-white text-[20px] font-[600] mb-[32px]">
              Explore
            </div>
            <ul>
              <li
                className="text-white py-[16px] px-[32px] cursor-pointer"
                onClick={() => {
                  scrollToItem("About us");
                }}
              >
                About us
              </li>
              <li
                className="text-white py-[16px] px-[32px] cursor-pointer"
                onClick={() => {
                  scrollToItem("Catalog");
                }}
              >
                Catalog
              </li>
              <li
                className="text-white py-[16px] px-[32px] cursor-pointer"
                onClick={() => {
                  scrollToItem("Service Providing");
                }}
              >
                Service Providing
              </li>
              <li
                className="text-white py-[16px] px-[32px] cursor-pointer"
                onClick={() => {
                  scrollToItem("Activities");
                }}
              >
                Activities
              </li>
              <li
                className="text-white py-[16px] px-[32px] cursor-pointer"
                onClick={() => {
                  scrollToItem("Contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
