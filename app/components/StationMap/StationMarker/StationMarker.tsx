import { Station } from "@/lib/dev-academy-assignment";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import L from "leaflet";
import { renderToString } from "react-dom/server";
import { Marker, Popup } from "react-leaflet";

type Props = {
    station: Station;
};

const iconHtml = renderToString(
    <div className="flex flex-col justify-center items-center">
        <div className="-m-4 w-8 h-8 rounded-full bg-emerald-400 flex justify-center items-center">
            <FontAwesomeIcon icon={faBicycle} size={"xl"} />
        </div>
        <div className="border-x-[11px] border-x-transparent border-t-[10px] border-t-emerald-400 mt-3"></div>
    </div>
);

const stationIcon = L.divIcon({ html: iconHtml, iconSize: [0, 0] });

const StationMarker = ({ station }: Props) => {
    return (
        <div>
            <Marker
                key={`marker-${station.id}`}
                position={[parseFloat(station.coordinateY), parseFloat(station.coordinateX)]}
                icon={stationIcon}
                riseOnHover
            >
                <Popup></Popup>
            </Marker>
        </div>
    );
};

export default StationMarker;
