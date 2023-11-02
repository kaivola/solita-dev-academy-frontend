export const formatDistance = (distance: string): String => {
    const re = /[0-9]*\.[0-9]{1}/;
    if (!re.test(distance)) return "";

    if (distance.length > 6) {
        const meters = parseInt(distance.split(".")[0]);
        const kilometers = Math.fround(meters / 1000).toFixed(1);
        return `${kilometers} km`;
    }

    return distance + " m";
};

export const formatDuration = (duration: number): String => {
    if (isNaN(duration) || duration < 0) return "";
    if (duration < 60) return duration + "s";

    if (duration > 3600) {
        const hours = Math.floor(duration / 3600);
        const mins = Math.floor((duration % 3600) / 60);
        const seconds = duration % 60;
        return `${hours}h ${mins}min ${seconds}s`;
    }

    const mins = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${mins}min ${seconds}s`;
};
