"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    id: number;
    name: string;
    onClickHandler: () => void;
};

export const StationListItem = ({ id, name, onClickHandler }: Props) => {
    return (
        <div className="px-8 border-b flex items-center justify-between hover:bg-slate-100">
            <div
                onClick={() => onClickHandler()}
                className="rounded-full flex items-center justify-between w-full h-12 hover:cursor-pointer"
            >
                <div className="text-black overflow-hidden">{name}</div>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
};
