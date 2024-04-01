//Random Quotes Api URL
const quoteApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";
const quoteSection = document.getElementById("quote");
let quote = "";

//Display random quotes
const renderNewQuote = async () => {
  //Fetch contents from url
  const response = await fetch(quoteApiUrl);
  //Store response
  let data = await response.json();
  //Access quote
  quote = data.content;
  //Array of characters in the quote
  let arr = quote.split("").map((value) => {
    //wrap the characters in a span tag
    return "<span class='quote-chars'>" + value + "</span>";
  });
  //join array for displaying
  quoteSection.innerHTML += arr.join("");
};

// Call renderNewQuote when the window loads
window.onload = () => {
    renderNewQuote();
  };