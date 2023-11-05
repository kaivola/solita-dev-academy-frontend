import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

import { useClickOutside } from "@/hooks/useClickOutside";

type Props = {
    children: string | JSX.Element | JSX.Element[] | undefined;
    handleClose: () => void;
};

export const Modal = ({ children, handleClose }: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useClickOutside(ref, handleClose);
    return (
        <div className="fixed z-[9999] left-0 right-0 top-0 bottom-0 mx-auto bg-gradient-to-br from-emerald-50/50 to-white/50 ">
            <div
                className="fixed right-0 top-0 mt-6 mr-8 py-2 px-3 hover:cursor-pointer bg-white rounded-full hover:bg-emerald-300"
                onClick={() => handleClose()}
            >
                <FontAwesomeIcon icon={faClose} size="2xl" />
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full">
                <div className="xl:w-1/2 mb-16 bg-white p-8 sm:px-12 rounded-2xl shadow-xl" ref={ref}>
                    {children}
                </div>
            </div>
        </div>
    );
};
