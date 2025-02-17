describe("correct behavior", () => {
    test("length is 0", () => {
        expect(Temporal.PlainDate.prototype.toJSON).toHaveLength(0);
    });

    test("basic functionality", () => {
        let plainDate;

        plainDate = new Temporal.PlainDate(2021, 7, 6);
        expect(plainDate.toJSON()).toBe("2021-07-06");

        plainDate = new Temporal.PlainDate(2021, 7, 6, { toString: () => "foo" });
        expect(plainDate.toJSON()).toBe("2021-07-06[u-ca=foo]");
    });
});

describe("errors", () => {
    test("this value must be a Temporal.PlainDate object", () => {
        expect(() => {
            Temporal.PlainDate.prototype.toJSON.call("foo");
        }).toThrowWithMessage(TypeError, "Not a Temporal.PlainDate");
    });
});
