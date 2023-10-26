import { Station } from "@/lib/dev-academy-assignment";
import { Marker, Popup } from "react-leaflet";

type Props = {
    station: Station;
};

const StationMarker = ({ station }: Props) => {
    return (
        <div>
            <Marker
                key={`marker-${station.id}`}
                position={[parseFloat(station.coordinateY), parseFloat(station.coordinateX)]}
            >
                <Popup></Popup>
            </Marker>
        </div>
    );
};

export default StationMarker;
