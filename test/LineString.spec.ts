import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getNumPoints()).to.equal(0);
        expect(l.getPointN(10)).to.equal(undefined);
        expect(l.isEmpty()).to.be.true;
        expect(l.getType()).to.equal("LineString");
        expect(l.getEnvelope().isEmpty()).to.be.true;
        expect(l.asText()).to.equal("LINESTRING EMPTY");
    });
    it("test constructor with Points", () => {
        const a = new Point([0.0,0.0]);
        const b = new Point([3.0,4.0]);
        const g = new LineString([a,b]);
        expect(g.getNumPoints()).to.equal(2);
        expect(g.getPointN(0)).to.equal(a);
        expect(g.getPointN(1)).to.equal(b);
        expect(g.isEmpty()).to.be.false;
        expect(g.getType()).to.equal("LineString");
        expect(g.getEnvelope().toString()).to.equal("[0.0, 0.0, 3.0, 4.0]");
        expect(g.asText()).to.equal("LINESTRING(0.0 0.0,3.0 4.0)");

    });
    it("test translate LineString", () => {
        const a = new Point([0.0,0.0]);
        const b = new Point([3.0,4.0]);
        const g = new LineString([a,b]);
        g.translate(1.0, 1.0);
        expect(g.getPointN(0).getCoordinate()).to.deep.equal([1.0,1.0]);
        expect(g.getPointN(1).getCoordinate()).to.deep.equal([4.0,5.0]);
        expect(g.getEnvelope().toString()).to.equal("[1.0, 1.0, 4.0, 5.0]");
    });
    it("test copy LineString", () => {
        const p1 = new Point([0.0,0.0]);
        const p2 = new Point([1.0,2.0]);
        const l1 = new LineString([p1,p2]);
        const l2 = l1.clone();
        l1.translate(1.0, 1.0);
        expect(l1.getPointN(0).getCoordinate()).to.not.deep.equal(l2.getPointN(0).getCoordinate());
        expect(l1.getPointN(1).getCoordinate()).to.not.deep.equal(l2.getPointN(1).getCoordinate());
        //test the envelopes for the translated 
        expect(l1.getEnvelope().toString()).to.equal("[1.0, 1.0, 2.0, 3.0]");
        expect(l2.getEnvelope().toString()).to.equal("[0.0, 0.0, 1.0, 2.0]");
    });

});
