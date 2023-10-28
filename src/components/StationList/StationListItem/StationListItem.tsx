import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
    id: number;
    name: string;
};

export const StationListItem = ({ id, name }: Props) => {
    return (
        <div className="px-8 border-b flex items-center justify-between hover:bg-slate-100 hover:text-emerald-300">
            <Link
                href={`/stations/${id}`}
                className="rounded-full flex items-center justify-between w-full h-12"
            >
                <div className="text-black">{name}</div>
                <FontAwesomeIcon icon={faChevronRight} />
            </Link>
        </div>
    );
};
