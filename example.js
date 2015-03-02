ajax(
	'',
	'POST',
	{ 'ciao': 'pippo', 'dd': { 'a': 'uno', 'b': 'due', 'c': 'tre' } }
).then(
	function(a){ // a = xmlhttp object
		console.log('success');
	},
	function(b){ // b = xmlhttp object
		console.log('fail');
	}
);
