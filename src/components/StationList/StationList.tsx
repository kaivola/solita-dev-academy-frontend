"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMap } from "react-leaflet";

import { Station } from "@/lib/dev-academy-assignment";

import { StationListItem } from "./StationListItem/StationListItem";
import StationSearch from "./StationSearch";
import StationSort from "./StationSort";

type Props = {
    stations: Station[];
};

export const StationList = ({ stations }: Props) => {
    const [sortedStations, setSortedStations] = useState<Station[]>(stations);
    const [filteredStations, setFilteredStations] = useState<Station[]>(stations);

    const router = useRouter();
    const map = useMap();

    const handleMarkerClick = (station: Station) => {
        router.push("/" + "?station=" + station.id);
        map.flyTo([station.coordinateY, station.coordinateX], 14);
    };

    return (
        <div className="absolute top-0 bottom-0 left-0 z-[999] h-[90%] py-4 ml-12 my-auto bg-white rounded-3xl shadow-lg 3xl:w-[12.5%] min-w-fit flex flex-col text-base">
            <StationSearch stations={sortedStations} setStations={setFilteredStations} />
            <StationSort stations={stations} setStations={setSortedStations} />
            <div className="h-full overflow-auto whitespace-nowrap">
                {filteredStations.map((s) => (
                    <StationListItem key={s.id} name={s.name} onClickHandler={() => handleMarkerClick(s)} />
                ))}
            </div>
        </div>
    );
};
