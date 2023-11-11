export const formatDistance = (distance: number): String => {
    if (isNaN(distance)) return "";

    if (distance > 10000) {
        const kilometers = Math.fround(distance / 1000).toFixed(1);
        return `${kilometers} km`;
    }

    return distance.toFixed(1) + " m";
};

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
