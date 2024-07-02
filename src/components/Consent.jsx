import React from "react";
import BackgroundImg from "@/assets/img/landing-bg2.png";
import { Men1Icon, Men2Icon, Men3Icon } from "@/components/icons/solid";
import Button from "@/components/Button";
import Icons from "@/components/icons/Component";
import { Link, useLocation } from "react-router-dom";
import { useState } from "@/hooks";

const allowedPath = ["/terms-of-service", "/privacy-policy", "/cookie-policy"];

const Consent = () => {
    const [isAgree, setIsAgree] = useState(false);

    const location = useLocation();

    if (isAgree || allowedPath.includes(location.pathname)) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-60 min-h-screen bg-black text-white md:px-20">
            <div
                className="absolute inset-0 bottom-0 left-0 right-0 top-0 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${BackgroundImg})`,
                }}
            />
            <div
                className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
                // style={{
                //     backgroundImage: `url(${BackgroundImg})`
                // }}
            >
                <h2 className="absolute left-[50%] top-6 z-20 translate-x-[-50%] py-8 text-center text-6xl font-normal uppercase md:text-7xl xl:text-7xl">
                    Rent&nbsp;<span className="text-red-50">Boys</span>
                </h2>
                <div className="relative mx-auto min-h-screen max-w-7xl bg-cover bg-center bg-no-repeat">
                    <Icons
                        src={Men1Icon}
                        className="absolute left-0 top-80 lg-down:hidden"
                    />
                    <Icons
                        src={Men2Icon}
                        className="absolute left-[53%] translate-x-[-50%]"
                    />
                    <Icons
                        src={Men3Icon}
                        className="absolute right-40 top-20 lg-down:hidden"
                    />
                </div>
                <div className="absolute bottom-10 left-[50%] mx-auto w-full translate-x-[-50%] px-4 text-center md:max-w-xl md:px-0">
                    <p className="text-base">
                        By entering site, I agree that I am over 18 years old,
                        and I have read and accept the{" "}
                        <Link to="/terms-of-service">
                            <span className="font-bold text-red-200 underline">
                                Terms of Service
                            </span>
                            ,{" "}
                        </Link>
                        <Link to="/privacy-policy">
                            <span className="font-bold text-red-200 underline">
                                Privacy Policy
                            </span>
                        </Link>{" "}
                        and all{" "}
                        <Link to="/cookie-policy">
                            {" "}
                            <span className="font-bold text-red-200 underline">
                                Cookies{" "}
                            </span>
                        </Link>
                        {/* or customize cookies{" "}
                        <span className="font-bold text-red-200 underline">
                            here
                        </span> */}
                    </p>
                    <div className="mb-4 mt-6 flex justify-center">
                        <Button
                            onClick={() => setIsAgree(true)}
                            children="I Agree - Enter RentBoys"
                            themes="white"
                            className="w-full max-w-sm rounded-xl text-xl font-bold text-white/70"
                        />
                    </div>
                    <Link to="/">
                        <span className="text-sm font-normal text-red-200">
                            I disagree - Exit this site
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Consent;
