"use client";

import { useSearchParams } from "next/navigation";

import Modal from "@/components/Modal";

export const StationModal = () => {
    const params = useSearchParams();
    const stationId = params.get("station");

    if (!stationId) return null;
    return (
        <Modal>
            <div className="bg-white h-96 w-96">hello</div>
        </Modal>
    );
};
