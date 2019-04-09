let MathUtils = (function(){
	let vm = this;

	vm.add = add;
	vm.subtract = subtract;
	vm.average = average;

	return vm;

	function add(a,b){ 
		return a+b;
	}

	function subtract(a,b){ }

	function average(...numbers){
		let sum = 0;
		numbers.forEach(number => {
			sum += number;
		});
		return (sum/numbers.length)
	}

}());