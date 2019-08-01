function panggilNestedArray(value) {
var nol = [];
var satu = [];
var dua = [];
var tiga = [];
var empat = [];
	for (var i = 0; i < value.length; i++) {
		satu.push(value[i][0]);
		dua.push(value[i][1]);
		tiga.push(value[i][2]);
		empat.push(value[i][3]);
	};
	nol.push(satu,dua,tiga,empat);
	console.log(nol);
};

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray);