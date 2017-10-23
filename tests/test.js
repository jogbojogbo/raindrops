import chai from "chai";
import {
	rainDrop
} from "../src/raindrops.js";

let assert = chai.assert;

describe("rainDrop", () => {

	describe("handle vaild input", () => {
		it("should return plingplangplong as rainDrop for 105", () =>{
			assert.equal(rainDrop(105), "plingplangplong");
		});
		
		it("should return plingplang as rainDrop for 15", () =>{
			assert.equal(rainDrop(15), "plingplang");
		});

		it("should return plingplong as rainDrop for 21", () =>{
			assert.equal(rainDrop(21), "plingplong");
		});

		it("should return plangplong as rainDrop for 35", () =>{
			assert.equal(rainDrop(35), "plangplong");
		});

		it("should return pling as rainDrop for 3", () =>{
			assert.equal(rainDrop(3), "pling");
		});

		it("should return plang as rainDrop for 5", () =>{
			assert.equal(rainDrop(5), "plang");
		});

		it("should return plong as rainDrop for 7", () =>{
			assert.equal(rainDrop(7), "plong");
		});

		it("should return 4 as rainDrop for 4", () =>{
			assert.equal(rainDrop(4), 4);
		});

		it("should return plingplangplong as rainDrop for -105", () =>{
			assert.equal(rainDrop(-105), "plingplangplong");
		});

		it("should return 0 as rainDrop for 0", () =>{
			assert.equal(rainDrop(0), 0);
		});

		})
	

	describe("handle invalid input", () => {
		it("should return only numbers allowed as rainDrop for boy", () =>{
			assert.equal(rainDrop("boy"), 'only numbers allowed');
			});

		it("should return please input a number as rainDrop for ''", () =>{
			assert.equal(rainDrop(''), 'only numbers allowed');
			});

		it("should return please input a number as rainDrop for [6,8]", () =>{
			assert.equal(rainDrop([6,8]), 'only numbers allowed');
			});

		it("should return please input a number as rainDrop for {name: 'aje'}", () =>{
			assert.equal(rainDrop({name: 'aje'}), 'only numbers allowed');
			});
		});
	})
