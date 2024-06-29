import React from "react";
import BackgroundImg from "@/assets/img/landing-bg2.png";
import { Men1Icon, Men2Icon, Men3Icon } from "@/components/icons/solid";
import Button from "@/components/Button";
import Icons from "@/components/icons/Component";
import { Link } from "react-router-dom";

const consent = () => {
    return (
        <div className="bg-black text-white min-h-screen md:px-20">
            <div
                className="min-h-screen bg-cover bg-no-repeat bg-center relative overflow-hidden"
                style={{
                    backgroundImage: `url(${BackgroundImg})`
                }}
            >
                <h2 className="absolute z-20 top-6 left-[50%] translate-x-[-50%] py-8 text-center text-6xl md:text-7xl xl:text-7xl font-normal uppercase">
                    Rent&nbsp;<span className="text-red-50">Boys</span>
                </h2>
                <div className="max-w-7xl mx-auto relative min-h-screen bg-cover bg-no-repeat bg-center"
                >
                    <Icons src={Men1Icon} className="absolute left-0 top-80 lg-down:hidden" />
                    <Icons src={Men2Icon} className="absolute left-[53%] translate-x-[-50%]" />
                    <Icons src={Men3Icon} className="absolute right-40 top-20 lg-down:hidden" />
                </div>
                <div className="px-4 md:px-0 mx-auto w-full md:max-w-xl text-center absolute bottom-10 translate-x-[-50%] left-[50%]">
                    <p className="text-base">
                        By entering site, I agree that I am over 18 years old,
                        and I have read and accept the{" "}
                        <Link to="/terms-of-service"><span className="text-red-200 font-bold underline">Terms of Service</span>,{" "}</Link>
                        <Link to="/privacy-policy">
                            <span className="text-red-200 font-bold underline">Privacy Policy</span>
                        </Link> and all{" "}
                        <Link to="/cookie-policy"> <span className="text-red-200 font-bold underline">Cookies</span></Link>
                        or customize
                        cookies <span className="text-red-200 font-bold underline">here</span>
                    </p>
                    <div className="flex justify-center mt-6 mb-4">
                        <Button
                            children="I Agree - Enter RentBoys"
                            themes="white"
                            className="rounded-xl w-full max-w-sm text-xl font-bold text-white/70"
                        />
                    </div>
                    <Link to="/">
                        <span className="text-red-200 font-normal text-sm">
                            I disagree - Exit this site
                        </span>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default consent;
