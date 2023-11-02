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
