"use client";

import { useState } from "react";

import { Station } from "@/lib/dev-academy-assignment";

import { StationListItem } from "./StationListItem/StationListItem";
import StationSearch from "./StationSearch";

type Props = {
    stations: Station[];
};

export const StationList = ({ stations }: Props) => {
    const [filteredStations, setFilteredStations] = useState<Station[]>(stations);

    return (
        <div className="absolute top-0 bottom-0 left-0 z-[999] h-[90%] py-4 ml-8 my-auto bg-white rounded-3xl shadow-lg w-1/4 2xl:w-1/6 3xl:w-[12.5%] flex flex-col">
            <StationSearch setStations={setFilteredStations} stations={stations} />
            <div className="h-full overflow-auto">
                {filteredStations.map((s) => (
                    <StationListItem key={s.id} id={s.id} name={s.stationName} />
                ))}
            </div>
        </div>
    );
};
