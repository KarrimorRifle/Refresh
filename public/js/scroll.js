let main = document.querySelector('.main');

window.onscroll = function (ev) {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		// you're at the bottom of the page
		console.log('bottom');
		loadCats();
	}
};

window.onload = loadCats();
async function loadCats() {
	try {
		var cat = await fetch(
			'https://api.thecatapi.com/v1/images/search?limit=10'
		);
		var data = await cat.json();
		data.forEach((item) => {
			console.dir(item);
			let image = document.createElement('img');
			image.src = item.url;
			main.appendChild(image);
		});
	} catch (e) {
		console.log(e);
	}
}
