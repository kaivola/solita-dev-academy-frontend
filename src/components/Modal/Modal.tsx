import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    children: string | JSX.Element | JSX.Element[] | undefined;
    handleClose: () => void;
};

export const Modal = ({ children, handleClose }: Props) => {
    return (
        <div className="fixed z-[9999] left-0 right-0 top-0 bottom-0 mx-auto bg-white/60 ">
            <div
                className="fixed right-0 top-0 m-12 py-2 px-3 hover:cursor-pointer bg-white rounded-full hover:bg-emerald-300"
                onClick={() => handleClose()}
            >
                <FontAwesomeIcon icon={faClose} size="2xl" />
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full">{children}</div>
        </div>
    );
};
