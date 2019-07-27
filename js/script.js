function quoteCreator(quote, source = "Ananymous", citation = null, year = null, tags = null) {
    this.quote = quote;
    this.source = source;
    if (citation != null) {
        this.citation = citation;
    }
    if (year != null) {
        this.year = year;
    }
    if (tags) {
        this.tags = tags;
    }
}

var quotes = [
    new quoteCreator("It is strange that only extraordinary men make the discoveries, which later appear so easy and simple", "GEORG C. LICHTENBERG", " A physics Book", "1742 TO 1799", "#physics"),
    new quoteCreator("Actually, everything that can be known has a Number; for it is impossible to grasp anything with the mind or to recognize it without this.", "PHILOLAUS", " Actually no Idea", null, "#no_tags"),
    new quoteCreator("God created two acts of folly. First, He created the Universe in a Big Bang. Second, He was negligent enough to leave behind evidence for this act, in the form of microwave radiation.", "PAUL ERDŐS", " A Math Book(Maybe)", "1913 TO 1996", "Mathematician"),
    new quoteCreator("Progress is made by trial and failure; the failures are generally a hundred times more numerous than the successes ; yet they are usually left unchronicled.", "WILLIAM RAMSAY", null, "1852 TO 1916", "#irgendein"),
    new quoteCreator("There may be babblers, wholly ignorant of mathematics, who dare to condemn my hypothesis, upon the authority of some part of the Bible twisted to suit their purpose. I value them not, and scorn their unfounded judgment.", " NICOLAUS COPERNICUS", null, "1473 – 1543"),
    new quoteCreator("An experiment is a question which science poses to Nature, and a measurement is the recording of Nature’s answer.", "MAX PLANCK", "Einstein had said it", "1858 TO 1947", "#egal"),
    new quoteCreator("Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.", "Patrick McKenzie", "Twitter", "2016", "#programming")
]
console.log(quotes);


function getRandomQoute() {
    var num = Math.floor(Math.random() * quotes.length);
    return quotes[num];
}


function printQuote() {
    var quot = getRandomQoute();
    var message = "";
    message += '<p class="quote">' + quot.quote + '</p>' + '<p class="source">' + quot.source;
    if (quot.citation) {
        message += '<span class="citation">' + quot.citation + '</span>';
    }
    if (quot.year) {
        message += '<span class="year">' + quot.year + '</span>';
    }
    message += '</p>';
    if (quot.tags) {

        message += '<span class ="tags">' + quot.tags + '</span>';
    }
    quoteBox = document.getElementById('quote-box');
    quoteBox.innerHTML = message;
    var color = makeRandomColor();
    changeBackground(color);
    console.log(color);

}

function makeRandomColor() {
    var c = '';
    while (c.length < 6) {
        c += (Math.random()).toString(16).substr(-6).substr(-1)
    }
    return '#' + c;
}

function changeBackground(color) {
    document.querySelector("body").style.background = color;
    document.querySelector("loadQuote").style.background = color;
    document.querySelector("loadQuote:hover").style.background = color;
    //document.write(document.querySelector("body").style.background);
}

// A button to "Show another quote" 

setInterval(printQuote, 3000);
document.getElementById('loadQuote').addEventListener("click", printQuote, true);