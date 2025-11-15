import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor"

describe("test LogGeometryVisitor", () => {
    it("test GeometryVisitor avec un Point vide", () => {
        let result = "AAA";
        const visitor = new LogGeometryVisitor((message:string)=>{
            result = message;
        });
        const emptyPoint = new Point();
        emptyPoint.accept(visitor);
        expect(result).to.equal("Je suis un point vide.");
    });

    it("test GeometryVisitor avec un Point non vide", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        const p = new Point([3.0,4.0]);
        p.accept(visitor);
        expect(result).to.equal("Je suis un point avec x=3.0 et y=4.0.");
    });

    it("test GeometryVisitor avec une LineString vide", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        const emptyLineString = new LineString();
        emptyLineString.accept(visitor);
        expect(result).to.equal("Je suis une polyligne vide.");
    });

    it("test GeometryVisitor avec une LineString non vide", () => {
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
});