function volume_sphere() {
    //Write your code here
	const radius = document.getElementById("radius");
	const volume = document.getElementById("volume");

	if(isNaN(radius.value) || radius.value < 0){
		volume.value = 'NaN'
		return;		
	}

	let v = (4/3) * Math.PI * Math.pow(radius.value, 3);

	volume.value = v.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
