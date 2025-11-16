import "mocha";
import { expect } from "chai";
import GeometryCollection from "../src/GeometryCollection";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test GeometryCollection", () => {

    it("test default constructor", () => {
        const c = new GeometryCollection();

        expect(c.getNumGeometries()).to.equal(0);
        expect(c.getGeometryN(0)).to.equal(undefined);
        expect(c.isEmpty()).to.be.true;
        expect(c.getType()).to.equal("GeometryCollection");
        expect(c.getEnvelope().isEmpty()).to.be.true;
        expect(c.asText()).to.equal("GEOMETRYCOLLECTION EMPTY");
    });

    it("test constructor with Geometries", () => {
        const pl1 = new Point([1.0, 1.0]);
        const pl2 = new Point([3.0, 0.0]);
        const pl3 = new Point([0.0, 5.0]);
        const l = new LineString([pl1, pl2, pl3]);
        const p1 = new Point([0.0, 0.0]);
        const p2 = new Point([3.0, 4.0]);
        const c = new GeometryCollection([l, p1, p2]);

        expect(c.getNumGeometries()).to.equal(3);
        expect(c.getGeometryN(6)).to.equal(undefined);
        expect(c.getGeometryN(1)).to.deep.equal(p1);
        expect(c.isEmpty()).to.be.false;
        expect(c.getEnvelope().toString()).to.equal("[0.0, 0.0, 3.0, 5.0]");
        expect(c.asText()).to.equal("GEOMETRYCOLLECTION(LINESTRING(1.0 1.0,3.0 0.0,0.0 5.0),POINT(0.0 0.0),POINT(3.0 4.0))");
    });

    it("test copy and translate geometry collection", () => {
        const p1 = new Point([1.0, 1.0]);
        const p2 = new Point([3.0, 0.0]);
        const c = new GeometryCollection([p1, p2]);
        const c_clone = c.clone();
        
        expect(c).to.not.equal(c_clone);
        expect(c).to.deep.equal(c_clone);

        c_clone.translate(1.0, 1.0);
        expect(c_clone.asText()).to.equal("GEOMETRYCOLLECTION(POINT(2.0 2.0),POINT(4.0 1.0))");
        expect(c).to.not.deep.equal(c_clone);
    });
    //TEST GEOMETRYCOLLECTION DANS GEOMETRYCOLLECTION ?
});