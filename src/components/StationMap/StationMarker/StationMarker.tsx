import L from "leaflet";
import { renderToString } from "react-dom/server";
import { Marker } from "react-leaflet";

import { StationIcon } from "@/components/StationMap/MarkerIcon";
import { Station } from "@/lib/dev-academy-assignment";

import StationPopup from "./StationPopup";

type Props = {
    station: Station;
};

const stationIcon = L.divIcon({ html: renderToString(<StationIcon />), iconSize: [0, 0] });

export const StationMarker = ({ station }: Props) => {
    return (
        <Marker
            key={`marker-${station.id}`}
            position={[station.coordinateY, station.coordinateX]}
            icon={stationIcon}
            riseOnHover
        >
            <StationPopup id={station.id} name={station.name} address={station.address} />
        </Marker>
    );
};
