import { formatDistance } from "../src/lib/formatStationStatistics";

describe("formatDistance", () => {
    it("should return empty on invalid distance", () => {
        const dist = "123132131abc";
        const res = formatDistance(dist);
        expect(res).toBe("");
    });
    it("should add unit", () => {
        const dist = "1234.0";
        const res = formatDistance(dist);
        expect(res).toBe("1234.0 m");
    });
    it("should convert meters to kilometers for long distances", () => {
        const dist = "12345.0";
        const res = formatDistance(dist);
        expect(res).toBe("12.3 km");
    });
});
