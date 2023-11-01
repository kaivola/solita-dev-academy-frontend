"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Modal from "@/components/Modal";
import { Station } from "@/lib/dev-academy-assignment";

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
            const res = await fetch(`http://localhost:3000/api/stations/${stationId}`);
            if (res.ok && res.status == 200) {
                setStation(await res.json());
            }
        })();
    }, [stationId]);

    if (!station || !stationId) return null;
    return (
        <Modal handleClose={closeModal}>
            <div className="bg-slate-50 w-2/5 p-8 rounded-2xl shadow-xl mb-16">
                <div className="text-2xl text-slate-800">{station.stationName}</div>
                <div className="text-lg text-slate-800">{station.stationAddress}</div>
            </div>
        </Modal>
    );
};
