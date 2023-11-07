import { useState } from "react";

type Props = {
    children?: string | JSX.Element | JSX.Element[] | undefined;
};
export const StationListMobile = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <div className="w-full h-[5%] absolute top-0 left-0 z-[999] bg-white pt-4 text-base">
                {children}
            </div>
            <div className="w-full bg-white py-4 absolute bottom-0 left-0" onClick={() => setIsOpen(!isOpen)}>
                Hello
            </div>
        </div>
    );
};
