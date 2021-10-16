const sumLargestNumbers = function(data) {
  let num1 = 0;
	let num2 = 0;
	let total = [];
	for (let i=0;i<data.length;i++) {
		if (data[i] > num1) {
			num1 = data[i];
			total[0] = num1;
		}
	}

	for (let j=0;j<data.length;j++) {
		if (data[j] >= num2 && data[j] < num1) {
			num2 = data[j];
			total[1] = num2;
		}
	}
	return (total[0] + total[1]);
};

console.log(sumLargestNumbers([ 1, 10]));
console.log(sumLargestNumbers([ 1, 2, 3]));
console.log(sumLargestNumbers([ 10, 4, 34, 6, 92, 2]));
