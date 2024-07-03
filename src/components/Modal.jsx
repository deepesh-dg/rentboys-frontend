import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Icons from "./icons/Component";
import { ClosecircleIcon } from "./icons/outline";
import parse from "html-react-parser";

export default function Modal({ isOpen, close, data }) {
    return (
        <>
            <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={close}
            >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-screen items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="data-[closed]:transform-[scale(95%)] z-50 mx-auto flex w-full max-w-5xl flex-col items-center gap-y-6 rounded-2xl border border-gray-300 bg-black/90 px-2 py-8 text-white shadow-sm duration-300 ease-out data-[closed]:opacity-0 md:px-6"
                        >
                            <DialogTitle
                                as="h3"
                                className="relative w-full px-4 text-base/7 font-medium text-white"
                            >
                                <Icons
                                    icon={ClosecircleIcon}
                                    className="absolute -top-3 right-0 w-7 cursor-pointer md:-right-2"
                                    onClick={close}
                                />
                            </DialogTitle>
                            <p className="h-[70vh] overflow-y-auto">
                                {parse(data?.body || "")}
                            </p>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
