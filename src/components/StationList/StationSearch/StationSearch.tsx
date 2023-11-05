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
                    station.name.toLowerCase().includes(query.toLowerCase()) ||
                    station.address.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, setStations, stations]);

    const handleChange = (val: string) => setQuery(val);

    const clearSearch = () => setQuery("");

    return (
        <div className="flex justify-between mr-5 ml-6 pl-2 mb-2 border-2 rounded-md h-12">
            <input
                className="focus:outline-none min-w-0"
                placeholder="Hae asemaa"
                onChange={(event) => handleChange(event.target.value)}
                value={query}
            />
            <div className="flex justify-center items-center pr-2">
                <FontAwesomeIcon
                    icon={faClose}
                    className={"text-gray-700 hover:cursor-pointer"}
                    size="lg"
                    onClick={() => clearSearch()}
                />
            </div>
        </div>
    );
};
