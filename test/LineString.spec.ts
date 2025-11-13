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
    });
    it("test constructor with points", () => {
        const a = new Point([0.0,0.0]);
        const b = new Point([3.0,4.0]);
        const g = new LineString([a,b]);
        expect(g.getNumPoints()).to.equal(2);
        expect(g.getPointN(0)).to.equal(a);
        expect(g.getPointN(1)).to.equal(b);
        expect(g.isEmpty()).to.be.false;
        expect(g.getType()).to.equal("LineString");
    });

});
