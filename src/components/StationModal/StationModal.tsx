"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import InfoCard from "@/components/InfoCard";
import Modal from "@/components/Modal";
import Spinner from "@/components/Spinner";
import { Station } from "@/lib/dev-academy-assignment";
import { formatDistance, formatDuration } from "@/lib/formatStationStatistics";

import TopDestinationsTable from "./TopDestinationsTable";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export const StationModal = () => {
    const [station, setStation] = useState<Station>();
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const params = useSearchParams();
    const stationId = params.get("station");

    const closeModal = () => {
        setStation(undefined);
        router.push("/");
    };

    const changeStation = (id: number) => router.push("/" + "?station=" + id);

    useEffect(() => {
        if (stationId) {
            (async () => {
                const res = await fetch(`${APP_URL}/api/stations/${stationId}`);
                if (res.ok && res.status == 200) {
                    setStation(await res.json());
                    setLoading(false);
                }
            })();
        }
    }, [stationId]);

    if (!stationId || (!station && !loading)) return null;
    return (
        <Modal handleClose={closeModal}>
            {loading || !station ? (
                <Spinner />
            ) : (
                <div className="md:w-[40vw] 3xl:w-[35vw] max-w-5xl">
                    <div className="text-3xl font-semibold">{station.name}</div>
                    <div className="text-lg">{station.address}</div>
                    <div className="pb-4">
                        <div className="my-4 grid lg:grid-cols-2 gap-4">
                            <InfoCard title={"Journeys started"} value={station.numOfJourneysStarting} />
                            <InfoCard title={"Journeys ended"} value={station.numOfJourneysEnding} />
                            <InfoCard
                                title={"Average distance"}
                                value={formatDistance(station.averageDistanceOfJourneys)}
                            />
                            <InfoCard
                                title={"Average duration"}
                                value={formatDuration(station.averageDurationOfJourneys)}
                            />
                        </div>
                        <div className="text-xl py-1.5">Top destinations</div>
                        <TopDestinationsTable
                            destinations={station.topDestinations}
                            changeStationHandler={(id: number) => changeStation(id)}
                        />
                    </div>
                </div>
            )}
        </Modal>
    );
};
