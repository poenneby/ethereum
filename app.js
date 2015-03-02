// Replace with your contract address here
var contractAddress = '3a80033b930d8454c54e7bb870782f03c228598f';

var web3 = parent.web3;

var SimpleStorage = [
	{
		"constant":false,
		"inputs":[{"name":"x","type":"uint256"}],
		"name":"set",
		"outputs":[],
		"type":"function"
	},
	{
		"constant":true,
		"inputs":[],
		"name":"get",
		"outputs":[{"name":"retVal","type":"uint256"}],
		"type":"function"
	}
]

var storageContract = web3.eth.contract(contractAddress, SimpleStorage);
function set() {
	var v = document.getElementById("setF").value;
	v = parseInt(v, 10);
	storageContract.set(v);
}

function get() {
	var v = storageContract.get().toString(10);
	document.getElementById("getF").value = v;
}
