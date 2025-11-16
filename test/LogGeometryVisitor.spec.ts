import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor"
import GeometryCollection from "../src/GeometryCollection";

describe("test LogGeometryVisitor", () => {
    it("test GeometryVisitor with empty Point", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message:string)=>{
            result = message;
        });
        const emptyPoint = new Point();
        emptyPoint.accept(visitor);
        expect(result).to.equal("Je suis un point vide.");
    });

    it("test GeometryVisitor with Point with coordinates", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        const p = new Point([3.0,4.0]);
        p.accept(visitor);
        expect(result).to.equal("Je suis un point avec x=3.0 et y=4.0.");
    });

    it("test GeometryVisitor with empty Linestring", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        const emptyLineString = new LineString();
        emptyLineString.accept(visitor);
        expect(result).to.equal("Je suis une polyligne vide.");
    });

    it("test GeometryVisitor with non empty Linestring", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([4.0,5.0]);
        const p3 = new Point([6.0,8.0]);
        const l =  new LineString([p1, p2, p3]);
        l.accept(visitor);
        expect(result).to.equal("Je suis une polyligne définie par 3 point(s).");
    });

    it("test GeometryVisitor with empty GeometryCollection", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        const c = new GeometryCollection();
        c.accept(visitor);
        expect(result).to.be.equal("Je suis une collection de géométries vide.");
    });

    it("test GeometryVisitor with non empty GeometryCollection", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        const pl1 = new Point([1.0, 1.0]);
        const pl2 = new Point([3.0, 0.0]);
        const l = new LineString([pl1, pl2]);
        const p1 = new Point([0.0, 0.0]);
        const c = new GeometryCollection([l, p1]);
        c.accept(visitor);
        expect(result).to.equal("Je suis une collection de géométries définie par 2 géométrie(s)."); 
    });
});