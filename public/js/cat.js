let image = document.querySelector('img');
let button = document.querySelector('button');
console.log(image);
changeCat = async () => {
	var cat = await fetch('https://api.thecatapi.com/v1/images/search');
	var data = await cat.json();
	image.src = data[0].url;
};
