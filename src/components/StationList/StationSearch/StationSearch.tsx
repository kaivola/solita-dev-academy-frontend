import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Station } from "@/lib/dev-academy-assignment";

type Props = {
    stations: Station[];
    setStations: Dispatch<SetStateAction<Station[]>>;
};

export const StationSearch = ({ stations, setStations }: Props) => {
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        setStations(
            stations.filter(
                (station) =>
                    station.stationName.toLowerCase().includes(query.toLowerCase()) ||
                    station.stationAddress.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, setStations, stations]);

    const handleChange = (val: string) => setQuery(val);

    const clearSearch = () => setQuery("");

    return (
        <div className="flex">
            <input
                className="border-y-2 border-l-2 h-11 ml-6 my-2 pl-2 rounded-l-md focus:outline-none"
                placeholder="Hae asemaa"
                onChange={(event) => handleChange(event.target.value)}
                value={query}
            />
            <div className="flex justify-center items-center w-full mr-5 border-y-2 border-r-2 my-2 h-11 rounded-r-md">
                <FontAwesomeIcon
                    icon={faClose}
                    className={"text-gray-700 ml-8 hover:cursor-pointer"}
                    size="lg"
                    onClick={() => clearSearch()}
                />
            </div>
        </div>
    );
};
