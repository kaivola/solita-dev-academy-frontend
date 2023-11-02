import { Dispatch, SetStateAction } from "react";

import { Station } from "@/lib/dev-academy-assignment";

type Props = {
    stations: Station[];
    setStations: Dispatch<SetStateAction<Station[]>>;
};

export const StationSearch = ({ stations, setStations }: Props) => {
    const handleInput = (val: String) => {
        setStations(
            stations.filter(
                (station) =>
                    station.stationName.toLowerCase().includes(val.toLowerCase()) ||
                    station.stationAddress.toLowerCase().includes(val.toLowerCase())
            )
        );
    };

    return (
        <input
            className="bg-gray-100 h-10 m-2 rounded-md pl-2"
            placeholder="Hae asemaa"
            onChange={(event) => handleInput(event.target.value)}
        />
    );
};
