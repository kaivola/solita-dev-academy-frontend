import dynamic from "next/dynamic";

import StationModal from "@/components/StationModal";
import { Station } from "@/lib/dev-academy-assignment";

const StationMap = dynamic(() => import("src/components/StationMap"), { ssr: false });

const API_URL = process.env.NEXT_BACKEND_URL;

const Home = async () => {
    const res = await fetch(`${API_URL}/stations`);
    const stations: Station[] = await res.json();

    if (!stations) return null;
    return (
        <div className="h-full relative">
            <StationModal />
            <StationMap stations={stations} />
        </div>
    );
};
export default Home;
