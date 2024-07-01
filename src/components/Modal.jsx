import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Icons from './icons/Component'
import { ClosecircleIcon } from './icons/outline'
import parse from "html-react-parser";

export default function Modal({ isOpen, close, data }) {
    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-screen items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className='z-50 flex w-full max-w-5xl mx-auto flex-col items-center gap-y-6 rounded-2xl border border-gray-300 bg-black/90 px-2 md:px-6 py-8 text-white shadow-sm duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
                        >
                            {/* <DialogTitle as="h3" className="text-base/7 font-medium text-white w-full relative">
                                <Icons icon={ClosecircleIcon} className='w-7 cursor-pointer absolute -top-3 -right-2' onClick={close} />
                            </DialogTitle> */}
                            <p className='h-[70vh] overflow-y-auto'>
                                {parse(data?.body || "")}
                            </p>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}