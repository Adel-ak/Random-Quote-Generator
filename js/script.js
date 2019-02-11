// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//an arry with muiltpel objects
let quotes = [
	{
		quote:
			"We will be perfect in every aspect of the game. You drop a pass, you run a mile. You miss a blocking assignment, you run a mile. You fumble the football, and I will break my foot off in your John Brown hind parts and then you will run a mile. Perfection! Let's go to work.",
		source: 'Denzel Washington',
		citation: 'Remember the Titans',
		year: 2000
	},
	{
		quote:
			'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.',
		source: 'Amelia Earhart'
	},
	{
		quote:
			'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.',
		source: 'Marilyn Monroe'
	},
	{
		quote:
			'he first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
		source: 'Mark Caine'
	},
	{
		quote:
			'When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us.',
		source: ' Alexander Graham Bell'
	}
];

/*
generating a random number
(num)holds a number between 0 and leangth of array
(quote)holds one object properties from quotes array
*/
function getRandomQuote(gen) {
	var num = Math.floor(Math.random() * gen.length);
	var quote = gen[num];
	return quote;
}

/***
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
/*
function prints out to HTML,
(quote)calls getRandomQuote function,
(print)holds strings from quote properties
(if)used hasOwnPropety to check if propety exist in object-----found out by sreching google then link to MDN
*/
function printQuote() {
	var quote = getRandomQuote(quotes);
	var outputDiv = document.getElementById('quote-box');
	var print = '<p class="quote">' + quote.quote + '</P>';
	print += '<p class="source">' + quote.source;
	if (quote.hasOwnProperty('citation')) {
		print += '<span class="citation">' + quote.citation + '</span>';
	}
	if (quote.hasOwnProperty('year')) {
		print += '<span class="year">' + quote.year + '</span>';
	}
	print += '</p>';
	outputDiv.innerHTML = print;
}

//the event listener will call, or "invoke", the `printQuote` function.
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
