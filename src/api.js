const apiKey = process.env.REACT_APP_API_KEY;
console.log("key", apiKey);

//Base URL
const base_url = "http://www.omdbapi.com/?";

//Custom Requests

//All movies that include specific word in title
const moviesTitle = "love";

const movies = `s=${moviesTitle}&type=movie`;

const movie = `t=${moviesTitle}&type=movie`;

const moviesURL = (apiKey) => `${base_url}${movies}&apikey=${apiKey}`;

const movieURL = (apiKey) => `${base_url}${movie}&apikey=${apiKey}`;

console.log(moviesURL(`ggg`));
console.log(movieURL(`love`));
