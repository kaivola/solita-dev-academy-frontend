/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-11-08 21:52:03.

export interface Station {
    id: number;
    name: string;
    address: string;
    coordinateX: number;
    coordinateY: number;
    numOfJourneysStarting: number;
    numOfJourneysEnding: number;
    averageDistanceOfJourneys: number;
    averageDurationOfJourneys: number;
    topDestinations: TopDestination[];
}

export interface TopDestination {
    station: Station;
    count: number;
}
