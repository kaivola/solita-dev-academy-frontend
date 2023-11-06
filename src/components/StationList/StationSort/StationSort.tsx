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
        title: "Sort by Name",
        value: SortType.ALPHABETICAL
    },
    {
        title: "Sort by Distance",
        value: SortType.DISTANCE
    }
];

const positionOptions: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 60000,
    maximumAge: 300000
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
                        [a.coordinateX, a.coordinateY],
                        [position.coords.longitude, position.coords.latitude]
                    ) -
                    ruler.distance(
                        [b.coordinateX, b.coordinateY],
                        [position.coords.longitude, position.coords.latitude]
                    )
            );
        });
    }, [stations]);

    const handleSortSelect = async (selected: DropdownOptions) => {
        if (selected.value === SortType.DISTANCE) {
            setStations(await distanceSort);
        } else {
            setStations([...stations].sort((a, b) => a.name.localeCompare(b.name)));
        }
    };
    return (
        <div className="mr-5 ml-6 pl-2 mb-2 border-2 rounded-md">
            <Dropdown onSelect={handleSortSelect} options={sortOptions} />
        </div>
    );
};
