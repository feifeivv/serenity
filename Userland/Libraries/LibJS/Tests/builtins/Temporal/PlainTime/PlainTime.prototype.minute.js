describe("correct behavior", () => {
    test("basic functionality", () => {
        const plainTime = new Temporal.PlainTime(0, 12);
        expect(plainTime.minute).toBe(12);
    });
});

describe("errors", () => {
    test("this value must be a Temporal.PlainTime object", () => {
        expect(() => {
            Reflect.get(Temporal.PlainTime.prototype, "minute", "foo");
        }).toThrowWithMessage(TypeError, "Not a Temporal.PlainTime");
    });
});
