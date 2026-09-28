import { jest } from "@jest/globals";
import { helloWorld } from "../src/index.js";

describe("helloWorld", () => {
    test("returns Hello, world!", () => {
        expect(helloWorld()).toBe("Hello, world!");
    });

    test("prints Hello, world! when print is true", () => {
        const consoleSpy = jest
            .spyOn(console, "log")
            .mockImplementation(() => {});

        helloWorld(true);

        expect(consoleSpy).toHaveBeenCalledWith("Hello, world!");

        consoleSpy.mockRestore();
    });

    test("does not print when print is false", () => {
        const consoleSpy = jest
            .spyOn(console, "log")
            .mockImplementation(() => {});

        helloWorld(false);

        expect(consoleSpy).not.toHaveBeenCalled();

        consoleSpy.mockRestore();
    });
});