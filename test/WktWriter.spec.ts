import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter"

describe("tesst WktWriter", () => {
    it("test WktWriter with empty Point ", () => {
        const emptyPoint = new Point();
        const writer = new WktWriter();
        expect(writer.write(emptyPoint)).to.equal("POINT EMPTY");
    });

    it("test WktWriter with empty LineString ", () => {
        const emptyLineString = new LineString();
        const writer = new WktWriter();
        expect(writer.write(emptyLineString)).to.equal("LINESTRING EMPTY");
    });

    it("test WktWriter with point", () => {
        const p = new Point([3.0,4.0]);
        const writer = new WktWriter();
        expect(writer.write(p)).to.equal("POINT(3.0 4.0)");
    });

    it("test WktWriter with LineString", () => {
        const p1 = new Point([0.0,0.0]);
        const p2 = new Point([1.0,1.0]);
        const p3 = new Point([5.0,5.0]);
        const l = new LineString([p1, p2, p3]);
        const writer = new WktWriter();
        expect(writer.write(l)).to.equal("LINESTRING(0.0 0.0,1.0 1.0,5.0 5.0)");
    });
});