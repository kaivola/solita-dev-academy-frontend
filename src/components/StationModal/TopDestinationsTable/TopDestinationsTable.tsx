import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TopDestination } from "@/lib/dev-academy-assignment";

type Props = {
    destinations: TopDestination[];
    changeStationHandler: (id: number) => void;
};

export const TopDestinationsTable = ({ destinations, changeStationHandler }: Props) => {
    return (
        <div className="border-2 border-gray-300 shadow-md rounded-lg p-3 pt-2">
            <table className="w-full">
                <thead className="h-8 tracking-wider">
                    <tr className="text-left">
                        <th className="w-1/2">Station</th>
                        <th className="pl-4 md:pl-0">Journeys</th>
                    </tr>
                </thead>
                <tbody>
                    {destinations
                        .sort((a, b) => b.count - a.count)
                        .map((d) => {
                            return (
                                <tr
                                    key={d.station.id}
                                    className="hover:bg-gray-100 cursor-pointer"
                                    onClick={() => changeStationHandler(d.station.id)}
                                >
                                    <td>{d.station.name}</td>
                                    <td className="pl-4 md:pl-0">{d.count}</td>
                                    <td className="w-6">
                                        <FontAwesomeIcon icon={faChevronRight} size={"lg"} />
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};
