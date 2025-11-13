import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Envelope from  "../src/Envelope"
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test Envelope", () => {
    it("test empty envelope constructor", () => {
        const builder = new EnvelopeBuilder();
        const result = builder.build();
        expect(result.isEmpty()).to.be.true;
    });
    it("test envelope constructor with coordinates"), () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0,1.0]);
        builder.insert([2.0,0.0]);
        builder.insert([1.0,3.0]);
        const result = builder.build();
        expect(result.isEmpty()).to.be.false;
    };
});