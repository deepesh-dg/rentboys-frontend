import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex-none">
            <div className="pt-8">
                <div className="text-md my-6 flex flex-wrap justify-center gap-x-6 gap-y-4 px-4 text-white sm:px-8">
                    <Link to="/terms-of-service" className="text-lg hover:text-red-50 text-white">
                        T & C
                    </Link>
                    <Link to="/legal" className="text-lg hover:text-red-50 text-white">
                        Legal
                    </Link>
                    <Link to="privacy-policy" className="text-lg hover:text-red-50 text-white">
                        Privacy Policy
                    </Link>
                    <Link to="contact" className="text-lg hover:text-red-50 text-white">
                        Contact Us
                    </Link>
                    <Link to="cookie-policy" className="text-lg hover:text-red-50 text-white">
                        Cookie Policy
                    </Link>
                    <Link to="dmca-notice" className="text-lg hover:text-red-50 text-white">
                        DMCA Notice
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center bg-[#121212] px-4 py-[15px] text-zinc-800 sm:px-8 lg:px-12">
                    <p className="text-lg text-center text-white">
                        2024 © RentBoys All rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
