import React from "react";
import Image from "@/components/Image";
import Modelimage from "@/assets/img/model1.png";
import topAdimage from "@/assets/img/topAd-banner2.png";
import specialAdd1 from "@/assets/img/specialAds1.jpg";
import specialAdd2 from "@/assets/img/specialAds2.png";
import specialAdd3 from "@/assets/img/specialAds3.jpg";
import HtopAdimage from "@/assets/img/mobspecialAds3.png";
import HmobspecialAds2 from "@/assets/img/mobspecialAds2.png";
import Add2 from "@/assets/img/add2.png";
import Icons from "@/components/icons/Component";
import {
    LockIcon,
    WhiteStarIcon,
    YellowStarIcon,
} from "@/components/icons/solid";
import UploadIdReminder from "@/components/UploadIdReminder";

export default function Home() {
    return (
        <>
            <UploadIdReminder />
            <section className="main-section">
                <div className="featuredEscorts">
                    <div className="m-auto px-4">
                        <div className="mb-[20px] md-down:flex md-down:items-end md-down:justify-between">
                            <h1 className="inCardTitle md:text-white-400 md:dark:text-white-400 relative text-lg font-semibold text-white md:p-0 md:text-2xl md:font-normal">
                                Featured Male Escorts & Gay Massage Near me
                            </h1>
                            <span className="shrink-0 text-sm font-normal text-red-50 underline md:hidden sm-down:pb-0">
                                See more
                            </span>
                        </div>
                        <div className="flex-row gap-1 xl:flex">
                            <div className="md:basis-4/4 lg:basis-3/4">
                                <div className="featuredEscortsList">
                                    <div className="flex-row xl:flex">
                                        <div className="maleEscortsList grid grid-cols-2 gap-0 md:grid-cols-3 lg:basis-3/4 xl:grid-cols-4">
                                            <a
                                                href="#"
                                                className="relative h-[242px] overflow-hidden"
                                            >
                                                <Icons
                                                    icon={YellowStarIcon}
                                                    className="absolute right-3 top-3 z-2 w-5"
                                                />
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 transition hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="ms-1 inline-block h-[11px] w-[11px] rounded-full bg-[#07B40E]"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative h-[242px] overflow-hidden"
                                            >
                                                <Icons
                                                    icon={WhiteStarIcon}
                                                    className="absolute right-3 top-3 z-2 w-5"
                                                />

                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="ms-1 inline-block h-[11px] w-[11px] rounded-full bg-[#07B40E]"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative h-[242px] overflow-hidden"
                                            >
                                                <Icons
                                                    icon={YellowStarIcon}
                                                    className="absolute right-3 top-3 z-2 w-5"
                                                />

                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative h-[242px] overflow-hidden"
                                            >
                                                <Icons
                                                    icon={LockIcon}
                                                    className="absolute left-[50%] top-[50%] z-50 w-5 translate-x-[-50%] translate-y-[-50%]"
                                                />
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 blur-sm hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="ms-1 inline-block h-[11px] w-[11px] rounded-full bg-[#07B40E]"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden h-[242px] overflow-hidden md:block"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden h-[242px] overflow-hidden md:block"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden h-[242px] overflow-hidden xl:block"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden h-[242px] overflow-hidden xl:block"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden h-[242px] overflow-hidden xl:block"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden h-[242px] overflow-hidden xl:block"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden h-[242px] overflow-hidden xl:block"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden h-[242px] overflow-hidden xl:block"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="maleEscortsList2 hidden grid-cols-1 md:grid lg:basis-1/4">
                                            <a
                                                href="#"
                                                className="relative h-[482px] overflow-hidden"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10 hover:scale-[1.1]"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        TeddyGBT{" "}
                                                        <span className="statusPoint"></span>
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Luanda, Angola
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="grid grid-cols-2">
                                                <a
                                                    href="#"
                                                    className="relative h-[242px] overflow-hidden"
                                                >
                                                    <Image
                                                        src={Modelimage}
                                                        className="h-full w-10 hover:scale-[1.1]"
                                                    />
                                                    <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                        <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                            TeddyGBT{" "}
                                                            <span className="ms-1 inline-block h-[11px] w-[11px] rounded-full bg-[#07B40E]"></span>
                                                        </h3>
                                                        <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                            Luanda, Angola
                                                        </p>
                                                    </div>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="relative h-[242px] overflow-hidden"
                                                >
                                                    <Image
                                                        src={Modelimage}
                                                        className="h-full w-10 hover:scale-[1.1]"
                                                    />
                                                    <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                        <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                            TeddyGBT{" "}
                                                            <span className="ms-1 inline-block h-[11px] w-[11px] rounded-full bg-[#07B40E]"></span>
                                                        </h3>
                                                        <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                            Luanda, Angola
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:basis-4/4 relative lg:basis-1/4 xl:h-[732px]">
                                <h2 className="absolute bottom-10 left-[50%] hidden translate-x-[-50%] text-4xl font-normal xl:block">
                                    <span className="text-white">Rent</span>{" "}
                                    <span className="text-red-50">Boys</span>
                                </h2>
                                <a
                                    href="#!"
                                    className="block h-full overflow-hidden"
                                >
                                    <Image
                                        src={topAdimage}
                                        className="hidden h-full w-full xl:block"
                                    />
                                    <Image
                                        src={HtopAdimage}
                                        className="mt-4 h-full w-full xl:hidden"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Recent Posts */}
                <div className="recentPosts-section my-[20px]">
                    <div className="m-auto px-4">
                        <div className="mb-[20px] md-down:flex md-down:items-end md-down:justify-between">
                            <h1 className="inCardTitle md:text-white-400 md:dark:text-white-400 relative text-lg font-semibold text-white md:p-0 md:text-2xl md:font-normal">
                                Recent Posts
                            </h1>
                            <span className="shrink-0 text-sm font-normal text-red-50 underline md:hidden sm-down:pb-0">
                                See more
                            </span>
                        </div>
                        <div className="flex-row gap-1 md:flex">
                            <div className="md:basis-3/12">
                                <a
                                    href="#"
                                    className="blurImg videoBtn relative block h-full overflow-hidden border border-[#5F5F5F]"
                                >
                                    <Icons
                                        icon={WhiteStarIcon}
                                        className="absolute right-3 top-3 z-20 w-5"
                                    />
                                    <Image
                                        src={Modelimage}
                                        className="hover:scale-[1.1 h-full w-10"
                                    />
                                    <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                        <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                            Servingyouhot{" "}
                                            <span className="statusPoint"></span>
                                        </h3>
                                        <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                            Russia, Russia
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="basis-9/12">
                                <div className="recentAddedList">
                                    <div className="grid grid-cols-2 xl:grid-cols-3">
                                        <a
                                            href="#"
                                            className="relative h-[172px] overflow-hidden border border-[#5F5F5F]"
                                        >
                                            <svg
                                                className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto"
                                                width="54"
                                                height="54"
                                                viewBox="0 0 55 55"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M27.4685 54.4231C12.8002 54.4231 0.941895 42.5726 0.941895 27.9154C0.941895 13.2583 12.8002 1.40778 27.4685 1.40778C42.1368 1.40778 53.9951 13.2583 53.9951 27.9154C53.9951 42.5726 42.1368 54.4231 27.4685 54.4231ZM27.4685 3.58515C13.9973 3.58515 3.1215 14.4529 3.1215 27.9154C3.1215 41.378 13.9973 52.2457 27.4685 52.2457C40.9397 52.2457 51.8155 41.378 51.8155 27.9154C51.8155 14.4529 40.9397 3.58515 27.4685 3.58515Z"
                                                    fill="white"
                                                    stroke="white"
                                                />
                                                <path
                                                    d="M19.52 41.7369V14.0938L43.367 27.9154L19.52 41.7369ZM22.6996 19.4953V36.1765L37.0078 27.7565L22.6996 19.4953Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore22
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="relative h-[172px] overflow-hidden border border-[#5F5F5F]"
                                        >
                                            <svg
                                                className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto"
                                                width="54"
                                                height="54"
                                                viewBox="0 0 55 55"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M27.4685 54.4231C12.8002 54.4231 0.941895 42.5726 0.941895 27.9154C0.941895 13.2583 12.8002 1.40778 27.4685 1.40778C42.1368 1.40778 53.9951 13.2583 53.9951 27.9154C53.9951 42.5726 42.1368 54.4231 27.4685 54.4231ZM27.4685 3.58515C13.9973 3.58515 3.1215 14.4529 3.1215 27.9154C3.1215 41.378 13.9973 52.2457 27.4685 52.2457C40.9397 52.2457 51.8155 41.378 51.8155 27.9154C51.8155 14.4529 40.9397 3.58515 27.4685 3.58515Z"
                                                    fill="white"
                                                    stroke="white"
                                                />
                                                <path
                                                    d="M19.52 41.7369V14.0938L43.367 27.9154L19.52 41.7369ZM22.6996 19.4953V36.1765L37.0078 27.7565L22.6996 19.4953Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore22
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="relative h-[172px] overflow-hidden border border-[#5F5F5F]"
                                        >
                                            <svg
                                                className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto"
                                                width="54"
                                                height="54"
                                                viewBox="0 0 55 55"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M27.4685 54.4231C12.8002 54.4231 0.941895 42.5726 0.941895 27.9154C0.941895 13.2583 12.8002 1.40778 27.4685 1.40778C42.1368 1.40778 53.9951 13.2583 53.9951 27.9154C53.9951 42.5726 42.1368 54.4231 27.4685 54.4231ZM27.4685 3.58515C13.9973 3.58515 3.1215 14.4529 3.1215 27.9154C3.1215 41.378 13.9973 52.2457 27.4685 52.2457C40.9397 52.2457 51.8155 41.378 51.8155 27.9154C51.8155 14.4529 40.9397 3.58515 27.4685 3.58515Z"
                                                    fill="white"
                                                    stroke="white"
                                                />
                                                <path
                                                    d="M19.52 41.7369V14.0938L43.367 27.9154L19.52 41.7369ZM22.6996 19.4953V36.1765L37.0078 27.7565L22.6996 19.4953Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore22
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="blurImg videoBtn relative h-[172px] overflow-hidden border border-[#5F5F5F]"
                                        >
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm hover:scale-[1.1]"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="relative hidden h-[172px] overflow-hidden border border-[#5F5F5F] xl:block"
                                        >
                                            <svg
                                                className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto"
                                                width="54"
                                                height="54"
                                                viewBox="0 0 55 55"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M27.4685 54.4231C12.8002 54.4231 0.941895 42.5726 0.941895 27.9154C0.941895 13.2583 12.8002 1.40778 27.4685 1.40778C42.1368 1.40778 53.9951 13.2583 53.9951 27.9154C53.9951 42.5726 42.1368 54.4231 27.4685 54.4231ZM27.4685 3.58515C13.9973 3.58515 3.1215 14.4529 3.1215 27.9154C3.1215 41.378 13.9973 52.2457 27.4685 52.2457C40.9397 52.2457 51.8155 41.378 51.8155 27.9154C51.8155 14.4529 40.9397 3.58515 27.4685 3.58515Z"
                                                    fill="white"
                                                    stroke="white"
                                                />
                                                <path
                                                    d="M19.52 41.7369V14.0938L43.367 27.9154L19.52 41.7369ZM22.6996 19.4953V36.1765L37.0078 27.7565L22.6996 19.4953Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore22
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="blurImg videoBtn relative hidden h-[172px] overflow-hidden border border-[#5F5F5F] md:block"
                                        >
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="relative hidden h-[172px] overflow-hidden border border-[#5F5F5F] md:block"
                                        >
                                            <svg
                                                className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto"
                                                width="54"
                                                height="54"
                                                viewBox="0 0 55 55"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M27.4685 54.4231C12.8002 54.4231 0.941895 42.5726 0.941895 27.9154C0.941895 13.2583 12.8002 1.40778 27.4685 1.40778C42.1368 1.40778 53.9951 13.2583 53.9951 27.9154C53.9951 42.5726 42.1368 54.4231 27.4685 54.4231ZM27.4685 3.58515C13.9973 3.58515 3.1215 14.4529 3.1215 27.9154C3.1215 41.378 13.9973 52.2457 27.4685 52.2457C40.9397 52.2457 51.8155 41.378 51.8155 27.9154C51.8155 14.4529 40.9397 3.58515 27.4685 3.58515Z"
                                                    fill="white"
                                                    stroke="white"
                                                />
                                                <path
                                                    d="M19.52 41.7369V14.0938L43.367 27.9154L19.52 41.7369ZM22.6996 19.4953V36.1765L37.0078 27.7565L22.6996 19.4953Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore22
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="relative hidden h-[172px] overflow-hidden border border-[#5F5F5F] md:block"
                                        >
                                            <svg
                                                className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto"
                                                width="54"
                                                height="54"
                                                viewBox="0 0 55 55"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M27.4685 54.4231C12.8002 54.4231 0.941895 42.5726 0.941895 27.9154C0.941895 13.2583 12.8002 1.40778 27.4685 1.40778C42.1368 1.40778 53.9951 13.2583 53.9951 27.9154C53.9951 42.5726 42.1368 54.4231 27.4685 54.4231ZM27.4685 3.58515C13.9973 3.58515 3.1215 14.4529 3.1215 27.9154C3.1215 41.378 13.9973 52.2457 27.4685 52.2457C40.9397 52.2457 51.8155 41.378 51.8155 27.9154C51.8155 14.4529 40.9397 3.58515 27.4685 3.58515Z"
                                                    fill="white"
                                                    stroke="white"
                                                />
                                                <path
                                                    d="M19.52 41.7369V14.0938L43.367 27.9154L19.52 41.7369ZM22.6996 19.4953V36.1765L37.0078 27.7565L22.6996 19.4953Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore22
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="relative hidden h-[172px] overflow-hidden border border-[#5F5F5F] md:block"
                                        >
                                            <svg
                                                className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto"
                                                width="54"
                                                height="54"
                                                viewBox="0 0 55 55"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M27.4685 54.4231C12.8002 54.4231 0.941895 42.5726 0.941895 27.9154C0.941895 13.2583 12.8002 1.40778 27.4685 1.40778C42.1368 1.40778 53.9951 13.2583 53.9951 27.9154C53.9951 42.5726 42.1368 54.4231 27.4685 54.4231ZM27.4685 3.58515C13.9973 3.58515 3.1215 14.4529 3.1215 27.9154C3.1215 41.378 13.9973 52.2457 27.4685 52.2457C40.9397 52.2457 51.8155 41.378 51.8155 27.9154C51.8155 14.4529 40.9397 3.58515 27.4685 3.58515Z"
                                                    fill="white"
                                                    stroke="white"
                                                />
                                                <path
                                                    d="M19.52 41.7369V14.0938L43.367 27.9154L19.52 41.7369ZM22.6996 19.4953V36.1765L37.0078 27.7565L22.6996 19.4953Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore22
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:hidden md:basis-2/12 xl:block">
                                <a
                                    href="#"
                                    className="RecentAdsBanner relative h-full overflow-hidden"
                                >
                                    <Image
                                        src={Add2}
                                        className="hidden h-full w-10 xl:block"
                                    />
                                    <Image
                                        src={HmobspecialAds2}
                                        className="mt-4 h-full w-10 xl:hidden"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Last Visited Profiles */}
                <div className="recentPosts-section my-[20px]">
                    <div className="m-auto px-4">
                        <div className="mb-[20px] md-down:flex md-down:items-end md-down:justify-between">
                            <h1 className="inCardTitle md:text-white-400 md:dark:text-white-400 relative text-lg font-semibold text-white md:p-0 md:text-2xl md:font-normal">
                                Last Visited Profiles
                            </h1>
                            <span className="shrink-0 text-sm font-normal text-red-50 underline md:hidden sm-down:pb-0">
                                See more
                            </span>
                        </div>
                        <div className="overflow-hidde flex-row gap-1 md:flex xl:max-h-[410px]">
                            <div className="basis-full xl:basis-10/12">
                                <div className="lastVisitedList">
                                    <div className="grid grid-cols-2 xl:grid-cols-5">
                                        <a
                                            href="#"
                                            className="blurImg relative h-[168px] overflow-hidden border border-[#5F5F5F]"
                                        >
                                            <Icons
                                                icon={WhiteStarIcon}
                                                className="absolute right-3 top-3 z-1 w-5"
                                            />

                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="blurImg relative h-[168px] overflow-hidden border border-[#5F5F5F]"
                                        >
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="blurImg relative h-[168px] overflow-hidden border border-[#5F5F5F]"
                                        >
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="blurImg relative h-[168px] overflow-hidden border border-[#5F5F5F]"
                                        >
                                            <Icons
                                                icon={WhiteStarIcon}
                                                className="absolute right-3 top-3 z-1 w-5"
                                            />

                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10 blur-sm"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                    Singapore, Singapore
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="blurImg relative hidden h-[168px] overflow-hidden border border-[#5F5F5F] xl:block"
                                        >
                                            <Image
                                                src={Modelimage}
                                                className="h-full w-10"
                                            />
                                            <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                    UniGaryD
                                                </h3>
                                                <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                    Singapore, Singapore
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* LIVE Cam */}
                                <div className="liveCamList my-[20px]">
                                    <div className="mb-[20px] md-down:flex md-down:items-end md-down:justify-between">
                                        <h1 className="inCardTitle md:text-white-400 md:dark:text-white-400 relative text-lg font-semibold text-white md:p-0 md:text-2xl md:font-normal">
                                            LIVE Cam
                                        </h1>
                                        <span className="shrink-0 text-sm font-normal text-red-50 underline md:hidden sm-down:pb-0">
                                            See more
                                        </span>
                                    </div>
                                    <div className="liveViewList">
                                        <div className="liveCam grid grid-cols-2 xl:grid-cols-5">
                                            <a
                                                href="#"
                                                className="relative h-[168px] overflow-hidden border border-[#5F5F5F]"
                                            >
                                                <Icons
                                                    icon={WhiteStarIcon}
                                                    className="absolute right-3 top-3 z-1 w-5"
                                                />

                                                {/* <svg
                                                className="pointer-events-none absolute right-[13px] top-[10px]"
                                                width="36"
                                                height="26"
                                                viewBox="0 0 36 26"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.2024 1.23108C8.87862 1.88195 8.87862 2.93722 8.2024 3.5881C2.79092 8.79677 2.79092 17.2417 8.2024 22.4504C8.87862 23.1012 8.87862 24.1565 8.2024 24.8074C7.52619 25.4583 6.42982 25.4583 5.7536 24.8074C-1.01032 18.297 -1.01032 7.74149 5.7536 1.23108C6.42982 0.580201 7.52619 0.580201 8.2024 1.23108ZM30.2479 1.23108C37.0118 7.74149 37.0118 18.297 30.2479 24.8074C29.5717 25.4583 28.4753 25.4583 27.7991 24.8074C27.1229 24.1565 27.1229 23.1012 27.7991 22.4504C33.2106 17.2417 33.2106 8.79677 27.7991 3.5881C27.1229 2.93722 27.1229 1.88195 27.7991 1.23108C28.4753 0.580201 29.5717 0.580201 30.2479 1.23108ZM13.3393 6.02003C14.0156 6.67091 14.0156 7.72618 13.3393 8.37706C10.6884 10.9287 10.6884 15.0656 13.3393 17.6172C14.0156 18.2681 14.0156 19.3234 13.3393 19.9743C12.6631 20.6251 11.5668 20.6251 10.8905 19.9743C6.88715 16.1209 6.88715 9.87339 10.8905 6.02003C11.5668 5.36916 12.6631 5.36916 13.3393 6.02003ZM25.3881 6.02003C29.3915 9.87339 29.3915 16.1209 25.3881 19.9743C24.7119 20.6251 23.6155 20.6251 22.9393 19.9743C22.2631 19.3234 22.2631 18.2681 22.9393 17.6172C25.5903 15.0656 25.5903 10.9287 22.9393 8.37706C22.2631 7.72618 22.2631 6.67091 22.9393 6.02003C23.6155 5.36916 24.7119 5.36916 25.3881 6.02003ZM18.1393 10.6357C19.5738 10.6357 20.7367 11.755 20.7367 13.1357C20.7367 14.5165 19.5738 15.6357 18.1393 15.6357C16.7049 15.6357 15.542 14.5165 15.542 13.1357C15.542 11.755 16.7049 10.6357 18.1393 10.6357Z"
                                                    fill="#07B40E"
                                                />
                                            </svg> */}
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        UniGaryD
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                        Singapore, Singapore
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative h-[168px] overflow-hidden border border-[#5F5F5F]"
                                            >
                                                {/* <Icons icon={WhiteStarIcon} className="w-5 absolute top-3 right-3 z-1" /> */}

                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        UniGaryD
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                        Singapore, Singapore
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative h-[168px] overflow-hidden border border-[#5F5F5F]"
                                            >
                                                <svg
                                                    className="pointer-events-none absolute right-[13px] top-[10px]"
                                                    width="36"
                                                    height="26"
                                                    viewBox="0 0 36 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8.2024 1.23108C8.87862 1.88195 8.87862 2.93722 8.2024 3.5881C2.79092 8.79677 2.79092 17.2417 8.2024 22.4504C8.87862 23.1012 8.87862 24.1565 8.2024 24.8074C7.52619 25.4583 6.42982 25.4583 5.7536 24.8074C-1.01032 18.297 -1.01032 7.74149 5.7536 1.23108C6.42982 0.580201 7.52619 0.580201 8.2024 1.23108ZM30.2479 1.23108C37.0118 7.74149 37.0118 18.297 30.2479 24.8074C29.5717 25.4583 28.4753 25.4583 27.7991 24.8074C27.1229 24.1565 27.1229 23.1012 27.7991 22.4504C33.2106 17.2417 33.2106 8.79677 27.7991 3.5881C27.1229 2.93722 27.1229 1.88195 27.7991 1.23108C28.4753 0.580201 29.5717 0.580201 30.2479 1.23108ZM13.3393 6.02003C14.0156 6.67091 14.0156 7.72618 13.3393 8.37706C10.6884 10.9287 10.6884 15.0656 13.3393 17.6172C14.0156 18.2681 14.0156 19.3234 13.3393 19.9743C12.6631 20.6251 11.5668 20.6251 10.8905 19.9743C6.88715 16.1209 6.88715 9.87339 10.8905 6.02003C11.5668 5.36916 12.6631 5.36916 13.3393 6.02003ZM25.3881 6.02003C29.3915 9.87339 29.3915 16.1209 25.3881 19.9743C24.7119 20.6251 23.6155 20.6251 22.9393 19.9743C22.2631 19.3234 22.2631 18.2681 22.9393 17.6172C25.5903 15.0656 25.5903 10.9287 22.9393 8.37706C22.2631 7.72618 22.2631 6.67091 22.9393 6.02003C23.6155 5.36916 24.7119 5.36916 25.3881 6.02003ZM18.1393 10.6357C19.5738 10.6357 20.7367 11.755 20.7367 13.1357C20.7367 14.5165 19.5738 15.6357 18.1393 15.6357C16.7049 15.6357 15.542 14.5165 15.542 13.1357C15.542 11.755 16.7049 10.6357 18.1393 10.6357Z"
                                                        fill="#07B40E"
                                                    />
                                                </svg>
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        UniGaryD
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                        Singapore, Singapore
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative h-[168px] overflow-hidden border border-[#5F5F5F]"
                                            >
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        UniGaryD
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-sm text-white md:p-0">
                                                        Singapore, Singapore
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden h-[168px] overflow-hidden border border-[#5F5F5F] xl:block"
                                            >
                                                <svg
                                                    className="pointer-events-none absolute right-[13px] top-[10px]"
                                                    width="36"
                                                    height="26"
                                                    viewBox="0 0 36 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8.2024 1.23108C8.87862 1.88195 8.87862 2.93722 8.2024 3.5881C2.79092 8.79677 2.79092 17.2417 8.2024 22.4504C8.87862 23.1012 8.87862 24.1565 8.2024 24.8074C7.52619 25.4583 6.42982 25.4583 5.7536 24.8074C-1.01032 18.297 -1.01032 7.74149 5.7536 1.23108C6.42982 0.580201 7.52619 0.580201 8.2024 1.23108ZM30.2479 1.23108C37.0118 7.74149 37.0118 18.297 30.2479 24.8074C29.5717 25.4583 28.4753 25.4583 27.7991 24.8074C27.1229 24.1565 27.1229 23.1012 27.7991 22.4504C33.2106 17.2417 33.2106 8.79677 27.7991 3.5881C27.1229 2.93722 27.1229 1.88195 27.7991 1.23108C28.4753 0.580201 29.5717 0.580201 30.2479 1.23108ZM13.3393 6.02003C14.0156 6.67091 14.0156 7.72618 13.3393 8.37706C10.6884 10.9287 10.6884 15.0656 13.3393 17.6172C14.0156 18.2681 14.0156 19.3234 13.3393 19.9743C12.6631 20.6251 11.5668 20.6251 10.8905 19.9743C6.88715 16.1209 6.88715 9.87339 10.8905 6.02003C11.5668 5.36916 12.6631 5.36916 13.3393 6.02003ZM25.3881 6.02003C29.3915 9.87339 29.3915 16.1209 25.3881 19.9743C24.7119 20.6251 23.6155 20.6251 22.9393 19.9743C22.2631 19.3234 22.2631 18.2681 22.9393 17.6172C25.5903 15.0656 25.5903 10.9287 22.9393 8.37706C22.2631 7.72618 22.2631 6.67091 22.9393 6.02003C23.6155 5.36916 24.7119 5.36916 25.3881 6.02003ZM18.1393 10.6357C19.5738 10.6357 20.7367 11.755 20.7367 13.1357C20.7367 14.5165 19.5738 15.6357 18.1393 15.6357C16.7049 15.6357 15.542 14.5165 15.542 13.1357C15.542 11.755 16.7049 10.6357 18.1393 10.6357Z"
                                                        fill="#07B40E"
                                                    />
                                                </svg>
                                                <Image
                                                    src={Modelimage}
                                                    className="h-full w-10"
                                                />
                                                <div className="afterOverlay absolute bottom-0 left-0 px-[13px] pb-[8px]">
                                                    <h3 className="md:text-white-800 md:dark:text-white-800 block text-base font-bold text-white md:p-0">
                                                        UniGaryD
                                                    </h3>
                                                    <p className="md:text-white-400 md:dark:text-white-400 block text-base text-white md:p-0">
                                                        Singapore, Singapore
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden xl:block xl:basis-2/12">
                                <a
                                    href="#"
                                    className="RecentAdsBanner relative h-full overflow-hidden"
                                >
                                    <Image
                                        src={Modelimage}
                                        className="hidden h-full w-10 xl:block"
                                    />
                                    <Image
                                        src={HtopAdimage}
                                        className="mt-4 h-full w-10 xl:hidden"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*     RentBoys Special Ads */}
                <div className="recentPosts-section my-[20px]">
                    <div className="m-auto px-4">
                        <div className="mb-[20px] md-down:flex md-down:items-end md-down:justify-between">
                            <h1 className="inCardTitle md:text-white-400 md:dark:text-white-400 relative text-lg font-semibold text-white md:p-0 md:text-2xl md:font-normal">
                                RentBoys Special Ads
                            </h1>
                            <span className="shrink-0 text-sm font-normal text-red-50 underline md:hidden sm-down:pb-0">
                                See more
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="basis-4/12">
                                <a
                                    href="#"
                                    className="RecentAdsBanner block overflow-hidden"
                                >
                                    <Image
                                        src={specialAdd1}
                                        className="w-10 transition"
                                    />
                                </a>
                            </div>
                            <div className="basis-4/12">
                                <a
                                    href="#"
                                    className="RecentAdsBanner verflow-hidden block"
                                >
                                    <Image
                                        src={specialAdd2}
                                        className="w-10 transition"
                                    />
                                </a>
                            </div>
                            <div className="basis-4/12">
                                <a
                                    href="#"
                                    className="RecentAdsBanner block overflow-hidden"
                                >
                                    <Image
                                        src={specialAdd3}
                                        className="w-10 transition"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
