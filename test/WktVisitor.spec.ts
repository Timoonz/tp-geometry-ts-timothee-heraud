import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";

describe("test LogGeometryVisitor", () => {
    it("test GeometryVisitor empty Point", () => {
        const visitor = new WktVisitor();
        const emptyPoint = new Point();
        emptyPoint.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("POINT EMPTY");
    });
    it("test GeometryVisitor Point with coordinates", () => {
        const visitor = new WktVisitor();
        const p = new Point([3.0,4.0]);
        p.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("POINT(3.0 4.0)");
    });
    it("test GeometryVisitor empty LineString", () => {
        const visitor = new WktVisitor();
        const emptyLineString = new LineString();
        emptyLineString.accept((visitor));
        const wkt = visitor.getResult();
        expect(wkt).to.equal("LINESTRING EMPTY");
    });
    it("test GeometryVisitor LineString with Points", () => {
        const visitor = new WktVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([4.0,5.0]);
        const p3 = new Point([6.0,8.0]);
        const l =  new LineString([p1, p2, p3]);
        l.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("LINESTRING(3.0 4.0,4.0 5.0,6.0 8.0)");
    });   
});