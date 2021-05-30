function dis(val){
	document.getElementById('display').value+=val;
}
function calculate(){
	let a = document.getElementById('display').value;
	let b = eval(a);
	document.getElementById('display').value=b;
}
function clr(){
	document.getElementById('display').value="";
}
