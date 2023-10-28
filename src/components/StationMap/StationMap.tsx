"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { renderToString } from "react-dom/server";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Station } from "@/lib/dev-academy-assignment";

import { ClusterIcon } from "./MarkerIcon";
import StationMarker from "./StationMarker";

type Props = {
    stations: Station[];
};

export const StationMap = ({ stations }: Props) => {
    return (
        <div className="h-full w-full">
            <MapContainer
                className="h-full"
                center={[60.225, 24.95]}
                zoom={11.3}
                minZoom={11}
                maxBounds={[
                    [60.0, 24.3],
                    [60.4, 25.6]
                ]}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                <MarkerClusterGroup
                    chunkedLoading
                    showCoverageOnHover={false}
                    disableClusteringAtZoom={14}
                    iconCreateFunction={function (cluster: any) {
                        return L.divIcon({
                            html: renderToString(<ClusterIcon count={cluster.getChildCount()} />)
                        });
                    }}
                >
                    {stations.map((station) => (
                        <StationMarker key={`marker-${station.id}`} station={station} />
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
};
