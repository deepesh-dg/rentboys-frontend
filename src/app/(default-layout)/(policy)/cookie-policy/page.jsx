import React from "react";
import { useLocation } from "react-router-dom";
import { pathToNameMapping } from "@/utils/pathMappings";

const Page = () => {
    const location = useLocation();
    const pathSegment = location.pathname.split("/")[1];
    const title = pathToNameMapping[pathSegment] || "Cookie Policy";

    return (
        <div className="w-full space-y-4 py-4">
            <h2 className="border-b border-gray-50 pb-1 text-xl font-bold text-red-50">
                {title}
            </h2>
            <p className="text-lg">As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored; however, this may downgrade or ‘break’ certain elements of the sites’ functionality.</p>
            <p className="text-lg">For more general information on cookies see the Wikipedia article on HTTP Cookies - <span className="text-red-50 underline"><a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank"></a>https://en.wikipedia.org/wiki/HTTP_cookie</span></p>
            <div className="font-medium text-lg flex items-center gap-x-2">
                <svg width="16" height="16" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.75988V2.97988C0 0.77321 1.56667 -0.133456 3.48 0.973211L5.02 1.86654L6.56 2.75988C8.47333 3.86654 8.47333 5.67321 6.56 6.77988L5.02 7.67321L3.48 8.56654C1.56667 9.65321 0 8.75321 0 6.53988V4.75988Z" fill="#FF0000" />
                </svg>
                <h3 className="text-lg font-medium">How We Use Cookies</h3>
            </div>
            <p className="text-lg">We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
            <div className="font-medium text-lg flex items-center gap-x-2">
                <svg width="16" height="16" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.75988V2.97988C0 0.77321 1.56667 -0.133456 3.48 0.973211L5.02 1.86654L6.56 2.75988C8.47333 3.86654 8.47333 5.67321 6.56 6.77988L5.02 7.67321L3.48 8.56654C1.56667 9.65321 0 8.75321 0 6.53988V4.75988Z" fill="#FF0000" />
                </svg>
                <h3 className="text-lg font-medium">The Cookies We Set</h3>
            </div>
            <ul className="list-disc [&>li]:ml-6 space-y-1">
                <li>Necessary Cookies</li>
            </ul>
            <p className="text-lg">Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies. For example, they include cookies for storing data about chat authentication, the user’s website session, the user’s search preferences and more.</p>
            <ul className="list-disc [&>li]:ml-6 space-y-1">
                <li>Marketing Cookies</li>
            </ul>
            <p className="text-lg">
                Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
            </p>
            <ul className="list-disc [&>li]:ml-6 space-y-1">
                <li>Marketing Cookies</li>
            </ul>
            <p className="text-lg">Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.</p>
            <ul className="list-disc [&>li]:ml-6 space-y-1">
                <li>Statistic Cookies</li>
            </ul>
            <p className="text-lg">Statistic cookies help website owners to understand how visitors interact with the website by collecting and reporting information anonymously. These may include data about the user’s device and behavior on the website.</p>
            <ul className="list-disc [&>li]:ml-6 space-y-1">
                <li>Live Cams Cookies</li>
            </ul>
            <p className="text-lg">Live Cams cookies help the user to enter the live cams website and store some information about the user’s actions on the website.</p>
            <div className="font-medium text-lg flex items-center gap-x-2">
                <svg width="16" height="16" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.75988V2.97988C0 0.77321 1.56667 -0.133456 3.48 0.973211L5.02 1.86654L6.56 2.75988C8.47333 3.86654 8.47333 5.67321 6.56 6.77988L5.02 7.67321L3.48 8.56654C1.56667 9.65321 0 8.75321 0 6.53988V4.75988Z" fill="#FF0000" />
                </svg>
                <h3 className="text-lg font-medium">Third-Party Cookies</h3>
            </div>
            <p className="text-lg">In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site.
            </p>
            <p className="text-lg">For example, this site uses Google Analytics, which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page - <span className="text-red-50"><a href="https://marketingplatform.google.com/about/analytics/" target="_blank">https://marketingplatform.google.com/about/analytics/</a></span></p>
        </div >
    );
};

export default Page;
