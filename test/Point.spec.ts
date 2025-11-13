import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.isEmpty()).to.be.true;
        expect(p.getType()).to.equal("Point");
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.be.false;
        expect(p.getType()).to.equal("Point");
    });
    it("test empty translation of a point", () => {
        const p = new Point([3.0,4.0]);
        p.translate(0.0, 0.0);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("test translation of a point", () => {
        const p = new Point([3.0,4.0]);
        p.translate(1.0, 1.0);
        expect(p.x()).to.equal(4.0);
        expect(p.y()).to.equal(5.0);
    });
});

