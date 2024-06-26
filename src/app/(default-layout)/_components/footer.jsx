import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex-none">
            <div className="pt-8">
                <div className="text-md my-6 flex flex-wrap justify-center gap-x-6 gap-y-4 px-4 text-white sm:px-8">
                    <Link
                        to="/terms-of-service"
                        className="text-lg text-white hover:text-red-50"
                    >
                        T & C
                    </Link>
                    <Link
                        to="/legal"
                        className="text-lg text-white hover:text-red-50"
                    >
                        Legal
                    </Link>
                    <Link
                        to="privacy-policy"
                        className="text-lg text-white hover:text-red-50"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        to="contact"
                        className="text-lg text-white hover:text-red-50"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="cookie-policy"
                        className="text-lg text-white hover:text-red-50"
                    >
                        Cookie Policy
                    </Link>
                    <Link
                        to="dmca-notice"
                        className="text-lg text-white hover:text-red-50"
                    >
                        DMCA Notice
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center bg-[#121212] px-4 py-[15px] text-zinc-800 sm:px-8 lg:px-12">
                    <p className="text-center text-lg text-white">
                        2024 © RentBoys All rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
