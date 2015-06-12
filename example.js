ajax({
	url: '',
	method: 'POST',
	data: { 'ciao': 'pippo', 'dd': { 'a': 'uno', 'b': 'due', 'c': 'tre' } },
	success: function(a){ // a = xmlhttp object
		console.log('success');
	},
	fail: function(b){ // b = xmlhttp object
		console.log('fail');
	}
});
