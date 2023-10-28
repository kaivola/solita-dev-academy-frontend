/* tslint:disable */
// Generated using typescript-generator version 2.9.456 on 2023-10-24 20:09:44.

export interface Station {
    id: number;
    stationName: string;
    stationAddress: string;
    coordinateX: string;
    coordinateY: string;
    statistics?: StationStatistics;
}

export interface StationStatistics {
    numOfJourneysStarting: number;
    numOfJourneysEnding: number;
    averageDistanceOfJourneys: number;
    averageDurationOfJourneys: number;
}

export interface PageImpl<T> extends Chunk<T>, Page<T> {}

export interface Pageable {
    offset: number;
    sort: Sort;
    pageSize: number;
    paged: boolean;
    pageNumber: number;
    unpaged: boolean;
}

export interface Sort extends Streamable<Order>, Serializable {
    sorted: boolean;
    unsorted: boolean;
}

export interface Serializable {}

export interface Chunk<T> extends Slice<T>, Serializable {}

export interface Page<T> extends Slice<T> {
    totalElements: number;
    totalPages: number;
}

export interface Streamable<T> extends Iterable<T>, Supplier<Stream<T>> {
    empty: boolean;
}

export interface Order extends Serializable {
    direction: Direction;
    property: string;
    ignoreCase: boolean;
    nullHandling: NullHandling;
    descending: boolean;
    ascending: boolean;
}

export interface Slice<T> extends Streamable<T> {
    first: boolean;
    size: number;
    content: T[];
    number: number;
    sort: Sort;
    numberOfElements: number;
    last: boolean;
    pageable: Pageable;
}

export interface Iterable<T> {}

export interface Supplier<T> {}

export interface Stream<T> extends BaseStream<T, Stream<T>> {}

export interface BaseStream<T, S> extends AutoCloseable {
    parallel: boolean;
}

export interface AutoCloseable {}

export type Direction = "ASC" | "DESC";

export type NullHandling = "NATIVE" | "NULLS_FIRST" | "NULLS_LAST";
