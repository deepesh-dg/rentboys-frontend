export default function Footer() {
    return (
        <footer className="flex-none">
            <div className="pt-[32px]">
                <div className="text-md my-[23px] flex flex-wrap justify-center gap-x-6 gap-y-4 px-4 text-white sm:px-8">
                    <a
                        className="text-md text-white hover:text-red"
                        href="#!"
                    >
                        T & C
                    </a>
                    <a
                        className="text-md text-white hover:text-red"
                        href="#!"
                    >
                        Legal
                    </a>
                    <a
                        className="text-md text-white hover:text-red"
                        href="#!"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="text-md text-white hover:text-red"
                        href="#!"
                    >
                        Contact Us
                    </a>
                    <a
                        className="text-md text-white hover:text-red"
                        href="#!"
                    >
                        Cookie Policy
                    </a>
                    <a
                        className="text-md text-white hover:text-red"
                        href="#!"
                    >
                        DMCA Notice
                    </a>
                </div>
                <div className="flex flex-wrap justify-center bg-[#121212] px-4 py-[15px] text-zinc-800 sm:px-8 lg:px-12">
                    <p className="text-md text-white text-center">
                        ©2024 Spencer Sharp. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}



