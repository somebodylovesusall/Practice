const quotes = [
  {
    quote: "A life without despair is a life without hope.",
    author: "Paul Schrader"
  },
  {
    quote: "There is another world, but it is in this one.",
    author: "William Butler Yeats"
  },
  {
    quote: "Let your soul stand cool and composed before a million universes.",
    author: "Walt Whitman"
  },
  {
    quote: "Memory believes before knowing remembers.",
    author: "William Faulkner"
  },
  {
    quote: "Between my finger and my thumb, The squat pen rests. I'll dig with it.",
    author: "Seamus Heaney"
  },
  {
    quote: "What's Wrong About Feeling Good?",
    author: "Murakami Haruki"
  },
  {
    quote: "I knew every raindrop by its name.",
    author: "Denis Hale Johnson"
  },
  {
    quote: "I will drink Life to the lees.",
    author: "Alfred, Lord Tennyson"
  },
  {
    quote: "Caught in between all you wish for and all you seen.",
    author: "Joseph Arthur"
  },
  {
    quote: "Not knowing when the Dawn will come, I open every Door.",
    author: "Emily Dickinson"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;