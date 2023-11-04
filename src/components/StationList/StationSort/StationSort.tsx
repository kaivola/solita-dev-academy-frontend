import CheapRuler from "cheap-ruler";
import { Dispatch, SetStateAction, useMemo } from "react";

import Dropdown from "@/components/Dropdown";
import { Station } from "@/lib/dev-academy-assignment";

type Props = {
    stations: Station[];
    setStations: Dispatch<SetStateAction<Station[]>>;
};

enum SortType {
    "ALPHABETICAL",
    "DISTANCE"
}

const sortOptions: DropdownOptions[] = [
    {
        title: "Aakkosjärjestys",
        value: SortType.ALPHABETICAL
    },
    {
        title: "Etäisyys",
        value: SortType.DISTANCE
    }
];

const positionOptions: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 60000
};

const getPosition = (options?: PositionOptions): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
        if (typeof window !== "undefined" && navigator) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        }
    });
};

export const StationSort = ({ stations, setStations }: Props) => {
    const distanceSort = useMemo(async () => {
        const ruler = new CheapRuler(60.2, "meters");
        return getPosition(positionOptions).then((position) => {
            return [...stations].sort(
                (a, b) =>
                    ruler.distance(
                        [parseFloat(a.coordinateX), parseFloat(a.coordinateY)],
                        [position.coords.longitude, position.coords.latitude]
                    ) -
                    ruler.distance(
                        [parseFloat(b.coordinateX), parseFloat(b.coordinateY)],
                        [position.coords.longitude, position.coords.latitude]
                    )
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSortSelect = async (selected: DropdownOptions) => {
        if (selected.value === SortType.DISTANCE) {
            setStations(await distanceSort);
        } else {
            setStations([...stations].sort((a, b) => a.stationName.localeCompare(b.stationName)));
        }
    };
    return (
        <div className="pr-5 pl-8 border-b">
            <Dropdown title={"Järjestys"} onSelect={handleSortSelect} options={sortOptions} />
        </div>
    );
};
