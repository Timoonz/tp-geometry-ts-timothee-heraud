import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor"

describe("test LogGeometryVisitor", () => {
    it("test GeometryVisitor empty Point", () => {
        const visitor = new LogGeometryVisitor();
        const emptyPoint = new Point();
        expect(emptyPoint.accept(visitor)).to.equal("Je suis un point vide.");
    });
    it("test GeometryVisitor Point with coordinates", () => {
        const visitor = new LogGeometryVisitor();
        const p = new Point([3.0,4.0]);
        expect(p.accept(visitor)).to.equal("Je suis un point avec x=3.0 et y=4.0.");
    });
    it("test GeometryVisitor empty LineString", () => {
        const visitor = new LogGeometryVisitor();
        const emptyLineString = new LineString();
        expect(emptyLineString.accept(visitor)).to.equal("Je suis une polyligne vide.");
    });
    it("test GeometryVisitor LineString with Points", () => {
        const visitor = new LogGeometryVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([4.0,5.0]);
        const p3 = new Point([6.0,8.0]);
        const l =  new LineString([p1, p2, p3]);
        expect(l.accept(visitor)).to.equal("Je suis une polyligne définie par 3 point(s).");
    });   
});