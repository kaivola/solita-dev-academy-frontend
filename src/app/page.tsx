import dynamic from "next/dynamic";

import StationList from "@/components/StationList";
import StationModal from "@/components/StationModal";
import { Station } from "@/lib/dev-academy-assignment";

const StationMap = dynamic(() => import("src/components/StationMap"), { ssr: false });

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const Home = async () => {
    const res = await fetch(`${APP_URL}/api/stations`);
    const stations: Station[] = await res.json();

    if (!stations) return null;
    return (
        <div className="h-full relative">
            <StationModal />
            <StationList stations={stations} />
            <StationMap stations={stations} />
        </div>
    );
};
export default Home;
