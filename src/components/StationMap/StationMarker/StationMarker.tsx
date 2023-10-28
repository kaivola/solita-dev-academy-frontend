import L from "leaflet";
import { renderToString } from "react-dom/server";
import { Marker, Popup } from "react-leaflet";

import { StationIcon } from "@/components/StationMap/MarkerIcon";
import { Station } from "@/lib/dev-academy-assignment";

type Props = {
    station: Station;
};

const stationIcon = L.divIcon({ html: renderToString(<StationIcon />), iconSize: [0, 0] });

export const StationMarker = ({ station }: Props) => {
    return (
        <div>
            <Marker
                key={`marker-${station.id}`}
                position={[parseFloat(station.coordinateY), parseFloat(station.coordinateX)]}
                icon={stationIcon}
                riseOnHover
            >
                <Popup>
                    <div className="font-bold text-lg">{station.stationName}</div>
                    <div className="text-base text-slate-600">{station.stationAddress}</div>
                    <a href={`/station/${station.id}`} className="cursor-pointer">
                        Avaa aseman tiedot
                    </a>
                </Popup>
            </Marker>
        </div>
    );
};