/**
 * Adds unit to the distance given as meters and with 1 decimal number.
 * If the distance is bigger than 10000 meters, converts it to kilometers.
 * @param distance - distance in meters
 * @example
 * formatDistance(123.123)
 * //Returns: 123.1 m
 */
export const formatDistance = (distance: number): String => {
    if (isNaN(distance)) return "";

    if (distance > 10000) {
        const kilometers = Math.fround(distance / 1000).toFixed(1);
        return `${kilometers} km`;
    }

    return distance.toFixed(1) + " m";
};

/**
 * Formats duration given as seconds to string representation
 * in ss, mm:ss or hh:mm:ss format depending on the duration
 * @param duration - duration in seconds
 * @example
 *
 * formatDuration(100)
 * //Returns: 1min 40s
 *
 * formatDuration(3601)
 * //Returns: 1h 0min 1s
 */
export const formatDuration = (duration: number): String => {
    if (isNaN(duration) || duration < 0) return "";
    if (duration < 60) return duration + "s";

    if (duration >= 3600) {
        const hours = Math.floor(duration / 3600);
        const mins = Math.floor((duration % 3600) / 60);
        const seconds = duration % 60;
        return `${hours}h ${mins}min ${seconds}s`;
    }

    const mins = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${mins}min ${seconds}s`;
};
