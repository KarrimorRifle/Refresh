//vital requires
const express = require('express'),
	app = express(),
	path = require('path'),
	cors = require('cors'),
	axios = require('axios');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(cors());

//cat api
app.get('/cat', async (req, res) => {
	try {
		var cat = await fetch('https://api.thecatapi.com/v1/images/search');
		var data = await cat.json();
		res.render('cat.ejs', { name: 'Samuel', data: data[0] });
	} catch (e) {
		console.log(e);
	}
});

//scroll api
app.get('/scroll', async (req, res) => {
	res.render('scroll.ejs');
});

//home
app.get('/', async (req, res) => {
	let quote = await fetch('https://zenquotes.io/api/today');
	quote = await quote.json();
	let profile = await fetch('https://api.github.com/users/KarrimorRifle');
	profile = await profile.json();
	res.render('home', { quote: quote[0], profile: profile });
});

//app listen
app.listen(3000, () => {
	console.log('port open on 3000!');
});
