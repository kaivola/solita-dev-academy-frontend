"use client";

import { useEffect, useRef, useState } from "react";
import { useMap } from "react-leaflet";

import { Station } from "@/lib/dev-academy-assignment";

import { StationListItem } from "./StationListItem/StationListItem";
import StationSearch from "./StationSearch";
import StationSort from "./StationSort";

type Props = {
    stations: Station[];
};

const stopPropagation = (event: WheelEvent) => event.stopPropagation();

export const StationList = ({ stations }: Props) => {
    const [sortedStations, setSortedStations] = useState<Station[]>(stations);
    const [filteredStations, setFilteredStations] = useState<Station[]>(stations);

    const listRef = useRef<HTMLDivElement>(null);
    const map = useMap();

    useEffect(() => {
        const current = listRef.current;
        if (current) {
            current.addEventListener("wheel", stopPropagation);
            return () => current.removeEventListener("wheel", stopPropagation);
        }
    }, []);

    const handleMarkerClick = (station: Station) => {
        map.once("moveend", () => {
            map.eachLayer((layer) => {
                // prettier-ignore
                // @ts-expect-error _latlng doesn't exist in Layer type definition but exists in the object in runtime
                if (layer._latlng && (layer._latlng.lat === station.coordinateY && layer._latlng.lng === station.coordinateX)) {
                    layer.getPopup()?.openOn(map)
                }
            });
        });
        map.flyTo([station.coordinateY, station.coordinateX], 15);
    };

    return (
        <div className="absolute top-0 bottom-0 left-0 z-[999] h-[90%] py-4 ml-12 my-auto bg-white rounded-3xl shadow-lg 3xl:w-[12.5%] min-w-fit flex flex-col text-base">
            <StationSearch stations={sortedStations} setStations={setFilteredStations} />
            <StationSort stations={stations} setStations={setSortedStations} />
            <div className="h-full overflow-auto whitespace-nowrap" ref={listRef}>
                {filteredStations.map((s) => (
                    <StationListItem key={s.id} name={s.name} onClickHandler={() => handleMarkerClick(s)} />
                ))}
            </div>
        </div>
    );
};
