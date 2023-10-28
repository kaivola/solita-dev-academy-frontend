import { Station } from "@/lib/dev-academy-assignment";

import { StationListItem } from "./StationListItem/StationListItem";

type Props = {
    stations: Station[];
};

export const StationList = ({ stations }: Props) => {
    return (
        <div className="absolute top-0 bottom-0 left-0 z-[999] h-[90%] py-4 ml-8 my-auto bg-white rounded-3xl shadow-lg">
            <div className="h-full overflow-auto">
                {stations.map((s) => (
                    <StationListItem key={s.id} id={s.id} name={s.stationName} />
                ))}
            </div>
        </div>
    );
};
