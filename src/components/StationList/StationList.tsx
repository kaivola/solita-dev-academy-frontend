import { Station } from "@/lib/dev-academy-assignment";

type Props = {
    stations: Station[];
};

export const StationList = ({ stations }: Props) => {
    return (
        <div className="absolute top-0 bottom-0 left-0 z-[999] h-[90%] p-8 ml-8 my-auto bg-white rounded-3xl shadow-lg">
            <div className="h-full overflow-auto">
                {stations.map((c) => {
                    return <div key={c.id}>{c.stationName}</div>;
                })}
            </div>
        </div>
    );
};
