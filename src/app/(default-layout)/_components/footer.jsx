export default function Footer() {
    return (
        <footer className="flex-none">
            <div className="pt-[32px]">
                <div className="text-md my-[23px] flex flex-wrap justify-center gap-x-[35px] gap-y-[35px] px-4 text-white sm:px-8">
                    <a
                        className="text-md text-white hover:text-[#ff0000]"
                        href="#!"
                    >
                        T & C
                    </a>
                    <a
                        className="text-md text-white hover:text-[#ff0000]"
                        href="#!"
                    >
                        Legal
                    </a>
                    <a
                        className="text-md text-white hover:text-[#ff0000]"
                        href="#!"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="text-md text-white hover:text-[#ff0000]"
                        href="#!"
                    >
                        Contact Us
                    </a>
                    <a
                        className="text-md text-white hover:text-[#ff0000]"
                        href="#!"
                    >
                        Cookie Policy
                    </a>
                    <a
                        className="text-md text-white hover:text-[#ff0000]"
                        href="#!"
                    >
                        DMCA Notice
                    </a>
                </div>
                <div className="flex flex-wrap justify-center bg-[#121212] px-4 py-[15px] text-zinc-800 sm:px-8 lg:px-12">
                    <p className="text-md text-zinc-400 dark:text-zinc-500">
                        ©2024 Spencer Sharp. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
