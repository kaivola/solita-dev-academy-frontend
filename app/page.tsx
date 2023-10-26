import { Page, Station } from "@/lib/dev-academy-assignment";
import dynamic from "next/dynamic";

const StationMap = dynamic(() => import("@/app/components/StationMap/StationMap"), { ssr: false });

const Home = async () => {
    const res = await fetch("http://localhost:3000/api/stations");
    const stations: Page<Station> = await res.json();

    if (!stations) return null;
    return (
        <div className="h-full flex">
            <div>
                {stations.content.map((c) => {
                    return <div key={c.id}>{c.stationName}</div>;
                })}
            </div>
            <StationMap />
        </div>
    );
};
export default Home;
