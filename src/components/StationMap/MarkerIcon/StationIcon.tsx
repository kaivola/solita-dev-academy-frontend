import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MarkerIcon from "./MarkerIcon";

const StationIcon = () => {
    return (
        <MarkerIcon>
            <FontAwesomeIcon icon={faBicycle} size={"xl"} />
        </MarkerIcon>
    );
};

export default StationIcon;
