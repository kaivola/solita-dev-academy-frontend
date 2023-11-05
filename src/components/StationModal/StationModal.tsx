"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import InfoCard from "@/components/InfoCard";
import Modal from "@/components/Modal";
import { Station } from "@/lib/dev-academy-assignment";
import { formatDistance, formatDuration } from "@/lib/formatStationStatistics";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export const StationModal = () => {
    const router = useRouter();
    const [station, setStation] = useState<Station>();
    const params = useSearchParams();
    const stationId = params.get("station");

    const closeModal = () => {
        setStation(undefined);
        router.back();
    };

    useEffect(() => {
        if (!stationId) return;
        (async () => {
            const res = await fetch(`${APP_URL}/api/stations/${stationId}`);
            if (res.ok && res.status == 200) {
                setStation(await res.json());
            }
        })();
    }, [stationId]);

    if (!station || !stationId) return null;
    return (
        <Modal handleClose={closeModal}>
            <div className="text-3xl">{station.name}</div>
            <div className="text-lg">{station.address}</div>
            <div className="mt-4 grid lg:grid-cols-2 gap-4">
                <InfoCard title={"Asemalta alkaneet matkat"} value={station.numOfJourneysStarting} />
                <InfoCard title={"Asemalle päättyneet matkat"} value={station.numOfJourneysEnding} />
                <InfoCard
                    title={"Matkojen keskipituus"}
                    value={formatDistance(station.averageDistanceOfJourneys)}
                />
                <InfoCard
                    title={"Matkojen keskimääräinen kesto"}
                    value={formatDuration(station.averageDurationOfJourneys)}
                />
            </div>
        </Modal>
    );
};
