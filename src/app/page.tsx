import dynamic from "next/dynamic";

import { Station } from "@/lib/dev-academy-assignment";

const StationMap = dynamic(() => import("src/components/StationMap/StationMap"), { ssr: false });

const Home = async () => {
    const res = await fetch("http://localhost:3000/api/stations");
    const stations: Station[] = await res.json();

    if (!stations) return null;
    return (
        <div className="h-full flex">
            <div>
                {stations.map((c) => {
                    return <div key={c.id}>{c.stationName}</div>;
                })}
            </div>
            <StationMap stations={stations} />
        </div>
    );
};
export default Home;
