"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

type Props = {
    id: number;
    name: string;
};

export const StationListItem = ({ id, name }: Props) => {
    const router = useRouter();

    const handleClick = (id: number) => {
        router.push("/" + "?station=" + id);
    };

    return (
        <div className="px-8 border-b flex items-center justify-between hover:bg-slate-100">
            <div
                onClick={() => handleClick(id)}
                className="rounded-full flex items-center justify-between w-full h-12 hover:cursor-pointer"
            >
                <div className="text-black">{name}</div>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
};
