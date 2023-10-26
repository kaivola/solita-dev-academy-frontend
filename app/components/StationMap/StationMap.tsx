"use client";
import { Station } from "@/lib/dev-academy-assignment";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import StationMarker from "./StationMarker/StationMarker";

type Props = {
    stations: Station[];
};

const StationMap = ({ stations }: Props) => {
    return (
        <div className="h-full w-full">
            <MapContainer
                className="h-full"
                center={[60.1674, 24.944]}
                zoom={14}
                minZoom={11}
                maxBounds={[
                    [60.0, 24.2],
                    [60.4, 25.5]
                ]}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                {stations.map((station) => (
                    <StationMarker key={`marker-${station.id}`} station={station} />
                ))}
            </MapContainer>
        </div>
    );
};

export default StationMap;
