$(document).ready(() => {
	// Event handler for the quote Button
	$("#createRandomNumbers").click(() => {
		// API request to get random Quote
		$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", (result) => {
			$("#quoteText").html(result.quoteText);
			$("#author").html(result.quoteAuthor);
		});
	});

	// Event handler for the Tweet Button
	$("#tweetButton").click(() => {
		const quote = $("#quoteText").text();
		if (quote !== "Click the button below to see a quote!") {
			window.open(`https://twitter.com/intent/tweet?text=${quote}`);
		}
	});
});
