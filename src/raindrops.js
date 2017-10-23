'use strict';


	const rainDrop = (input) => {
// if input is a number...		
		let result = "";
		if (typeof(input) === 'number'){

			if (input === 0){
				return 0;
			}

			if (input%3 === 0){
				result += "pling";
			}
			if (input%5 === 0){
				result += "plang";
			}
			if (input%7 === 0){
				result += "plong";
			}
		}
//if input is not a number e.g strings, array etc
		else {
			return 'only numbers allowed';
		}

		if(result) {
			return result;
		} else {
			return input;
		}
	};

	export {
		rainDrop
	};