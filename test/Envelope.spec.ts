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
        expect(result.getXmin()).to.equal(undefined);
        expect(result.getXmax()).to.equal(undefined);
        expect(result.getYmin()).to.equal(undefined);
        expect(result.getYmax()).to.equal(undefined);
    });

    it("test envelope constructor with a Point", () => {
        const p = new Point([0.0,1.0]);
        const result = p.getEnvelope();
    });

    it("test envelope constructor with a LineString", () => {
        const p1 = new Point([0.0,1.0]);
        const p2 = new Point([2.0,0.0]);
        const p3 = new Point([1.0,3.0]);
        const l = new LineString([p1, p2, p3]);
        const result = l.getEnvelope();
        expect(result.isEmpty()).to.be.false;
        expect(result.getXmin()).to.equal(0.0);
        expect(result.getXmax()).to.equal(2.0);
        expect(result.getYmin()).to.equal(0.0);
        expect(result.getYmax()).to.equal(3.0);
        expect(result.toString()).to.equal("[0.0, 0.0, 2.0, 3.0]");
    });
});