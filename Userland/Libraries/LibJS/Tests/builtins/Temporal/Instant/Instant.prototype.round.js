describe("correct behavior", () => {
    test("length is 1", () => {
        expect(Temporal.Instant.prototype.round).toHaveLength(1);
    });

    test("basic functionality", () => {
        const instant = new Temporal.Instant(1111111111111n);
        expect(instant.round({ smallestUnit: "second" }).epochNanoseconds).toBe(1111000000000n);
        expect(
            instant.round({ smallestUnit: "second", roundingMode: "ceil" }).epochNanoseconds
        ).toBe(1112000000000n);
        expect(
            instant.round({ smallestUnit: "minute", roundingIncrement: 30, roundingMode: "floor" })
                .epochNanoseconds
        ).toBe(0n);
        expect(
            instant.round({
                smallestUnit: "minute",
                roundingIncrement: 30,
                roundingMode: "halfExpand",
            }).epochNanoseconds
        ).toBe(1800000000000n);
    });
});

describe("errors", () => {
    test("this value must be a Temporal.Instant object", () => {
        expect(() => {
            Temporal.Instant.prototype.round.call("foo", {});
        }).toThrowWithMessage(TypeError, "Not a Temporal.Instant");
    });

    test("invalid rounding mode", () => {
        expect(() => {
            const instant = new Temporal.Instant(1n);
            instant.round({ smallestUnit: "second", roundingMode: "serenityOS" });
        }).toThrowWithMessage(RangeError, "is not a valid value for option roundingMode");
    });

    test("invalid smallest unit", () => {
        expect(() => {
            const instant = new Temporal.Instant(1n);
            instant.round({ smallestUnit: "serenityOS" });
        }).toThrowWithMessage(RangeError, "is not a valid value for option smallestUnit");
    });

    test("increment may not be NaN", () => {
        expect(() => {
            const instant = new Temporal.Instant(1n);
            instant.round({ smallestUnit: "second", roundingIncrement: NaN });
        }).toThrowWithMessage(RangeError, "is not a valid value for option roundingIncrement");
    });

    test("increment may smaller than 1 or larger than maximum", () => {
        const instant = new Temporal.Instant(1n);
        expect(() => {
            instant.round({ smallestUnit: "second", roundingIncrement: -1 });
        }).toThrowWithMessage(RangeError, "is not a valid value for option roundingIncrement");
        expect(() => {
            instant.round({ smallestUnit: "second", roundingIncrement: 0 });
        }).toThrowWithMessage(RangeError, "is not a valid value for option roundingIncrement");
        expect(() => {
            instant.round({ smallestUnit: "second", roundingIncrement: Infinity });
        }).toThrowWithMessage(RangeError, "is not a valid value for option roundingIncrement");
    });
});
