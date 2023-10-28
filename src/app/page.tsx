import dynamic from "next/dynamic";

import StationList from "@/components/StationList";
import { Station } from "@/lib/dev-academy-assignment";

const StationMap = dynamic(() => import("src/components/StationMap"), { ssr: false });

const Home = async () => {
    const res = await fetch("http://localhost:3000/api/stations");
    const stations: Station[] = await res.json();

    if (!stations) return null;
    return (
        <div className="h-full relative">
            <StationList stations={stations} />
            <StationMap stations={stations} />
        </div>
    );
};
export default Home;
