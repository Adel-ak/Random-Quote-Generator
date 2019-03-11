// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//an arry with muiltpel objects
let quotes = [
	{
		quote:
			"We will be perfect in every aspect of the game. You drop a pass, you run a mile. You miss a blocking assignment, you run a mile. You fumble the football, and I will break my foot off in your John Brown hind parts and then you will run a mile. Perfection! Let's go to work.",
		source: 'Denzel Washington',
		citation: 'Remember the Titans',
		category: "Movie's",
		year: 2000
	},
	{
		quote:
			'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.',
		source: 'Amelia Earhart'
	},
	{
		quote: 'Revenge is an act of passion; vengeance of justice. Injuries are revenged; crimes are avenged.',
		source: 'Dr Samuel Johnson',
		category: 'Revenge'
	},
	{
		quote:
			'I have done my fiddling so long under Vesuvius that I have almost forgotten to play, and can only wait for the eruption and think it long of coming. Literally no man has more wholly outlived life than I. And still it?s good fun.',
		source: 'Robert Louis Stevenson',
		category: 'Fun'
	},
	{
		quote:
			'When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us.',
		source: ' Alexander Graham Bell'
	},
	{
		quote: "I know who I am. I'm the dude playing a dude disguised as another dude!",
		source: 'Robert Downey Jr',
		citation: 'Tropic Thunder',
		category: "Movie's"
	},
	{
		quote:
			"It's the sense of touch. In any real city, you walk, you know? You brush past people, people bump into you. In L.A., nobody touches you. We're always behind this metal and glass. I think we miss that touch so much, that we crash into each other, just so we can feel something.",
		source: 'Matt Dillon',
		citation: 'Crash',
		category: "Movie's"
	},
	{
		quote:
			'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
		source: 'Bertrand Russell',
		year: 1970
	},
	{
		quote: 'You can avoid reality, but you cannot avoid the consequences of avoiding reality.',
		source: 'Ayn Rand',
		year: 1982
	},
	{
		quote: "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
		source: 'Albert Einstein',
		category: 'Science',
		year: 1920
	}
];

//holds a RGB value
let color = function randomColor() {
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	return 'rgb(' + red + ',' + green + ',' + blue + ')';
};

//function generating a random number
function getRandomQuote(gen) {
	//an arry with quotes objects that was already printed
	let printedQuote = [];
	var num = Math.floor(Math.random() * gen.length);
	//holds one object properties from quotes array that was picked by index of (num)
	var quote = gen[num];
	//removes the quote from quotes array to prevent it from generating the same random quote
	printedQuote.push(gen.splice(num, 1)[0]);
	if (gen.length === 1) {
		//checks if quotes array is empty so it can start removing from printed array then pushing it back to its origenal variable
		var addToArray = printedQuote.splice(0, printedQuote.length);
		for (var i = 0; i < addToArray.length; i++) {
			gen.push(addToArray[i]);
		}
	}
	return quote;
}

//function prints out to HTML,
function printQuote() {
	//calls getRandomQuote function
	var quote = getRandomQuote(quotes);
	//printes out to a specific element in HTML
	var outputDiv = document.getElementById('quote-box');
	//holds strings from quote properties
	var print = '<p class="quote">' + quote.quote + '</P>';
	print += '<p class="source">' + quote.source;
	//used hasOwnPropety to check if propety exist in object---https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
	if (quote.hasOwnProperty('citation')) {
		print += '<span class="citation">' + quote.citation + '</span>';
	}
	if (quote.hasOwnProperty('year')) {
		print += '<span class="year">' + quote.year + '</span>';
	}
	if (quote.hasOwnProperty('category')) {
		print += '<p class="category">' + 'Category :- ' + quote.category + '</P>';
	}
	print += '</p>';
	outputDiv.innerHTML = print;
	//changes the back ground color with a RGB value---https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
	document.body.style.backgroundColor = color();
	//changes the button back ground color with a RGB value
	document.getElementById('loadQuote').style.backgroundColor = color();
}
setInterval(printQuote, 15000); //---https://sarfraznawaz.wordpress.com/2012/01/26/javascript-self-invoking-functions/

//the event listener will call, or "invoke", the `printQuote` function.
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
