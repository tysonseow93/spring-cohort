let StringUtils = (function() {
	let vm = {};

	vm.capitalize = capitalize;
	vm.format = format;
	return vm;

	//------------------------------------------------------------------------------------------------------------------
	function capitalize(str) {
		return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	 }

	function format(formatString) {
		/*Should format a string replacing placeholders.
		e.g.:
			format("I love {0}", "soccer") -> I love soccer
			format("I love {0}, baseball is {1}.", "soccer", "lame") -> I love soccer, baseball is lame.
		 */

	 }

}());