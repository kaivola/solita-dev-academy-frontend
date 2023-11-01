"use client";

import { useRouter } from "next/navigation";
import { Popup } from "react-leaflet/Popup";

type Props = {
    id: number;
    name: string;
    address: string;
};

export const StationPopup = ({ id, name, address }: Props) => {
    const router = useRouter();

    const openStationModal = () => {
        router.push("/" + "?station=" + id);
    };

    return (
        <Popup>
            <div className="font-bold text-lg">{name}</div>
            <div className="text-base text-slate-600">{address}</div>
            <div onClick={() => openStationModal()} className="cursor-pointer text-blue-600">
                Avaa aseman tiedot
            </div>
        </Popup>
    );
};
