import { formatDuration } from "../src/lib/formatStationStatistics";

describe("formatDuration", () => {
    it("should return empty on invalid duration", () => {
        const duration = -1;
        const res = formatDuration(duration);
        expect(res).toBe("");
    });
    it("should work with sub 1 min durations", () => {
        const duration = 45;
        const res = formatDuration(duration);
        expect(res).toBe("45s");
    });
    it("should work with over 1 min durations1", () => {
        const duration = 100;
        const res = formatDuration(duration);
        expect(res).toBe("1min 40s");
    });
    it("should work with over 1 min durations2", () => {
        const duration = 1020;
        const res = formatDuration(duration);
        expect(res).toBe("17min 0s");
    });
    it("should work with over 1 hour durations", () => {
        const duration = 3670;
        const res = formatDuration(duration);
        expect(res).toBe("1h 1min 10s");
    });
});
